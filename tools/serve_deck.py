#!/usr/bin/env python3
"""Serve the deck for headless passes — concurrent, so it doesn't fake its own bugs.

USE THIS, NOT `python3 -m http.server`. The stdlib one-liner is single-threaded
with a tiny listen backlog, and a headless sweep opens many subresource requests
at once (a slide's images, SVGs and videos together). The server resets the
overflow, so Chrome reports `net::ERR_CONNECTION_RESET` /
`ERR_SOCKET_NOT_CONNECTED` on random assets and the deck renders *blank image
slides* that look exactly like real deck defects.

That misdiagnosis has now cost two separate QA passes (2026-10-07 and
2026-10-08), the second one while building tools/sweep_deck.mjs — four phantom
"broken image" failures that were the server, not the deck. Hence this file:
the fix belongs next to the tool that needs it, not in a note somebody has to
remember to read.

    python3 tools/serve_deck.py                 # port 8000, repo root
    python3 tools/serve_deck.py --port 8411
    python3 tools/serve_deck.py --dir /tmp/some-deck-checkout

Then, in another shell:
    node tools/sweep_deck.mjs http://localhost:8411/ /tmp/sweep 375 812 phone
"""
import argparse
import functools
import os
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class DeckServer(ThreadingHTTPServer):
    # The default is 5. A sweep can have dozens of requests in flight for one
    # slide; anything that doesn't fit the backlog is reset, not queued.
    request_queue_size = 256
    daemon_threads = True
    allow_reuse_address = True


class QuietHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        # Chrome needs byte ranges for selected video posters and seeking.
        # A 200 response to a Range request can silently seek back to frame zero.
        self._range = None
        value = self.headers.get("Range")
        local = self.translate_path(self.path)
        if not value or not os.path.isfile(local):
            return super().send_head()
        match = re.fullmatch(r"bytes=(\d*)-(\d*)", value.strip())
        if not match or not any(match.groups()):
            return super().send_head()
        stream = open(local, "rb")
        size = os.fstat(stream.fileno()).st_size
        first, last = match.groups()
        start = int(first) if first else max(0, size - int(last))
        end = min(size - 1, int(last)) if first and last else size - 1
        if start >= size or end < start:
            stream.close()
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.send_header("Content-Length", "0")
            self.end_headers()
            return None
        stream.seek(start)
        self._range = (start, end)
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(local))
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return stream

    def copyfile(self, source, outputfile):
        if self._range is None:
            return super().copyfile(source, outputfile)
        remaining = self._range[1] - self._range[0] + 1
        while remaining:
            chunk = source.read(min(65536, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

    def log_message(self, fmt, *args):  # a sweep makes thousands of these
        pass


class VerboseHandler(QuietHandler):
    log_message = SimpleHTTPRequestHandler.log_message


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--dir", default=str(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
    ap.add_argument("--verbose", action="store_true", help="log every request")
    args = ap.parse_args()

    handler = functools.partial(
        VerboseHandler if args.verbose else QuietHandler, directory=args.dir
    )
    with DeckServer(("127.0.0.1", args.port), handler) as httpd:
        print(f"serving {args.dir} at http://localhost:{args.port}/ "
              f"(threaded, backlog {DeckServer.request_queue_size}) — ctrl-c to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nstopped")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
