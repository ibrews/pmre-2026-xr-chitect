// Regression: the old capture path exported no separate MP4 for an ordinary local video.
import {renderLocalVideo} from '../venue_capture.mjs';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs'; import os from 'node:os'; import path from 'node:path';import assert from 'node:assert/strict';import {pathToFileURL} from 'node:url';
const d=fs.mkdtempSync(path.join(os.tmpdir(),'venue-local-test-'));
try {
 const clip=path.join(d,'clip.mp4'),bg=path.join(d,'bg.png');
 execFileSync('ffmpeg',['-y','-loglevel','error','-f','lavfi','-i','testsrc2=s=320x180:r=30:d=2','-f','lavfi','-i','sine=frequency=440:duration=2.15','-c:v','libx264','-pix_fmt','yuv420p','-c:a','aac',clip]);
 execFileSync('ffmpeg',['-y','-loglevel','error','-f','lavfi','-i','color=c=0x101014:s=1920x1080','-frames:v','1','-update','1',bg]);
 const r=renderLocalVideo({src:pathToFileURL(clip).href},{bg},{safe:70,fps:30},d);
 assert(fs.existsSync(r.cache)&&fs.existsSync(r.poster));assert(r.audio);assert(Math.abs(r.duration-2.15)<.12);assert.deepEqual(r.safeBox,[288,162,1344,756]);
 const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-show_streams','-of','json',r.cache]));assert(probe.streams.some(s=>s.codec_type==='audio'));assert.equal(probe.streams[0].width,1920);assert.equal(probe.streams[0].height,1080);
 const pix=execFileSync('ffmpeg',['-loglevel','error','-ss','1','-i',r.cache,'-frames:v','1','-f','rawvideo','-pix_fmt','rgb24','-'],{maxBuffer:10e6});assert(pix[0]<30&&pix[1]<30&&pix[2]<30);
 const at=(540*1920+960)*3;assert(pix[at]+pix[at+1]+pix[at+2]>40);
 // A representative poster must survive a clip ending on black, and deck chrome stays above video.
 const fading=path.join(d,'fading.mp4'),chrome=path.join(d,'chrome.png');
 execFileSync('ffmpeg',['-y','-loglevel','error','-i',clip,'-vf','fade=t=out:st=1:d=0.4','-c:v','libx264','-c:a','copy',fading]);
 execFileSync('ffmpeg',['-y','-loglevel','error','-f','lavfi','-i','color=black@0:s=1920x1080,format=rgba','-vf','drawbox=x=400:y=230:w=200:h=100:color=magenta@1:t=fill:replace=1','-frames:v','1',chrome]);
 const selected=renderLocalVideo({src:pathToFileURL(fading).href,posterTime:.5,story:true},{bg,videoChrome:chrome},{safe:70,fps:30},d);
 const still=execFileSync('ffmpeg',['-loglevel','error','-i',selected.poster,'-f','rawvideo','-pix_fmt','rgb24','-'],{maxBuffer:10e6});
 const mark=(250*1920+450)*3;assert(still[mark]>180&&still[mark+1]<60&&still[mark+2]>180,'overlay chrome must stay above moving video');
 assert(still[at]+still[at+1]+still[at+2]>40,'selected poster must show real footage before the black ending');
 console.log('PASS: complete local clip with audio longer than video, source audio, dark 1920x1080 frame, 1344x756 safe box');
}finally{fs.rmSync(d,{recursive:true,force:true});}
