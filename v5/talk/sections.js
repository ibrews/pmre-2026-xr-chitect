// PMRE v5: presenter-dictated opening and Syracuse arc, ring+Venn tracker, chronological story with a real-estate-media thread.
const TALK = {
  "coverEvent": "PMRE 2026 &middot; Las Vegas &middot; Thursday, Nov 19",
  "coverTitle": "Architect to <span class=\"xr\">XR</span>-chitect",
  "coverSub": "The Best Career Advice I Ever Ignored",
  "speaker": "Alex Coulombe",
  "speakerCo": "Founder, Agile Lens &middot; New York City",
  "coverNotes": "⏱ ~30s.\n\nI want to tell you how architecture, theater and emerging technology became one job. I hope this sparks an idea about the things you love. Full is the primary rehearsal cut. Select 20t for the venue time limit.\n\nFor this room: I make spaces understandable before people can be there. You already do that with property photographs and films. I want to show you what you might sell when the buyer can step inside the media.",
  "mapCenter": [
    "ARCHITECT",
    "TO XR-CHITECT"
  ],
  "mapNotes": "⏱ ~0s.\nHidden: per-slide year and Venn carry the orientation.",
  "closeEyebrow": "",
  "closeTitle": "What’s your weird intersection?",
  "closeSub": "",
  "web": "agilelens.com",
  "qr": "https://agilelens.com",
  "qrLabel": "Explore our immersive projects · agilelens.com",
  "options": {
    "cut": {
      "label": "Length",
      "default": "full",
      "choices": {
        "20": "Short rehearsal",
        "30": "Medium rehearsal",
        "full": "Full story (~80 min)",
        "20t": "Venue short + Q&A"
      }
    },
    "theme": {
      "label": "Look",
      "default": "house",
      "choices": {
        "noir": "Noir (original)",
        "sheet": "Drawing set",
        "folio": "Folio (editorial)",
        "house": "House (theater program)",
        "swiss": "Swiss",
        "memo": "Memo",
        "cyanotype": "Cyanotype",
        "gallery": "Gallery"
      }
    },
    "chrome": {
      "label": "Page chrome",
      "default": "quiet",
      "choices": {
        "quiet": "Quiet (title bar, page numbers, section labels off)",
        "full": "Full (on every slide)",
        "none": "None (chapter kickers off too)"
      }
    },
    "safe": {
      "label": "Venue safe zone",
      "default": "70",
      "choices": {
        "70": "On: PMRE 1344×756 (70%, used by the venue export)",
        "off": "Off (full frame, web deck)"
      }
    },
    "journey": {
      "label": "Pixel Alex",
      "default": "off",
      "choices": {
        "on": "Minimap + hop-outs",
        "map": "Minimap only",
        "off": "Off"
      }
    },
    "workflows": {
      "label": "Extra design demonstrations",
      "default": "core",
      "choices": {
        "core": "Core story",
        "extended": "Include Designing Naturally s45 + s53"
      }
    },
    "ai": {
      "label": "Current AI excitement",
      "default": "on",
      "choices": {
        "on": "Include",
        "off": "Skip"
      }
    },
    "niche": {
      "label": "Niche example",
      "default": "devon",
      "choices": {
        "devon": "Devon: photography + performance",
        "miranda": "Miranda: theatre + hip-hop",
        "natalia": "Natalia: interiors + architecture",
        "matt": "Matt: photography + branding"
      }
    }
  },
  "thesisAlts": {},
  "closeAlts": {},
  "closeNotes": "⏱ ~40s.\n\nIt makes me happy when I hear that I inspired someone to pursue VR, architecture, theater, or whatever they love. Thank you. What’s your weird intersection?\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIt makes me happy when I hear I inspired someone to pursue VR, architecture, theater, or whatever they love. That is what I hope this story does.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n"
};
const SECTIONS = [
  {
    "year": "2026",
    "accent": "teal",
    "storyChapter": 1,
    "storyLesson": "Hello",
    "lesson": {
      "title": "Hello",
      "short": "Hello",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "hello",
        "use": "pmre/text-card",
        "props": {
          "kicker": "Agile Lens Immersive Design · New York City",
          "title": "An XR studio",
          "lines": [
            "Architecture",
            "Real estate",
            "Entertainment",
            "…and much more"
          ]
        },
        "title": "An XR studio",
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nMy name is Alex Coulombe. I run a little company in New York City called Agile Lens Immersive Design: an XR studio working across architecture, real estate, entertainment and much more.\n\nThank you to Brandon. Thank you to PMRE. I am particularly excited to be in Vegas, as you will hear later: about ten years ago something really cool happened here, and what happened in Vegas did not stay in Vegas. (Confirmed by Alex 2026-11-14: the Vegas moment is Autodesk University 2017. Pays off at the “Sharing work led to speaking” slide.)\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n",
        "hideTracker": true
      },
      {
        "id": "goals",
        "use": "pmre/text-card",
        "props": {
          "kicker": "Two goals for today",
          "title": "",
          "lines": [
            "<b>1.</b> Find the expertise you haven’t tapped yet",
            "<b>2.</b> Step inside real estate that isn’t built yet: at full scale, photoreal, in VR, AR and Gaussian splats"
          ]
        },
        "title": "",
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nToday is mostly story time. I will go roughly chronologically. Two goals.\n\nOne: tell a good yarn, and maybe get you thinking about what it means to develop expertise in a niche, and about the special abilities, interests or passions you have that are so far untapped.\n\nTwo: get you excited about what virtual, augmented and mixed reality can do in architecture and real estate. You may be thinking, I have worked with Matterport. This is more about projects that do not exist yet: Gaussian splatting for unbuilt properties, walking through something completely at scale, photorealistic, in a way that amazes and inspires.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n",
        "hideTracker": true
      },
      {
        "id": "teaser",
        "use": "pmre/text-card",
        "props": {
          "kicker": "Where this story ends",
          "big": "$2 billion",
          "quote": "“It was binary.”",
          "attr": "Without our VR, the project would not have happened."
        },
        "title": "",
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~35s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nSpoiler alert for where this is headed. By the end I will tell you how a crazy professional journey led me and my company to a $2 billion real estate project (a billion with a B), and to being a crucial lever in making it happen. What the client later told us: it was binary. The project would not have happened without our virtual reality. Stick around for the whole story.\n\nVerified: Four Seasons Lake Austin, $2 billion development (KB project record). Alex’s own wording on Voices of VR #1481 (2024): “It’s binary. Without this VR experience, this project would not be happening.” Say it as the client’s verdict, as dictated; the later presales and construction-loan slides carry the detail.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n",
        "hideTracker": true
      },
      {
        "id": "rewind",
        "use": "pmre/ring-chapter",
        "props": {
          "from": 2026,
          "year": 2005,
          "kicker": "REWIND",
          "label": "2005",
          "sub": "Fresh out of high school,\nstarting architecture school\nat Syracuse University",
          "venn": [
            1,
            1,
            1
          ],
          "vennFrom": [
            1,
            1,
            1
          ]
        },
        "title": "",
        "keep": 19,
        "year": "2005",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "hideTracker": true,
        "notes": "⏱ ~15s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nLet’s rewind. 2005. I am fresh out of high school, starting architecture school at Syracuse University. (Skip why architecture and the degree; dive right in.)\n\nThe outer ring is the years of this story; my marker travels around it. The Venn inside is the mix of architecture, theater and emerging technology at each point. A compact version lives in the corner of every slide.\n\nYear: 2005. Venn weights: 1 / 1 / 1.\n"
      }
    ]
  },
  {
    "year": "2005",
    "accent": "purple",
    "storyChapter": 2,
    "storyLesson": "Architecture school",
    "lesson": {
      "title": "Architecture school",
      "short": "Architecture school",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "lanes",
        "use": "pmre/lane-traffic",
        "props": {},
        "title": "",
        "keep": 99,
        "year": "2005",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nMy interests kept pulling in different directions. Architecture, theater, emerging technology.\n\nYear: 2005. Venn weights: 1 / 1 / 1.\n\n2026-11-14 dictation:\nI came in with three major interests. Architecture, of course. Theater: I was a theater nerd in high school, writing my own plays and quasi-musicals, and I loved the typology of theater. And emerging technology: I was trying to get my hands on any 3D modeling tool, excited to model crazy buildings in Rhino and a new application called SketchUp. The icons appear here for the first time.\n",
        "motion": "lane-traffic"
      },
      {
        "id": "lanes-venn",
        "use": "pmre/lane-to-venn",
        "props": {},
        "title": "",
        "keep": 19,
        "year": "2005",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI was looking for places where those interests could work together. Establish cyan architecture, rose theater and violet technology, matching the tracker.\n\nYear: 2005. Venn weights: 1 / 1 / 1.\n\n2026-11-14 dictation:\nI was looking for overlaps. The structure of a play would inform the structure of my architecture project; creative energy fed from one project into another.\n",
        "motion": "lane-to-venn"
      },
      {
        "id": "rosa",
        "use": "pmre/text-card",
        "props": {
          "kicker": "First year",
          "title": "",
          "quote": "“You’re spread too thin. Pick one.”",
          "attr": "A first-year studio professor"
        },
        "title": "",
        "keep": 19,
        "year": "2005",
        "venn": [
          1,
          0.5,
          0.2
        ],
        "storyRole": "content",
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nFirst year, a professor asked what I was interested in. I told him. He said: you’re spread too thin. You can’t do all those things; there is no way to have a successful career with that variety of interests. This is a brutal program and a lot of people drop out. Commit, focus on architecture, forget about theater and whatever you want to do with video games. I said okay.\n\nEarlier walk: the professor was Richard Rosa. People who tell you to focus on one thing are telling you what worked for their brain.\n\nYear: 2005. Venn weights: 1 / 0.5 / 0.2.\n"
      },
      {
        "id": "hand",
        "use": "pmre/the-hand",
        "props": {},
        "title": "Drawing taught me to look",
        "keep": 30,
        "year": "2005",
        "venn": [
          1,
          0,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAt Syracuse we were not allowed to touch a computer for the first year. At the time it was excruciating. It made me think deliberately about every line and every line weight. With Revit you make a wall, and the lines are a byproduct. Clarity can get lost.\n\nYear: 2005. Venn weights: 1 / 0 / 0.1.\n\n\nElizabeth review, November 11: The diagram contrasts a carefully drawn stair opening with a generated slab that blocks the stair. Ask the audience to spot the headroom problem. The point is that learning a tool also means learning to judge its output. The building/error is an original schematic, not a real failed project. Retain because this establishes the trained eye before the software workflow.",
        "motion": "the-hand"
      },
      {
        "id": "craft",
        "use": "pmre/text-card",
        "props": {
          "kicker": "Year one: no computers",
          "title": "Great ideas. Shaky craftsmanship.",
          "photos": [{"src": "media/pmre/v5/craft-model.jpg", "alt": "Alex's cardboard study model on a slanted base"}]
        },
        "title": "Great ideas. Shaky craftsmanship.",
        "keep": 30,
        "year": "2005",
        "venn": [
          1,
          0,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nTwo problems that first year. One: no computers. Everything was hand drawn. Two, as if my insecurity wasn’t high enough: the craftsmanship. Great ideas, but my line work and study models were not clean. I was told to work on my craft.\n\nI was not a wunderkind. Worth saying: a lot of the wunderkinds I knew did not end up becoming architects, or became architects who did not seem happy about it. Good at it, not enjoying it.\n\nPhoto (supplied by Alex 2026-11-14): one of my cardboard study models. The camera stamp read 08/04/2004, before Syracuse, so it is probably Cornell summer program work (KB bio lists the program; confirm). The stamp is cropped off and the image upscaled 2.5×. Say “my study models”, not “my first-year model”.\n\nYear: 2005. Venn weights: 1 / 0 / 0.1.\n"
      },
      {
        "id": "anything-goes",
        "use": "pmre/text-card",
        "props": {
          "kicker": "The next day",
          "title": "I auditioned for Anything Goes",
          "photos": [{"src": "media/pmre/v5/anything-goes-poster.jpg", "alt": "First Year Players poster for Cole Porter's Anything Goes, April 6 to 8, 2006, Goldstein Auditorium"}]
        },
        "title": "I auditioned for Anything Goes",
        "keep": 19,
        "year": "2005",
        "venn": [
          0.6,
          1,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nHow did I respond? I was already a drama minor and could have dropped it. Instead, the next day I auditioned for a musical open to all students: Anything Goes. I assumed there was no way I’d get it; it would be fun to hang out with theater people for a moment. I was cast as one of the leads, Moonface Martin.\n\nThen a decision: drop it, or find a way to make it work? I made it work. I slept very little that year, going to rehearsals no architecture student was doing, sneaking back into studio and certainly not telling my professors. A few friends knew. A lot of them had done theater in high school, and they were a little jealous.\n\nVerified: Anything Goes, Moonface Martin, First Year Players (KB bio). Photo (supplied by Alex 2026-11-14): the actual First Year Players poster, April 6–8, 2006, Schine Student Center, Goldstein Auditorium.\n\nYear: 2005. Venn weights: 0.6 / 1 / 0.1.\n"
      },
      {
        "id": "dress",
        "use": "pmre/text-card",
        "props": {
          "kicker": "Final review week",
          "title": "Dress rehearsal, or studio review?",
          "quote": "“If that’s what’s important to you.”",
          "attr": ""
        },
        "title": "Dress rehearsal, or studio review?",
        "keep": 30,
        "year": "2005",
        "venn": [
          0.8,
          1,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nI kept it secret until final reviews. Our final dress rehearsal landed at the same time as the dress rehearsal for our studio final review. So I had to tell the professor who told me to focus on architecture that I would miss it. He paused, and said: all right, if that’s what’s important to you. It was so cold.\n\nThe show was great. I had such a fun time.\n\nOPTIONAL, say only if it feels right: I got a B- in that studio. (Notes only, by Alex’s choice; not on screen.)\n\nYear: 2005. Venn weights: 0.8 / 1 / 0.1.\n"
      },
      {
        "id": "what",
        "use": "pmre/text-card",
        "props": {
          "kicker": "2006 · a theater company for architecture students",
          "title": "Warehouse Architecture Theatre",
          "photos": [{"src": "media/pmre/v5/what-show.jpg", "alt": "Warehouse Architecture Theatre cast raising glasses on stage"}, {"src": "media/pmre/v5/what-rehearsal1.jpg", "alt": "WhAT rehearsal: an actor in a wig and dress reads at a desk scene"}, {"src": "media/pmre/v5/what-rehearsal2.jpg", "alt": "WhAT rehearsal: two actors at a long table"}, {"src": "media/pmre/v5/what-rehearsal3.jpg", "alt": "WhAT rehearsal: a director gestures to actors holding scripts"}, {"src": "media/pmre/v5/what-rehearsal4.jpg", "alt": "WhAT cast and crew celebrating in a warehouse space"}],
          "layout": "mosaic"
        },
        "title": "Warehouse Architecture Theatre",
        "keep": 19,
        "year": "2006",
        "venn": [
          0.8,
          1,
          0.3
        ],
        "storyRole": "content",
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nThat summer, going into sophomore year, more conversations with classmates. What would it look like to start an organization at Syracuse that catered to architecture students? It meant really weird rehearsal times: sometimes 2 AM, running from studio into a classroom to rehearse.\n\nWe called it the Warehouse Architecture Theatre: WhAT. It activated my entrepreneurial spirit. How do we run this? Budgets, wearing lots of hats. Remember this when we get to Agile Lens: I had grown a little theater group; I knew a few things.\n\nVerified: co-founded with Danton Spina and Ian Nicholson (KB bio; spelled WhAT there). Photos (supplied by Alex 2026-11-14): a WhAT production (large) and four rehearsal / cast photos, upscaled 2×. Show titles and dates are not documented; don’t name them on stage unless you know.\n\nYear: 2006. Venn weights: 0.8 / 1 / 0.3.\n"
      },
      {
        "id": "overlaps",
        "use": "pmre/venn-grow",
        "props": {
          "feeds": [
            "a play’s structure → a building’s structure",
            "restaurant studio → dinner theater",
            "park studio → Shakespeare amphitheater"
          ],
          "caption": "Each interest made the others stronger"
        },
        "title": "",
        "keep": 19,
        "year": "2007",
        "venn": [
          1,
          1,
          0.6
        ],
        "storyRole": "content",
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nEvery studio became a theater project. This semester we’re designing a restaurant? Great: dinner theater. A park? Cool, can I put an amphitheater for Shakespeare in the park in the middle? The structure of a play informed the structure of the building.\n\nEach bubble got stronger because of the overlap. It keeps happening: something learned on one project feeds the next. Use this as the segue language between later projects: we took the technology and what we learned there, and brought it here.\n\nYear: 2007. Venn weights: 1 / 1 / 0.6.\n"
      },
      {
        "id": "revit",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Learning Revit",
          "src": "media/v3-fix1/revit-example.jpg",
          "credit": "",
          "brightness": 0.68,
          "alt": "Learning Revit"
        },
        "title": "Learning Revit",
        "keep": 30,
        "year": "2007",
        "venn": [
          1,
          0,
          0.8
        ],
        "storyRole": "content",
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIn third-year comprehensive studio Brian Lonsway was teaching MicroStation. He let me teach myself Revit instead. That led to internships at VIP Structures and Breadloaf Corporation. Breadloaf Corporation spelling supplied by Alex.\n Visual is my architectural work, not a photograph of Brian or the internship.\n\nYear: 2007. Venn weights: 1 / 0 / 0.8.\n\n\nImage: Designing Naturally s44, a later Revit workflow example, not an image of the 2007 studio. Breadloaf Corporation is the corrected internship name supplied by Alex (November 8 addition).\n\n2026-11-14 dictation:\nSecond year is where I hit my stride with computers: Rhino, SketchUp, 3ds Max. I took to them quickly. Before I knew it I was teaching myself Revit and BIM. As beautiful as my portfolio was, what stood out to internships was: you know Revit? Fantastic. Let’s hire you.\n"
      },
      {
        "id": "london",
        "title": "2008: Equus, London, a design charrette",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "2008: Equus, London, a design charrette",
          "src": "media/pmre/pre-fda-equus-syracuse-portfolio.png",
          "credit": "",
          "brightness": 1,
          "alt": "2008: Equus, London, a design charrette"
        },
        "notes": "⏱ ~54s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nMichael Barclay helped expand my love of theater, spatial storytelling and live shows. This image is my student work.\n\nYear: 2008. Venn weights: 0.7 / 1 / 0.2.\n\n\nMerged delivery context:\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nStudent work: architecture, civic technology and performance were already overlapping.\n\nYear: 2008. Venn weights: 1 / 0.6 / 0.6.\n\n\nVisual is the Connective Corridor student model, not a photograph of London. The London/Barclay story is delivery context.\n\n2026-11-14 dictation:\nWhiz through 2008; easy to cut. Equus had an emergency: they needed a set designer, saw my theater work and asked. Mr. Nice Guy. The Connective Corridor interdisciplinary design charrette. And most importantly, London, for architecture and theater, seeing amazing shows.\n\nOpportunities come from having a weird reputation. When you’re the weird person doing a weird combination of things, you stick in people’s heads. They remember you. That happened with Equus, and it will happen again with Connie Caldwell. Honor to Connie, who did so much for the alumni and for me.\n",
        "year": "2008",
        "venn": [
          0.7,
          1,
          0.2
        ]
      },
      {
        "id": "weird",
        "use": "pmre/text-card",
        "props": {
          "kicker": "What 2008 taught me",
          "quote": "“When you’re the weird person doing a weird combination of things, you stick in people’s heads.”",
          "attr": "They remember you."
        },
        "title": "",
        "keep": 30,
        "year": "2008",
        "venn": [
          0.8,
          1,
          0.4
        ],
        "storyRole": "content",
        "notes": "⏱ ~25s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nOpportunities come from having a weird reputation. When you’re the weird person doing a weird combination of things, you stick in people’s heads. They remember you. It happened with Equus, and it happens again in 2012 with Connie Caldwell.\n\nYear: 2008. Venn weights: 0.8 / 1 / 0.4.\n"
      },
      {
        "id": "thesis",
        "title": "Thesis: an immersive theater",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Thesis: an immersive theater",
          "src": "media/v3-fix1/thesis-atrium.jpg",
          "credit": "",
          "brightness": 1,
          "alt": "Thesis: an immersive theater"
        },
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional, brief thesis image. Describe the project only as far as I want to take it in rehearsal.\n\nYear: 2009. Venn weights: 1 / 0.5 / 0.6.\n\n2026-11-14 dictation:\n2009–2010 thesis. I took Fort Jay on Governors Island and, you’ll never guess, did a theater. I wrote a play that would take place inside my weird immersive theater; there was a submarine in the middle. (If I’d known about telescopic seating then, I could have leaned into that.) Title: Scopic Operations in Military Theatre.\n",
        "year": "2009",
        "venn": [
          1,
          0.5,
          0.6
        ]
      },
      {
        "id": "ar-webcam",
        "use": "pmre/text-card",
        "props": {
          "kicker": "2009",
          "title": "Augmented reality, with a webcam",
          "photos": [{"src": "media/pmre/v5/thesis-superjury.jpg", "alt": "Alex presenting his Fort Jay thesis to the superjury, models on stands and the AR view projected at upper right", "cap": "Thesis superjury. The AR view is projected at upper right.", "r": 1.54}, {"src": "media/pmre/v5/thesis-ar-screen.jpg", "alt": "Close-up of the projected webcam AR view, contrast-enhanced", "cap": "That screen, enlarged and contrast-enhanced.", "r": 0.59}],
          "layout": "row"
        },
        "title": "Augmented reality, with a webcam",
        "keep": 30,
        "year": "2009",
        "venn": [
          1,
          0.6,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~40s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nI had trouble helping people understand what it would feel like to be inside this project. I had already been playing with real-time technology (maybe show Quest 3D), and I started doing early augmented reality. This is my only image of what that looked like, I promise: a live webcam showing an augmented reality version of my project.\n\nVerified: thesis used early webcam/marker AR, 2009 (KB bio). Photo (supplied by Alex 2026-11-14): the thesis superjury, with the AR view projected on the upper-right screen. That screen is only about 60×110 pixels in the original, so the enlarged inset is contrast-enhanced and soft. Point at it; don’t apologize for it. That fits the line: “my only image of what that looked like.”\n\nYear: 2009. Venn weights: 1 / 0.6 / 1.\n"
      },
      {
        "id": "graduation",
        "title": "“The job I’ll have in five years doesn’t exist yet”",
        "use": "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "“The job I’ll have in five years doesn’t exist yet”",
          "src": "media/v3-fix1/thesis-model.jpg",
          "credit": "",
          "brightness": 1,
          "alt": "“The job I’ll have in five years doesn’t exist yet”"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI did not think a traditional architecture partner ladder was going to make me happy. I was interested in too many other things.\n\nYear: 2010. Venn weights: 1 / 0.5 / 0.5.\n\n2026-11-14 dictation:\nI did well at the end of school; the thesis was in super jury. People asked: Alex, where do you think you’ll be in five years? I knew my interests weren’t taking me up a proper career ladder. In a rare moment of foresight I said: honestly, I feel like the job I’ll have in five years doesn’t exist yet. So: 2010 to 2015, let’s see where that goes.\n",
        "year": "2010",
        "venn": [
          1,
          0.5,
          0.5
        ]
      },
      {
        "id": "ring-2010",
        "use": "pmre/ring-chapter",
        "props": {
          "from": 2009,
          "year": 2010,
          "kicker": "GRADUATION",
          "label": "2010",
          "sub": "Out of school,\ninto a recession",
          "venn": [
            1,
            0.5,
            0.6
          ],
          "vennFrom": [
            1,
            0.5,
            0.6
          ]
        },
        "title": "",
        "keep": 19,
        "year": "2010",
        "venn": [
          1,
          0.5,
          0.6
        ],
        "storyRole": "content",
        "hideTracker": true,
        "notes": "⏱ ~10s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nGraduation, 2010.\n\nYear: 2010. Venn weights: 1 / 0.5 / 0.6.\n"
      },
      {
        "id": "career-map",
        "use": "pmre/career-map",
        "props": {},
        "title": "Where the work was",
        "keep": 19,
        "year": "2010",
        "venn": [
          1,
          0.3,
          0.8
        ],
        "storyRole": "content",
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nMy internships were small firms: VIP Structures in Syracuse, and Bread Loaf in Vermont. I really liked the vibe of a small architecture firm in Vermont (my wife is from Vermont too) and planned to work there. But after the 2008 recession there were not a lot of architecture jobs or buildings going up. Who remembers that? My early jobs came largely because I knew Revit and a wide range of other software: the technology side coming out.\n\nSo I went to New York for a job with Rafael Viñoly. A starchitect. That is a whole other talk; a mixed bag, a lot of control. (Notes only: I once saw Viñoly yell at someone for photographing one of his buildings wrong.) I learned a lot about how a design firm runs, and what I might do differently if I were ever lucky enough to run a company.\n\nThen Zimmer Gunsul Frasca (ZGF), where I developed a taste for architectural visualization.\n\nVerified dates: Viñoly June–September 2010; ZGF September 2010–March 2012; Fisher Dachs from March 2012. Bread Loaf Corporation is in Middlebury, VT (public listings).\n\nYear: 2010. Venn weights: 1 / 0.3 / 0.8.\n"
      },
      {
        "id": "archviz",
        "title": "New York",
        "use": "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "New York",
          "src": "media/pmre/round4/zgf-nyu-lobby.jpg",
          "credit": "Alex Coulombe / ZGF Architects",
          "brightness": 1,
          "alt": "New York"
        },
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nTeaching myself Revit helped me get the Rafael Viñoly job that brought me to New York. The image shown is my later ZGF work, not a Viñoly project.\n\nYear: 2010. Venn weights: 1 / 0.1 / 0.8.\n\n\nProperty-media connection — presenter interpretation: The photograph or render is still an invitation. I want the next step to let the buyer judge a place at human scale.",
        "year": "2010",
        "venn": [
          1,
          0.1,
          0.8
        ]
      }
    ]
  },
  {
    "year": "2012",
    "accent": "amber",
    "storyChapter": 3,
    "storyLesson": "The first headset",
    "lesson": {
      "title": "The first headset",
      "short": "The first headset",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "fda",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Sightlines, before VR",
          "src": "media/v3-fix1/fda-sightlines.jpg",
          "credit": "Fisher Dachs Associates",
          "brightness": 0.68,
          "alt": "Sightlines, before VR"
        },
        "title": "Sightlines, before VR",
        "keep": 99,
        "year": "2012",
        "venn": [
          1,
          1,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~67s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI got to be an architect specializing in theaters. Two of my interests in one job. And still I felt a gap: where was the emerging technology? It felt like complaining about the sheen of the gold on the wall. A very first-world problem.\n\nYear: 2012. Venn weights: 1 / 1 / 0.1.\n\n\nSource: Designing Naturally s7. FDA sightline work predates my arrival and VR, going back to the 1980s per Alex. Do not assign an exact year to this scanned drawing without confirmation.\n\n2026-11-14 dictation:\n2012: Connie Caldwell from Syracuse alumni services remembered me and recommended I apply to Fisher Dachs Associates, Theatre Planning and Design. The benefit of being a weird person with niche interests: people remember you. A job for a theater architect? I remember that kid who loves architecture and theater. I showed my thesis, Scopic Operations in Military Theatre, and was thrilled. Everything was great except it was a fairly low-tech firm: no Revit, just AutoCAD and a little SketchUp. But in 2013… the Oculus Rift DK1.\n"
      },
      {
        "id": "early-vr",
        "year": "2013",
        "title": "At eye level",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "At eye level",
          "src": "media/v3-fix1/fda-early-vr.mp4",
          "credit": "Alex Coulombe / Fisher Dachs Associates",
          "brightness": 0.78,
          "alt": "At eye level",
          "posterTime": 5
        },
        "notes": "⏱ ~45s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s8. Early FDA work: plans and renders could not answer whether a seat felt good. VR made that experience discussable. Source recording is a later demonstration of the early workflow; do not call it a dated2013 recording."
      },
      {
        "id": "dk1",
        "title": "Oculus Rift DK1",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Oculus Rift DK1",
          "src": "media/pmre/fda-dk1-office-demo.jpg",
          "credit": "Photo: Alex Coulombe / Fisher Dachs Associates",
          "alt": "2013: a headset at work",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nA year later the DK1 arrived. Josh Dachs, my boss and later co-founder, let me focus on it. I thought I would just drop the 3ds Max, Rhino and SketchUp models in.\n\nYear: 2013. Venn weights: 1 / 0.8 / 1.\n\n\nShort-cut story context (full version has separate visuals):\nI got to be an architect specializing in theaters. Two of my interests in one job. And still I felt a gap: where was the emerging technology? It felt like complaining about the sheen of the gold on the wall. A very first-world problem.\n\nIn 2013 there was no elegant turnkey way to do what I expected. I went home at night and learned JavaScript and C# on Codecademy, learned Unity, learned model optimization. Architecture school taught me modeling, not optimization. It was exactly the kind of challenge I loved going home to.",
        "year": "2013",
        "venn": [
          1,
          0.8,
          1
        ]
      },
      {
        "id": "not-turnkey",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "An extension of the workflow",
          "src": "media/v3-fix1/workflow.jpg",
          "credit": "",
          "brightness": 0.62,
          "alt": "An extension of the workflow"
        },
        "title": "An extension of the workflow",
        "keep": 99,
        "year": "2013",
        "venn": [
          0.8,
          0.4,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~56s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIn 2013 there was no elegant turnkey way to do what I expected. I went home at night and learned JavaScript and C# on Codecademy, learned Unity, learned model optimization. Architecture school taught me modeling, not optimization. It was exactly the kind of challenge I loved going home to.\n\nYear: 2013. Venn weights: 0.8 / 0.4 / 1.\n\n\nDesigning Naturally s18–20: begin with existing drawings, modeling, texturing and lighting; add optimization and an interactive engine, then deliver human-scale experience. The s20 diagram incorporates the progression of s18 and s19. Keep the technical sequence in notes, not extra dense on-slide text. This is a later diagram explaining the 2013 learning story."
      },
      {
        "id": "xiqu",
        "year": "2013–2015",
        "title": "Xiqu Centre",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Xiqu Centre",
          "src": "media/v3-fix1/xiqu.jpg",
          "credit": "Rendering: Bing Thom Architects",
          "brightness": 1,
          "alt": "Xiqu Centre"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s9. Bing Thom Architects render of Xiqu Centre. Source notes describe testing railing height and the swoop of a wall at human scale. Paraphrase the recorded Venelin Kokalov response; do not invent a new quotation. The source places this work in the 2013–2015 FDA era; no exact contract date is asserted.\n\nFull-cut delivery space: Walk through one seating decision: identify the audience viewpoint, the obstruction and what a client can test at eye level. Contrast that with explaining the same question from a plan. Invite the audience to think of a view their own client cannot yet picture. Do not assert a quantified result."
      },
      {
        "id": "sightlines",
        "title": "Macbeth / Park Avenue Armory",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Macbeth / Park Avenue Armory",
          "src": "media/pmre/fda-macbeth-armory-unity.png",
          "credit": "Alex Coulombe / Fisher Dachs Associates",
          "brightness": 1,
          "alt": "Macbeth / Park Avenue Armory"
        },
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nEarly Macbeth work at the Park Avenue Armory. Could everyone see? Now I could stand in a theater before it existed, at a human eye height. Source: KB Macbeth overview dates this previs work to 2014.\n\nYear: 2014. Venn weights: 1 / 1 / 1.\n\n\nProperty-media connection — presenter interpretation: That same eye-level question matters in a home: can I see the garden from the kitchen, and what is the view from the sofa? Media makers already know how to tell that story with a lens.",
        "year": "2014",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "macbeth-built",
        "year": "2014",
        "title": "Kenneth Branagh’s Macbeth at the Park Avenue Armory",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Kenneth Branagh’s Macbeth at the Park Avenue Armory",
          "src": "media/pmre/fda-macbeth-armory-vr-demo.jpg",
          "credit": "Kenneth Branagh’s Macbeth · Park Avenue Armory",
          "brightness": 1,
          "alt": "Macbeth, in the Armory"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s37 / AU2017 s20. Separate production photo after the virtual Stonehenge model. Alex supplied early Macbeth/Park Avenue Armory work; credit production photo to Park Avenue Armory as the source deck does. Describe testing stage/audience relationships. No invented production outcome.\n\nElizabeth review, November 11: Requested production identity, including Kenneth Branagh, is explicit. The supplied deck is the photo source; do not infer its individual photographer."
      },
      {
        "id": "shed",
        "title": "The Shed",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "The Shed",
          "src": "media/pmre/fda-shed-unity-axon.png",
          "credit": "Alex Coulombe / Fisher Dachs Associates",
          "alt": "The Shed, seen before opening",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~51s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional additional theater planning example. The visual is a Unity axonometric, not a finished-building photograph.\n\nYear: 2014. Venn weights: 1 / 1 / 0.9.\n",
        "year": "2014",
        "venn": [
          1,
          1,
          0.9
        ]
      },
      {
        "id": "shed-options",
        "year": "2014",
        "title": "The Shed / design options",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          0.9,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "The Shed / design options",
          "src": "slides/pmre/hxr-shed/media/shed/Shed_Video.mp4",
          "credit": "Alex Coulombe / Fisher Dachs Associates",
          "brightness": 0.75,
          "alt": "The Shed / design options",
          "poster": "media/v3-fix1/shed-options-poster.png",
          "posterTime": 2.7
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nHarvardXR #6 source. Alex designed quick VR experiences alongside design, with only the detail needed for a clear question. It did not need to look finished to help the team. Work year follows existing v3 FDA chronology; the supplied source establishes this project era, without an exact contract date."
      },
      {
        "id": "late-show",
        "title": "The Late Show at Ed Sullivan Theater by Bravo Media",
        "use": "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "title": "The Late Show at Ed Sullivan Theater by Bravo Media",
          "src": "media/pmre/fda-ed-sullivan-vr-capture.mp4",
          "credit": "The Late Show · Ed Sullivan Theater · Bravo Media",
          "alt": "Lighting the Late Show",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~105s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSightlines for people became sightlines for projectors at the Late Show. Architecture, theater and technology all in the same job. Tell the transition, rather than explain the technical pipeline.\n\nYear: 2015. Venn weights: 1 / 1 / 1.\n\n\nElizabeth review, November 11: Bravo Media credit and requested title supplied by Elizabeth. Alex/FDA sightline role remains in the delivery context; do not present this video as solely authored by Alex.\n\nProperty-media connection — presenter interpretation: We used a digital place to make a real-world decision. When you market a property, ask which uncertainty the next piece of media should remove.",
        "year": "2015",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "shoreditch",
        "year": "2015",
        "title": "Theatre at Shoreditch",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Theatre at Shoreditch",
          "src": "media/v3-fix1/shoreditch.mp4",
          "credit": "Alex Coulombe / Fisher Dachs Associates",
          "brightness": 1,
          "alt": "Theatre at Shoreditch",
          "mediaFooter": true
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s10. The source itself labels early2015, OculusDK2. Proposed theater on the historic Shoreditch site; source notes say the owner later canceled it. Test steep sightlines, leaning audience members, seats, aisles and atmosphere. Do not relabel this clip Macbeth."
      },
      {
        "id": "rice-early",
        "year": "2015",
        "title": "Rice / designing at human scale",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Rice / designing at human scale",
          "src": "media/v3-fix1/rice-2015.mp4",
          "credit": "Allan Greenberg Architect / Fisher Dachs Associates",
          "brightness": 0.65,
          "alt": "Rice / designing at human scale",
          "posterTime": 8,
          "mediaFooter": true
        },
        "notes": "⏱ ~48s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s28. Alex dates the beginning of this Rice work to2015. The selected video segment visibly says late2015, OculusDK2; this matches the supplied date. The separate static poster in the original deck says late2016 and is not used. The source clip opens on Wisconsin School of Music before changing to Rice. This derivative contains only the verified Rice40-second segment from4–44seconds, not the unrelated opening. Allan Greenberg Architect, theater design Fisher Dachs Associates. Compare design options rather than claiming the finished opera hall opened in2015. The selected media establishes late-2015 design exploration; no wider engagement start is asserted."
      },
      {
        "id": "equinox",
        "year": "2015",
        "title": "Equinox / just the lobby",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          0.1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Equinox / just the lobby",
          "src": "media/v3-fix1/equinox.jpg",
          "credit": "Equinox lobby study",
          "brightness": 1,
          "alt": "Equinox / just the lobby"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s34. Presenter identifies Equinox2015. Sometimes a sketch or a single panorama tells you everything you need. Do not imply a full building model was necessary. The supplied source establishes the project era, without an exact contract date.\n\nElizabeth review, November 11: No architect/design firm for this specific 2015 lobby study could be established from semantic KB searches, Agile Lens portfolio, personal appearances/about pages, or targeted web searches. Do not borrow the 2019 Equinox Hotel’s Rockwell/Joyce Wang credits for an unidentified earlier lobby. Omit an unverified design-firm credit rather than guess. The visualization is from Alex’s supplied Designing Naturally s34.\n\nFull-cut delivery space: Use this as the counterexample to overbuilding: identify the lobby decision, then explain why one panorama can answer a bounded question. Let the audience compare this still with the previous full model."
      }
    ]
  },
  {
    "year": "2016",
    "accent": "rose",
    "storyChapter": 4,
    "storyLesson": "Agile Lens",
    "lesson": {
      "title": "Agile Lens",
      "short": "Agile Lens",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "ring-2016",
        "use": "pmre/ring-chapter",
        "props": {
          "from": 2013,
          "year": 2016,
          "kicker": "A COMPANY",
          "label": "2016",
          "sub": "Agile Lens",
          "venn": [
            0.7,
            0.8,
            1
          ],
          "vennFrom": [
            1,
            0.8,
            1
          ]
        },
        "title": "",
        "keep": 19,
        "year": "2016",
        "venn": [
          0.7,
          0.8,
          1
        ],
        "storyRole": "content",
        "hideTracker": true,
        "notes": "⏱ ~10s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nChapter break: founding Agile Lens. Callback: the theater group taught me budgets and wearing many hats.\n\nYear: 2016. Venn weights: 0.7 / 0.8 / 1.\n"
      },
      {
        "id": "agile",
        "title": "“We should do it together”",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "“We should do it together”",
          "src": "media/v3-fix1/agile-lens-logo.jpg",
          "credit": "",
          "brightness": 0.85,
          "alt": "“We should do it together”"
        },
        "notes": "⏱ ~165s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThen Josh said that if I really wanted to start a VR company, we should do it together. That was the surprise. We founded Agile Lens later in 2016. Ten years now. Show people how passionate you are, including what you do off-hours because you love it. That is how they come to believe in you.\n\nYear: 2016. Venn weights: 0.7 / 0.8 / 1.\n\n\nMerged delivery context:\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nEarly 2016: Josh pulled me in and said he felt I was thinking of leaving to start a VR company. My reaction was, What? No! I will work here till I die. Then he said I was not much of a business manager, not organized, with creative wildfire but not much direction. I thought he was trying to convince me not to leave. These are paraphrased delivery prompts from the walk, not a verbatim historical transcript.\n\nYear: 2016. Venn weights: 0.5 / 0.7 / 1.\n\n\nTell the early-2016 Josh office story first, then the invitation to become partners and the later-2016 founding. The logo is company identity, not a photo of that conversation.",
        "year": "2016",
        "venn": [
          0.7,
          0.8,
          1
        ]
      },
      {
        "id": "statue-vr",
        "year": "2016–2018",
        "title": "Statue of Liberty Museum",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          0.4,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Statue of Liberty Museum",
          "src": "slides/pmre/hxr-statue-free-work/media/pivot/00_StatueOfLiberty.jpg",
          "credit": "FXCollaborative / Agile Lens · design visualization",
          "brightness": 1,
          "alt": "Statue of Liberty Museum"
        },
        "notes": "⏱ ~51s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nHarvardXR #10 source. Per Alex’s supplied brief, we did this basically for free and it became an important portfolio item. FXCollaborative were sad to experience it in VR only after the design decisions were settled. Bring VR into the process while it can still change decisions. This is the unbuilt render, not a completed-building photo. Work happened before the2019 opening; the shown year range is a source-deck era, not a contract date."
      },
      {
        "id": "hiring",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Curiosity",
          "src": "media/v3-fix1/student-crit.mp4",
          "credit": "Alex Coulombe · Syracuse studio review",
          "brightness": 1,
          "alt": "Curiosity"
        },
        "title": "Curiosity",
        "keep": 99,
        "year": "2016",
        "venn": [
          0.5,
          1,
          0.8
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nWhen I hire, I am not looking first at GPA or whether someone studied VR. Excitement, being a quick study, curiosity. Be curious, not judgmental, as Ted Lasso puts it. I knew talented architects whose presentations looked like watching paint dry. I would have been thrilled to show work like theirs.\n\nYear: 2016. Venn weights: 0.5 / 1 / 0.8.\n\n\nSource: Designing Naturally s63. A studio critique supports the curiosity/hiring story; it is not a photograph of Yu-Jun Yeh’s hiring or a staff meeting. The clip illustrates a studio critique, without assigning a date to this capture.\n\nLin-Manuel Miranda recalled Hunter College Elementary School: “I was good at making up songs, and I was good at making kids laugh”. This is his short verbatim quote, reported by Jennifer Vanasco from Daniel Pollack-Pelzner’s biography, not a ranking I am making of his classmates. The review argues that collaboration and the contradictions of his background became creative strengths. Be curious about what your combination makes possible. Then reveal the Picasso paintings.\nSource: https://www.capradio.org/news/npr/story?storyid=nx-s1-5532081 (Jennifer Vanasco, September 12, 2025)."
      },
      {
        "id": "picasso",
        "use": "pmre/picasso",
        "props": {},
        "title": "Who painted this?",
        "keep": 99,
        "year": "2016",
        "venn": [
          0.4,
          0.5,
          0.6
        ],
        "storyRole": "content",
        "notes": "⏱ ~75s.\n\nThree deliberate reveals: (0) left painting only, ask “Anyone know who painted this?” (1) reveal right painting, ask “And this one?” (2) reveal dates and ages: 1896 / age 14–15, 1972 / age 90. Both are Picasso. Let the room answer before revealing the next image or the dates.\n\nAfter the hiring/curiosity story: learn the disciplines before changing their rules. Passion benefits from deliberate practice. Psychologist K. Anders Ericsson, with Ralf Krampe and Clemens Tesch-Römer, developed the deliberate-practice framework in 1993: focused, effortful work on specific weaknesses, tasks just beyond current ability, feedback and correction, often guided by a qualified teacher. Repetition alone is not the definition. Ericsson and Robert Pool explain the framework in Peak (2016); it is not a term originating in Atomic Habits.\n\nSources: Ericsson, Krampe & Tesch-Römer (1993), The Role of Deliberate Practice in the Acquisition of Expert Performance, Psychological Review100(3),363–406, https://doi.org/10.1037/0033-295X.100.3.363 and original paper https://www.moodle.is.ed.ac.uk/pluginfile.php/29313/mod_resource/content/2/ericsson%201993.pdf; Peak (Ericsson & Pool,2016). Early image: supplied Virtual Architecture RTC2021 s18, losslessly separated. Full-resolution identity review found the supplied monochrome 1972 image was a different self-portrait. The later image has been replaced by the color Self Portrait Facing Death, matched visually to the catalog below. Early work: Pablo Picasso, Self-Portrait, Barcelona, 1896, oil on canvas, Museu Picasso, MPB 110.076 (gift of Picasso, 1970). Museum catalog supplies only the year; born October 25, 1881, he was 14–15 in 1896, not 16. https://museupicassobcn.cat/en/collection/artwork/self-portrait-8 . Later work: Self Portrait Facing Death, Mougins, June 30, 1972, pencil and crayon on paper, Fuji Television Gallery, Tokyo, cataloged by Bridgeman Images, FIA6437065. He was 90 on that date. https://www.bridgemanimages.com/en-US/picasso/self-portrait-facing-death-mougins-30-june-1972-pencil-and-crayon-on-paper/pencil-and-crayon-on-paper/asset/6437065 . Artwork © Succession Picasso. Early reproduction comes from the presenter-supplied deck. Later reproduction source: https://mgpandersen.files.wordpress.com/2010/04/pablopicasso-self-portrait-1972.jpg (also indexed with the Guardian’s September 4, 2014 self-portraits article). Catalog source establishes identity; no new image license is claimed. Avoid “first and last” because these are selected works, not proof of his complete self-portrait chronology.\n\nElizabeth review, November 11: Keep as a brief curiosity/practice illustration after hiring. The two paintings show a change in visual choices, not scientific proof of deliberate practice or a ranking of early vs late skill. Explicit bridge: practice develops choices; curiosity keeps them changing. The Ericsson research is the separate source for the definition of deliberate practice."
      }
    ]
  },
  {
    "year": "2017",
    "accent": "teal",
    "storyChapter": 5,
    "storyLesson": "Sharing the work",
    "lesson": {
      "title": "Sharing the work",
      "short": "Sharing the work",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "youtube",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Sharing work led to speaking",
          "src": "media/v3/au-panel.jpeg",
          "credit": "Autodesk University 2017 · Las Vegas"
        },
        "title": "Sharing work led to speaking",
        "keep": 19,
        "year": "2017",
        "venn": [
          0.4,
          0.6,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~110s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBusiness development took off when I stopped cold calling and started speaking. Jeff Mottle invited me to Autodesk University after a YouTube video with few views. It did not need to go viral. It needed to reach the right person. Separate channels are fine if that helps you put work out there. Name corrected against official Autodesk panel credits.\n\nYear: 2017. Venn weights: 0.4 / 0.6 / 1.\nSource: https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017\n\nA low-view YouTube video reached Jeff Mottle, leading to a speaking invitation. This picture shows the resulting Autodesk expert panel, not a screenshot of the video. Speaking made the work visible to potential collaborators. Source: presenter recollection and official Autodesk 2017 panel https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017 . The separate Vegas crowd selfie is removed; it obscures this cause-and-effect story.\n\nVegas callback (Alex, 2026-11-14): this is the Vegas moment from the opening. Autodesk University 2017, Las Vegas, about ten years ago. What happened in Vegas did not stay in Vegas.\n"
      },
      {
        "id": "napkin-scale",
        "year": "2017",
        "title": "A sketch, at full scale",
        "use": "pmre/source-sequence",
        "keep": 99,
        "venn": [
          1,
          0.7,
          1
        ],
        "storyRole": "content",
        "props": {
          "title": "A sketch, at full scale",
          "line": "",
          "credit": "Alex Coulombe / Agile Lens",
          "media": [
            {
              "src": "../../../media/v3-fix1/napkin.jpg",
              "seconds": 5,
              "loop": false,
              "brightness": 0.75
            },
            {
              "src": "../../../media/v3-fix1/sketching.mp4",
              "seconds": 5,
              "loop": false,
              "brightness": 0.75
            },
            {
              "src": "../../../media/v3-fix1/sketch-at-scale.mp4",
              "seconds": 5,
              "loop": false,
              "brightness": 0.75
            }
          ]
        },
        "notes": "⏱ ~48s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s15+s44 grouped as one beat. First the sketchbook, then Alex sketching in VR, then the sketch as a3D environment at scale. Move from dollhouse scale into the space. This is a demonstration of design intent, not finished construction documentation. Original s44 nTransit work credits Paloma Rodriguez. The source is the 2017-era design demonstration; an exact recording date is not asserted."
      },
      {
        "id": "workflow-demo",
        "year": "2017",
        "title": "Sketch to design workflow",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          0.7,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Sketch to design workflow",
          "src": "media/v3-fix1/vr-workflow-demo.mp4",
          "credit": "Alex Coulombe / Agile Lens",
          "brightness": 0.65,
          "alt": "Sketch to design workflow",
          "posterTime": 22.6
        },
        "notes": "⏱ ~105s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s45. Suggested placement after napkin sketch: bring the spatial sketch back into the Autodesk workflow as an overlay for the resolved model and documents. This is the original2017-era limitation described by Alex, not a claim about all present-day software. Optional extension; the precise recording day is not asserted.",
        "opt": "workflows:extended"
      },
      {
        "id": "conception-completion",
        "year": "2017",
        "title": "Conception to completion",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          0.7,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Conception to completion",
          "src": "media/v3-fix1/conception-completion.mp4",
          "credit": "Alex Coulombe / Agile Lens",
          "brightness": 0.65,
          "alt": "Conception to completion"
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s53. Suggested placement directly after the sketch-to-VR workflow: Alex’s design exercise staying in VR, testing materials, furniture and moving the fireplace. Optional extra example, not a client commission. The supplied source groups this as a 2017-era demonstration, not a dated client commission.",
        "opt": "workflows:extended"
      },
      {
        "id": "set-designers",
        "year": "2017",
        "title": "Set design, at scale",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Set design, at scale",
          "src": "media/v3-fix1/set-designers-muted.mp4",
          "credit": "Alex Coulombe / Agile Lens · TCG 2017, Portland, OR",
          "brightness": 0.78,
          "alt": "Set design, at scale",
          "posterTime": 9.5,
          "poster": "media/v3-fix1/set-designers-poster.png"
        },
        "notes": "⏱ ~65s.\n\nTCG National Conference, June 2017, Portland, Oregon. I showed set designers how useful it is to sketch their designs at full scale inside the virtual Brockman Hall for Opera at Rice University, then see their designs in the space. The conference was in Portland; the building model was in Houston. This is the Virtual Reality Petting Zoo workshop, not a workshop held at Rice. PLAY MUTED; the shipped derivative has no audio stream.\nSources: presenter confirmation November 9, 2026; https://alexcoulombepresents.com/appearances; Alex’s first-person account https://medium.com/alive-in-plasticland/virtual-theatre-in-high-fidelity-6702fd2f1171 ; supplied Designing Naturally s38."
      },
      {
        "id": "unreal",
        "title": "Unreal Authorized Instructor",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Unreal Authorized Instructor",
          "src": "media/pmre/GoldAuthorized.png",
          "credit": "Credential: Epic Games",
          "alt": "2020: the Unreal Engine bet",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAs an Unreal Authorized Instructor I taught on behalf of Epic. CD Projekt Red, the Age of Empires team, Gensler, BIG. If you are teaching those people, you are going to make sure you know your shit. Teaching forces you to learn.\n\nYear: 2020. Venn weights: 0.6 / 0.4 / 1.\n\n\nShort-cut story context (full version has separate visuals):\nActual teaching footage from August 2026 illustrates the continuing practice. It is not footage of my 2020 certification or of the named private client trainings.",
        "year": "2020",
        "venn": [
          0.6,
          0.4,
          1
        ]
      },
      {
        "id": "universities",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Teaching",
          "src": "media/v3-fix1/student-review.jpg",
          "credit": "Alex Coulombe · Syracuse studio review",
          "brightness": 1,
          "alt": "Teaching"
        },
        "title": "Teaching",
        "keep": 99,
        "year": "2020–2022",
        "venn": [
          0.8,
          0.6,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~60s.\n\nTeaching and guest criticism became another way to connect disciplines. Dated engagements: Syracuse University School of Architecture, ARC 682: Media instructor, 2020; NYU Tisch, Brendan Bradley Innovation Lab, fall 2020; NYU Steinhardt, Business of Virtual Reality and Augmented Reality guest lecturer, 2021; NYU ITP VR thesis guest critic and Columbia Architecture Virtual Architecture Studio Final guest critic, 2021; Princeton, 2021; NYU Tisch guest lecturer, 2022. Do not collapse guest criticism into a faculty appointment or claim these are the first dates.\nI met Yu-Jun Yeh through guest criticism at Columbia, and she became an employee (my recollection). No hiring year is asserted. The pictured Syracuse critique is an illustration of teaching, not Columbia or Yu-Jun Yeh.\nSources: https://alexcoulombepresents.com/appearances; https://www.brendanabradley.com/nyu . The public LinkedIn experience dates are masked behind sign-in; alexcoulombe.com has a TLS hostname mismatch and www returns 502. Princeton teaching: 2021 (presenter, 2026-11-09). Yu-Jun Yeh hiring date is not asserted."
      },
      {
        "id": "brockman-virtual",
        "year": "2021",
        "title": "Brockman / virtual and construction",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Brockman / virtual and construction",
          "src": "media/v3-fix1/brockman-virtual.mp4",
          "credit": "Design: Allan Greenberg Architect · theater: Fisher Dachs Associates",
          "brightness": 1,
          "alt": "Brockman / virtual and construction"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nVirtual Architecture RTC2021 s45. This is the virtual/construction comparison from the supplied deck, following the2015–2016 design work. Let the comparison play before advancing to the built-hall photo. Allan Greenberg Architect; theater design Fisher Dachs Associates; acoustic design Threshold Acoustics. Project roles verified by Rice https://music.rice.edu/news/built-brilliance-brockman-hall-opera .\n\nElizabeth review, November 11: This supplied RTC2021 virtual/construction video is project visualization, separate from a built photograph. The on-slide design/theater credits describe project roles. Acoustic design: Threshold Acoustics. Rice’s official firm name is Allan Greenberg Architect LLC (Allan, two l’s). Source: https://music.rice.edu/news/built-brilliance-brockman-hall-opera .\n\nFull-cut delivery space: Let the virtual/construction comparison play. Point out a balcony, stage relationship and audience viewpoint that can be inspected before construction. Distinguish a visual decision from acoustic engineering. Ask what each specialist contributes."
      },
      {
        "id": "brockman-real",
        "year": "2022",
        "title": "Brockman / built",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Brockman / built",
          "src": "media/v3-fix4/brockman-brandon-martin.jpg",
          "credit": "Rice University / Shepherd School · photo: Brandon Martin",
          "brightness": 1,
          "alt": "Brockman / built"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nVirtual Architecture RTC2021 s46, actual built hall photograph supplied in that deck. Alex’s contemporaneous notes say the building opened during the pandemic and imagine virtual performances if digital rights were licensed. Frame that as an idea from2021, not an existing agreement or NFT product. Rice dates the public opening and first in-person public performances to April2022; distinguish that from the pandemic construction/access recollection. https://news.rice.edu/news/2022/it-feels-walking-versailles-rices-new-opera-hall-officially-opens-mozarts-legendary-don . Photographer is uncredited in the supplied source. The 2021 deck shows this view; no public opening in 2021 is claimed.\n\nElizabeth review, November 11: Replaced unresolved RTC photograph with Rice’s inline Martin46 photograph, captioned “Photo by Brandon Martin” on https://news.rice.edu/news/2022/story-brockman-hall-operas-one-kind-space. Venue: Lucian and Nancy Morrison Theater, Brockman Hall for Opera, Rice University / Shepherd School of Music. Tracker 2022 is the Rice publication/public-opening context, not an inferred capture date. The image filename encodes July 2020, which is not claimed as a verified photographic date. Architecture: Allan Greenberg Architect LLC; theater design: Fisher Dachs Associates; acoustics: Threshold Acoustics. Correct firm spelling verified by Rice https://music.rice.edu/news/built-brilliance-brockman-hall-opera .\n\nFull-cut delivery space: Compare the built room with the preceding virtual view. Identify what can be recognized and what a photograph still cannot communicate about being inside. Explain that the 2022 public opening is distinct from the earlier design/construction work."
      },
      {
        "id": "geffen",
        "title": "David Geffen Hall",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "David Geffen Hall",
          "src": "media/pmre/fda-geffen-hall-vr-onsite.jpg",
          "credit": "Photo: Agile Lens / Fisher Dachs Associates",
          "alt": "David Geffen Hall, at eye level",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~65s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAnother chance to bring theater expertise into a real architectural decision at eye level. Image and project credits: Agile Lens / Fisher Dachs Associates.\n\nYear: 2022. Venn weights: 1 / 1 / 1.\n\n\nFull-cut delivery space: Use the on-site headset photograph to distinguish a design model, the actual room and a human judging the relationship. Describe the need to communicate across architecture, theater and technology, without claiming an undocumented measured benefit.",
        "year": "2022",
        "venn": [
          1,
          1,
          1
        ]
      }
    ]
  },
  {
    "year": "2023",
    "accent": "purple",
    "storyChapter": 6,
    "storyLesson": "Human scale",
    "lesson": {
      "title": "Human scale",
      "short": "Human scale",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "ring-2023",
        "use": "pmre/ring-chapter",
        "props": {
          "from": 2022,
          "year": 2023,
          "kicker": "REAL ESTATE",
          "label": "2023",
          "sub": "Before it’s built",
          "venn": [
            1,
            0.7,
            1
          ],
          "vennFrom": [
            0.8,
            0.6,
            1
          ]
        },
        "title": "",
        "keep": 19,
        "year": "2023",
        "venn": [
          1,
          0.7,
          1
        ],
        "storyRole": "content",
        "hideTracker": true,
        "notes": "⏱ ~10s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nChapter break: the Four Seasons Lake Austin story, the $2 billion project from the opening teaser.\n\nYear: 2023. Venn weights: 1 / 0.7 / 1.\n"
      },
      {
        "id": "referrals",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Getting the brief",
          "src": "media/v3/referrals.jpg",
          "credit": "Unreal Fest 2023"
        },
        "title": "Getting the brief",
        "keep": 30,
        "year": "2023",
        "venn": [
          0.7,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nFour Seasons came through word of mouth. Original Unreal Fest 2023 slide and notes name Shane Scranton, Paul Debevec, Kim Baumann Larsen, Jeff Mottle, Vikas Reddy and Jeff Powers. Several contacts converged on an introduction to Jonathan Coon. Do not turn them into a made-up relay chain or say the slide lists 17 people. Original recording 9:10–9:43. Correspondence includes an October 2022 message.\n\nYear: 2023. Venn weights: 0.7 / 1 / 1.\nSource: https://www.youtube.com/watch?v=6la2yieiCG0&t=550s"
      },
      {
        "id": "fs-render",
        "title": "Four Seasons Lake Austin",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Four Seasons Lake Austin",
          "src": "media/pmre/fs-v2/intro-render.jpg",
          "credit": "Rendering: DBOX for Austin Capital Partners",
          "alt": "Four Seasons Lake Austin",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nWhy us? Our particular combination of architecture, theater and technology. Rendering: DBOX for Austin Capital Partners. PureBlink and Agile Lens contributions remain credited separately.\n\nYear: 2023. Venn weights: 1 / 0.7 / 1.\n\n\nShort-cut story context (full version has separate visuals):\nFour Seasons came through word of mouth. Original Unreal Fest 2023 slide and notes name Shane Scranton, Paul Debevec, Kim Baumann Larsen, Jeff Mottle, Vikas Reddy and Jeff Powers. Several contacts converged on an introduction to Jonathan Coon. Do not turn them into a made-up relay chain or say the slide lists 17 people. Original recording 9:10–9:43. Correspondence includes an October 2022 message.\n\nIf you are wondering why another company got the job you wanted, maybe they were more exciting. Good presentations and storytelling matter. This is why our weird combination made us suited to this project.\n\nMerged delivery context:\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIf you are wondering why another company got the job you wanted, maybe they were more exciting. Good presentations and storytelling matter. This is why our weird combination made us suited to this project.\n\nYear: 2023–2026. Venn weights: 1 / 1 / 1.\n",
        "year": "2023",
        "venn": [
          1,
          0.7,
          1
        ]
      },
      {
        "id": "buyers",
        "title": "",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/pmre/re-holodeck-tablet-guests.jpg",
          "credit": "Four Seasons Lake Austin · photo: Agile Lens",
          "alt": "Buyers walk the future home",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~67s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBuyers walk the future home together. A guide and physical stagecraft make this a shared visit.\n\nYear: 2023. Venn weights: 1 / 1 / 1.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.\n\nFull-cut delivery space: Describe the visitor journey: briefing, headset, shared walk and sitting in a real seat at the end. Explain the guide’s role and why other people in the room change the visit. Ask which part of a property story needs more than a camera.",
        "year": "2023",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "fs-walkthrough",
        "title": "",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/story/four-seasons-walkthrough.mp4",
          "alt": "Actual in-headset VR tour of Four Seasons Lake Austin",
          "credit": "Rendering: DBOX for Austin Capital Partners",
          "mode": "content",
          "brightness": 1,
          "takeaway": "Market the home before it exists"
        },
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nActual in-headset tour. We end in a theater, which feels fitting. Rendering: DBOX for Austin Capital Partners. PureBlink: project visualization collaborator; Agile Lens: interactive experience.\n\nYear: 2023. Venn weights: 1 / 1 / 1.\n\n\nFor your business — presenter proposal: For an off-plan sale, a photograph cannot show the finished home. Partner with the architect and visualization team to create a guided, human-scale sales visit. Your job is still choosing the views and helping someone imagine living there. Project context is evidence of use, not proof of a sales lift caused by VR.",
        "year": "2023",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "spike",
        "title": "Spike tape",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Spike tape",
          "src": "media/pmre/re-holodeck-fiducial-floor.jpg",
          "credit": "Four Seasons Lake Austin · photo: Agile Lens",
          "alt": "The floor becomes the set",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~115s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nKevin Laibson story. Jonathan wished there were a way to remember where the furniture belonged so it could go back in exactly the same place. Theater already has that: spike tape. I hire a lot of theater people. They bring things like this. The photograph shows the room setup, not a claimed close-up of theatrical spike tape.\n\nYear: 2023. Venn weights: 0.8 / 1 / 0.8.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.",
        "year": "2023",
        "venn": [
          0.8,
          1,
          0.8
        ]
      },
      {
        "id": "presales",
        "title": "$500M+ in presales",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "$500M+ in presales",
          "src": "media/pmre/fs-v2/lake-05.jpg",
          "credit": "Four Seasons Lake Austin · photo: Agile Lens",
          "alt": "$500M+ in presales",
          "mode": "content",
          "brightness": 1,
          "takeaway": "Sell the visit as well as the image"
        },
        "notes": "⏱ ~46s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPresenter-approved project context. Do not turn the figure into a measured causal return on VR.\n\nYear: 2023–2026. Venn weights: 1 / 0.5 / 1.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.\n\nFull-cut delivery space: Separate the evidence of buyer adoption from causality. The presales figure is project context; ask what additional evidence would be needed to attribute sales to VR alone. Return to the customer’s ability to judge an unbuilt home.\n\nFor your business — presenter proposal: I would offer an ongoing showroom service: keep views current, train the sales team, and produce the flat media that gets buyers into the experience. The presales figure is sourced project context, not a measured return on VR.",
        "year": "2023–2026",
        "venn": [
          1,
          0.5,
          1
        ]
      },
      {
        "id": "investment",
        "title": "$870M construction loan",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "$870M construction loan",
          "src": "media/pmre/fs-v2/lake-06.jpg",
          "credit": "Four Seasons Lake Austin · photo: Agile Lens",
          "alt": "$870M investment",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPresenter previously called this investment. The public June 2, 2026 TYKO announcement specifies a construction loan. Do not add it to presales or imply VR caused financing.\n\nYear: 2023–2026. Venn weights: 1 / 0.4 / 0.8.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.",
        "year": "2023–2026",
        "venn": [
          1,
          0.4,
          0.8
        ]
      },
      {
        "id": "austin",
        "title": "Austin",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Austin",
          "src": "media/pmre/re-fourseasons-holodeck-session.jpg",
          "credit": "Four Seasons Lake Austin · photo: Agile Lens",
          "alt": "First, Austin",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~51s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThe experience could travel. Locations shown next are not a claimed dated itinerary.\n\nYear: 2023–2026. Venn weights: 1 / 0.8 / 1.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.",
        "year": "2023–2026",
        "venn": [
          1,
          0.8,
          1
        ]
      },
      {
        "id": "aspen",
        "title": "Aspen",
        "use": "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "title": "Aspen",
          "src": "media/pmre/fs-v2/holo-aspen.mp4",
          "poster": "media/story/aspen-poster.jpg",
          "posterTime": 7,
          "credit": "Four Seasons Lake Austin Holodeck · video: Agile Lens",
          "alt": "Then, Aspen",
          "mode": "content",
          "brightness": 0.94
        },
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThe full Aspen setup clip. Let the real room and people show the stagecraft. Preserve source audio.\n\nYear: 2023–2026. Venn weights: 1 / 1 / 1.\n\n\nElizabeth review, November 11: Four Seasons Lake Austin touring/setup footage. Project partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. Agile Lens is the supplied footage source; the Aspen clip retains source audio. Rendered project content, when visible: DBOX for Austin Capital Partners; Pureblink visualization and Agile Lens interactive experience. https://agilelens.com/portfolio/four-seasons-lake-austin. The build clip does not establish an exact venue/date; no unsupported location credit is added.",
        "year": "2023–2026",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "build",
        "title": "",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/story/holodeck-build.mp4",
          "credit": "Four Seasons Lake Austin Holodeck · video: Agile Lens",
          "alt": "Building the walkable room",
          "mode": "content",
          "brightness": 1,
          "posterTime": 8
        },
        "notes": "⏱ ~51s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBuilding the walkable room. Actual setup footage, Agile Lens.\n\nYear: 2023–2026. Venn weights: 1 / 1 / 1.\n\n\nElizabeth review, November 11: Four Seasons Lake Austin touring/setup footage. Project partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. Agile Lens is the supplied footage source; the Aspen clip retains source audio. Rendered project content, when visible: DBOX for Austin Capital Partners; Pureblink visualization and Agile Lens interactive experience. https://agilelens.com/portfolio/four-seasons-lake-austin. The build clip does not establish an exact venue/date; no unsupported location credit is added.",
        "year": "2023–2026",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "dbox",
        "title": "DBOX New York / VR showroom",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "DBOX New York / VR showroom",
          "src": "media/pmre/fs-v2/dbox-01.jpg",
          "credit": "DBOX NYC · photo: Agile Lens · displayed render: DBOX for Austin Capital Partners",
          "alt": "Inside the DBOX space",
          "mode": "content",
          "brightness": 1,
          "takeaway": "Bring the property to the buyer"
        },
        "notes": "⏱ ~48s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nA real physical place to experience the digital one.\n\nYear: 2023–2026. Venn weights: 1 / 0.8 / 1.\n\n\nElizabeth review, November 11: This is DBOX’s Manhattan headquarters showroom, not a full-frame rendering or an Austin venue photo. Photo source: Agile Lens. DBOX/Impossible Ventures are project partners; displayed Four Seasons rendering is credited to DBOX for Austin Capital Partners, distinct from the photograph. The permanent installation opened in 2025 per https://www.agilelens.com/portfolio/ny-dbox-space .\n\nFor your business — presenter proposal: Imagine a sales team showing several unbuilt homes in one city showroom. Media makers can curate the route, make campaign imagery and help operate the experience. This is my proposed business application. This actual DBOX installation opened in 2025; it is distinct from the investor pop-up.",
        "year": "2025",
        "venn": [
          1,
          0.8,
          1
        ]
      },
      {
        "id": "ny57",
        "title": "New York / investor pop-up",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "New York / investor pop-up",
          "src": "media/pmre/fs-v2/nyc-pop-up.jpg",
          "credit": "Four Seasons investor pop-up · NYC, 57th Street · photo: Agile Lens",
          "alt": "57th Street, for investors",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~45s.\n\nNew York investor pop-up on 57th Street, confirmed November 9, 2026. The existing Austin Holodeck was adapted to a 5,000-square-foot NYC space for an Apollo Global Management investor demonstration, completed January 2026. Different pillars and quadrants meant changing layout and teleport points, not just copying Austin.\nSource: KB intelligence/meetings/2026-04-06-henry-keyser-project-archive-interview.md, section 1; presenter confirmation November 9, 2026. The later 440 West 57th Street project email is a separate dated record and should not be silently conflated with this investor pop-up.\n\nElizabeth review, November 11: Photo source: Agile Lens’s Four Seasons Lake Austin NYC VR Experience Pop-up portfolio. Client: Impossible Ventures; investor demonstration venue: Apollo Global Management, per presenter and April 6 Henry interview. DBOX source renderings / Pureblink visualization / Agile Lens interactive experience. Do not conflate with permanent DBOX NYC headquarters. https://agilelens.com/portfolio/four-seasons-lake-austin.",
        "year": "2026",
        "venn": [
          1,
          0.8,
          1
        ]
      },
      {
        "id": "california",
        "title": "California / summer 2026",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "California / summer 2026",
          "src": "media/pmre/round4/california.png",
          "credit": "Four Seasons Holodeck tour · California, summer 2026 · photo: Agile Lens",
          "alt": "Four Seasons Holodeck touring room in California, summer 2026",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~45s.\n\nCalifornia was the summer 2026 tour. The Holodeck is in Miami now, in November 2026. This photograph shows California, not Miami. Touring turns a destination experience into something people can encounter near home.\nSources: presenter confirmation November 9, 2026; KB projects/four-seasons/overview.md (August 20 Miami preparation); agilelens.com establishes the Four Seasons partnership, not these exact tour stops/dates.\n\nElizabeth review, November 11: Photo and title now name the pictured California stop. Miami in November 2026 is spoken follow-on context, not the pictured venue. Credits: photo Agile Lens; Four Seasons / Impossible Ventures, DBOX source renderings, Pureblink visualization, Agile Lens interactive experience. Exact California city/photographer are undocumented and omitted. https://agilelens.com/portfolio/four-seasons-lake-austin.",
        "year": "2026",
        "venn": [
          1,
          0.8,
          1
        ]
      }
    ]
  },
  {
    "year": "2025",
    "accent": "amber",
    "storyChapter": 7,
    "storyLesson": "Tools and performance",
    "lesson": {
      "title": "Tools and performance",
      "short": "Tools and performance",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "mexico",
        "title": "Royal Caribbean / Perfect Day Mexico",
        "use": "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "title": "Royal Caribbean / Perfect Day Mexico",
          "src": "media/pmre/fs-v2/mexico-02.jpg",
          "credit": "Agile Lens / Royal Caribbean",
          "alt": "A flyby keeps you outside",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~100s.\n\nPerfect Day Mexico was commissioned in 2025. Our six-person standalone VR balloon ride previewed Royal Caribbean’s future destination, using a physical hot-air-balloon installation aboard the 2025 President’s Cruise. Distinguish this 2025 commission/demo from the resort’s later opening. Compare the flyby to being there at human scale. The immersive preview is the result I can describe; it is not evidence that the visualization caused a planning decision.\nSources: presenter confirmation November 9, 2026; KB projects/perfect-day-mexico/overview.md (completed 2025, updated for 2026); https://agilelens.com/portfolio/perfect-day-mexico .",
        "year": "2025",
        "venn": [
          1,
          0.4,
          1
        ]
      },
      {
        "id": "rsc",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Royal Shakespeare Company",
          "src": "media/v3/rsc.jpg",
          "credit": "Royal Shakespeare Company / Agile Lens"
        },
        "title": "Royal Shakespeare Company",
        "keep": 30,
        "year": "2024–2025",
        "venn": [
          0.7,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~105s.\n\nRoyal Shakespeare Company VR Rehearsal Tool, 2024–2025 R&D, funded by XR Network+ with Royal Central School. Agile Lens built a virtual Swan Theatre so remote actors in London, Stratford-upon-Avon, New York and Los Angeles could rehearse together. Actors sharing a room use mixed reality passthrough; remote performers appear as avatars. Quest 3 performers can call up scripts and blocking cues. Directors, designers and stage managers use a Windows laptop app to ingest scripts, place blocking notes and monitor positions. A custom backend persists shared state. This is rehearsal research and tool development, not a claim that Agile Lens produced an RSC stage production.\nSource: https://agilelens.com/portfolio/virtual-rehearsal-room; https://xrnetworkplus.xrstories.co.uk/xr-network-announces-royal-shakespeare-company-rd-challenge-projects/ .\nThe supplied photograph is from this RSC research strand, also shown in the July 2025 London Adventures account. Do not assign the pictured session an exact date or name individual participants without a caption.\n\nProperty-media connection — presenter interpretation: This rehearsal work is not a residential case study. My prediction is that shared viewing will make remote property conversations more useful: walk through together and ask questions in the same place."
      },
      {
        "id": "rsc-workshop",
        "year": "2024–2025",
        "title": "RSC / rehearsal research",
        "use": "pmre/story-media",
        "keep": 99,
        "venn": [
          0.6,
          1,
          1
        ],
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "RSC / rehearsal research",
          "src": "media/v3-fix1/rsc-headsets.jpg",
          "credit": "Royal Shakespeare Company / Agile Lens",
          "brightness": 1,
          "alt": "Royal Shakespeare Company / rehearsal"
        },
        "notes": "⏱ ~60s.\n\nRoyal Shakespeare Company VR Rehearsal Tool, 2024–2025 R&D, funded by XR Network+ with Royal Central School. Agile Lens built a virtual Swan Theatre so remote actors in London, Stratford-upon-Avon, New York and Los Angeles could rehearse together. Actors sharing a room use mixed reality passthrough; remote performers appear as avatars. Quest 3 performers can call up scripts and blocking cues. Directors, designers and stage managers use a Windows laptop app to ingest scripts, place blocking notes and monitor positions. A custom backend persists shared state. This is rehearsal research and tool development, not a claim that Agile Lens produced an RSC stage production.\nSource: https://agilelens.com/portfolio/virtual-rehearsal-room; https://xrnetworkplus.xrstories.co.uk/xr-network-announces-royal-shakespeare-company-rd-challenge-projects/ .\nSecond distinct supplied RSC rehearsal research photograph, HarvardXR #7 rsc_02.jpg. Show performers testing rehearsal interactions. Do not imply the photograph records a named production.\n\nFull-cut delivery space: Explain one rehearsal loop: director gives a note, performers try blocking at scale, stage manager saves the state. Contrast remote participants and people sharing a room. Discuss why a repeatable tool matters beyond one polished demo; do not name an unverified stage production."
      },
      {
        "id": "blueprint",
        "title": "Blueprint Immersive",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Blueprint Immersive",
          "src": "media/story/blueprint-seat-demo.mp4",
          "credit": "Product demo: Agile Lens",
          "alt": "Blueprint Immersive seat check",
          "mode": "content",
          "brightness": 1,
          "takeaway": "Make your expertise repeatable"
        },
        "notes": "⏱ ~105s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThis product takes the one-off bespoke theater VR workflow I built for Fisher Dachs and lets them do it themselves. Disseminating expertise can mean teaching, software, a platform, or a talk.\n\nYear: 2025–2026. Venn weights: 1 / 1 / 1.\n\n\nFor your business — presenter proposal: This is a theatre tool, not a property-marketing product claim. The transferable lesson: package what you know into a repeatable buyer experience. Build a template for the questions every buyer asks: what can I see, how does it connect, where would my furniture go?",
        "year": "2025–2026",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "bp-design",
        "title": "",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/story/blueprint-design-demo.mp4",
          "credit": "Product demo: Agile Lens",
          "alt": "Blueprint Immersive design options",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional additional design options demo. Product demo, Agile Lens.\n\nYear: 2025–2026. Venn weights: 1 / 1 / 1.\n",
        "year": "2025–2026",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "floor-demo",
        "title": "Floor Tour",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Floor Tour",
          "src": "media/story/floor-tour-1min.mp4",
          "credit": "Product demo: Agile Lens",
          "alt": "A plan becomes walkable",
          "mode": "content",
          "brightness": 0.65,
          "takeaway": "Let buyers feel the floor plan"
        },
        "notes": "⏱ ~51s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAnother repeatable tool: walk an architectural plan at human scale. Product demonstration, not a current price or availability claim.\n\nYear: 2025–2026. Venn weights: 1 / 0.3 / 1.\n\n\nFor your business — presenter proposal: A floor plan is obvious to an architect and unfamiliar to many buyers. I would sell a guided plan walkthrough beside the photographs, especially before a home is built. This clip demonstrates Floor Tour; it does not establish a price, availability or measured conversion rate.\n\nClip: FloorTour_1Min (55 s, supplied by Alex 2026-11-14): plan in the headset, mixed-reality pass-through, then the rendered interior. Video only (the deck plays clips muted); re-encoded 1080p H.264.",
        "year": "2025–2026",
        "venn": [
          1,
          0.3,
          1
        ]
      }
    ]
  },
  {
    "year": "2026",
    "accent": "rose",
    "storyChapter": 8,
    "storyLesson": "What excites me now",
    "lesson": {
      "title": "What excites me now",
      "short": "What excites me now",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "ring-2026",
        "use": "pmre/ring-chapter",
        "props": {
          "from": 2025,
          "year": 2026,
          "kicker": "NOW",
          "label": "2026",
          "sub": "What excites me",
          "venn": [
            0.6,
            0.5,
            1
          ],
          "vennFrom": [
            1,
            0.8,
            1
          ]
        },
        "title": "",
        "keep": 19,
        "year": "2026",
        "venn": [
          0.6,
          0.5,
          1
        ],
        "storyRole": "content",
        "hideTracker": true,
        "notes": "⏱ ~10s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nChapter break: where things are now.\n\nYear: 2026. Venn weights: 0.6 / 0.5 / 1.\n"
      },
      {
        "id": "uoxr",
        "title": "UOXR / simulator footage",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "UOXR / simulator footage",
          "src": "media/story/uoxr-simulator.mp4",
          "credit": "UOXR: Alex Coulombe Presents · Simulator footage",
          "alt": "UOXR: a reusable starting point",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nReusable starting points let other people go further. Actual simulator capture, not headset acceptance.\n\nYear: 2026. Venn weights: 0.6 / 0.5 / 1.\n",
        "year": "2026",
        "venn": [
          0.6,
          0.5,
          1
        ]
      },
      {
        "id": "carol",
        "title": "A Christmas Carol, in VR",
        "use": "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "title": "A Christmas Carol, in VR",
          "src": "media/story/carol-show.mp4",
          "credit": "A Christmas Carol VR: Agile Lens",
          "alt": "A Christmas Carol, in VR",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSpatial storytelling is another place theater and emerging technology meet. Show actual production footage. Production began earlier; 2026 is the present-day storytelling discussion, not a premiere claim.\n\nYear: 2026. Venn weights: 0.4 / 1 / 1.\n\n\nProperty-media connection — presenter interpretation: Choosing a camera position inside a recorded world is still cinematography. I think property photographers will increasingly create the world and then choose how to film it.",
        "year": "2026",
        "venn": [
          0.4,
          1,
          1
        ]
      },
      {
        "id": "replay",
        "title": "",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/story/carol-replay.mp4",
          "credit": "Replay: Agile Lens / Yu-Jun Yeh",
          "alt": "The show ends. Cameras keep moving",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~62s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThe performance can end and we can still choose a camera. Replay by Agile Lens / Yu-Jun Yeh.\n\nYear: 2026. Venn weights: 0.3 / 1 / 1.\n",
        "year": "2026",
        "venn": [
          0.3,
          1,
          1
        ]
      },
      {
        "id": "working-cut",
        "title": "Virtual camera / prototype",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Virtual camera / prototype",
          "src": "media/pmre/xmas-carol-vcam-iphone.jpg",
          "credit": "Virtual camera screen: Agile Lens",
          "alt": "A cinematographer’s working cut",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~48s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nA working-cut prototype, illustrated with the actual Carol virtual-camera screen.\n\nYear: 2026. Venn weights: 0.4 / 1 / 1.\n",
        "year": "2026",
        "venn": [
          0.4,
          1,
          1
        ]
      },
      {
        "id": "spatial",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Spatial storytelling",
          "src": "media/v3-fix1/spatial-community.jpg",
          "credit": "Unreal NYC / Agile Lens · gallery photograph",
          "brightness": 1,
          "alt": "Spatial storytelling"
        },
        "title": "Spatial storytelling",
        "keep": 99,
        "year": "2025–2026",
        "venn": [
          0.4,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~60s.\n\nAt SIGGRAPH 2025 I co-authored and presented “Seeing Yourself on Stage: Multi-Avatar Performance and the Evolution of Self-Monitoring in VR” in Spatial Storytelling (August 14, Vancouver). In 2026 I returned for “Stage Presence: Design and Testing of a Virtual Rehearsal Room Toolset” and the “Virtual Theatre: Producing Live Theatre on Virtual Stages” panel. At FMX 2026 I curated its first Spatial Storytelling track and presented with David Gochfeld. The final FMX program title was “Ghosts of Performances Past: Five Years of A Christmas Carol VR,” May 7, 2026. The appearances page retains an earlier working title. Work toward a second FMX edition in 2027 is planning, not a completed second curatorship.\nSources: https://s2025.conference-schedule.org/presenter/?uid=645453 ; https://blog.siggraph.org/2024/11/siggraph-2025-innovation-and-community-meet-in-the-heart-of-vancouver.html/ ; https://doi.org/10.1145/3721244.3742445 ; https://alexcoulombepresents.com/appearances ; https://fmx.de/en/news/latest-news/news-23-04-2026 ; https://fmx.de/en/program/program-2026/detail/event/35067 ; KB intelligence/emails/2026-08-25-fmx-2027-spatial-storytelling.md. Visual is an Unreal NYC discussion, not a SIGGRAPH/FMX photograph."
      },
      {
        "id": "teaching",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Teaching forces you to learn",
          "src": "media/v3/teaching.jpg",
          "credit": "Alex Coulombe Presents · August 2026"
        },
        "title": "Teaching forces you to learn",
        "keep": 99,
        "year": "2026",
        "venn": [
          0.6,
          0.5,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~26s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nActual teaching footage from August 2026 illustrates the continuing practice. It is not footage of my 2020 certification or of the named private client trainings.\n\nYear: 2020–2026. Venn weights: 0.6 / 0.5 / 1.\n"
      },
      {
        "id": "film-language",
        "use": "pmre/film-language",
        "props": {},
        "title": "VR is like the early days of film",
        "keep": 99,
        "year": "2026",
        "venn": [
          0.2,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~150s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOne camera films an action. Then cuts connect angles and time: the next day. Montage makes relationships. A close-up feels different from a wide. Tilting the camera can make us uneasy. That language developed over time. VR is still young. Dated milestones, not first-invention claims: Lumière 1895 (ACMI); Porter 1903 (MoMA/LOC); Pig Alley 1912 (MoMA); Intolerance 1916 (BFI); expressionist geometry 1920s (Deutsche Kinemathek); Eisenstein 1925 (MoMA). No first use of a Dutch tilt is asserted.\n\nYear: 2026. Venn weights: 0.2 / 1 / 1.\nHistorical milestones: https://www.acmi.net.au/works/91927--lumiere-programme-silent-version/\nhttps://www.moma.org/collection/works/304708\nhttps://www.moma.org/collection/works/306011\nhttps://www.bfi.org.uk/lists/10-great-silent-epics\nhttps://www.deutsche-kinemathek.de/en/visit/exhibitions/be-caligari-virtual-cabinet\nhttps://www.moma.org/collection/works/305815\n\nShort-cut story context:\nAt SIGGRAPH 2025 I co-authored and presented “Seeing Yourself on Stage: Multi-Avatar Performance and the Evolution of Self-Monitoring in VR” in Spatial Storytelling (August 14, Vancouver). In 2026 I returned for “Stage Presence: Design and Testing of a Virtual Rehearsal Room Toolset” and the “Virtual Theatre: Producing Live Theatre on Virtual Stages” panel. At FMX 2026 I curated its first Spatial Storytelling track and presented with David Gochfeld. The final FMX program title was “Ghosts of Performances Past: Five Years of A Christmas Carol VR,” May 7, 2026. The appearances page retains an earlier working title. Work toward a second FMX edition in 2027 is planning, not a completed second curatorship.\nSources: https://s2025.conference-schedule.org/presenter/?uid=645453 ; https://blog.siggraph.org/2024/11/siggraph-2025-innovation-and-community-meet-in-the-heart-of-vancouver.html/ ; https://doi.org/10.1145/3721244.3742445 ; https://alexcoulombepresents.com/appearances ; https://fmx.de/en/news/latest-news/news-23-04-2026 ; https://fmx.de/en/program/program-2026/detail/event/35067 ; KB intelligence/emails/2026-08-25-fmx-2027-spatial-storytelling.md. Visual is an Unreal NYC discussion, not a SIGGRAPH/FMX photograph.\n\nElizabeth review, November 11: At baseline hash #75 this is film grammar, not the legacy career timeline. Simplified to an undated schematic sequence of framing/cuts/close-up/time/angle/montage, avoiding implied first-invention chronology. The historical source links above are background only. The retained per-slide career years were cross-checked against presenter-career-facts.md: Syracuse2005–2010, Viñoly2010, ZGF2010–2012, FDA2012–2017, Agile Lens public2016, instructor2020, teaching2020–2022 including Princeton2021, RSC2024–2025, SIGGRAPH2025/2026 and FMX2026. Yu-Jun Yeh hiring year remains omitted. No legacy career-timeline module is used in any cut.",
        "motion": "film-language"
      },
      {
        "id": "rome",
        "title": "Walk around the Colosseum",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Walk around the Colosseum",
          "src": "slides/pmre/rome-splats/media/rome-colosseum-flythrough-15s-1080p.mp4",
          "credit": "Josette Seitz / Agile Lens · Web-rendered scan",
          "alt": "Rome, captured as splats",
          "mode": "content",
          "brightness": 1,
          "takeaway": "A captured place you can move through"
        },
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThis is what is exciting me now: places captured from photographs that you can move through. Josette Seitz / Agile Lens scan. Web-rendered footage, not headset footage.\n\nYear: 2026. Venn weights: 1 / 0.3 / 1.\n\n\nGaussian splats are a way to reconstruct the appearance of a place from overlapping photographs/video, so a viewer can choose a new viewpoint. This clip is a web-rendered camera path through our Rome scan; the next headset clip shows the difference between watching that path and choosing your own. The thing that gets me is walking around the Colosseum and looking back at a detail. For a property, that could be a buyer choosing to look back through the living room. Do not describe this Rome capture as a phone or drone scan: the Rome examples use PortalCam. Background: Kerbl, Kopanas, Leimkühler and Drettakis, SIGGRAPH 2023, https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/ . No performance number or equivalence to a measured survey is asserted.",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "hotel",
        "title": "Sina Bernini Bristol",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Sina Bernini Bristol",
          "src": "slides/pmre/rome-splats/media/rome-hotel-flythrough-10s-1080p.mp4",
          "credit": "Sina Bernini Bristol, Autograph Collection · PortalCam: Josette Seitz / Agile Lens",
          "alt": "Gaussian splat of Sina Bernini Bristol, Autograph Collection, Rome",
          "mode": "content",
          "brightness": 1,
          "posterTime": 3,
          "takeaway": "Now imagine this as your next listing"
        },
        "notes": "⏱ ~45s.\n\nSina Bernini Bristol, Autograph Collection, Rome. Josette Seitz captured this hotel with XGRIDS PortalCam during the October 2026 MIA trip. This is the existing slow 10-second web-rendered Gaussian-splat flythrough of the whole-scene LOD scan, not headset footage and not a hotel-supplied marketing film. Credit capture to Josette Seitz / Agile Lens; rendering uses GaussianSplats3D / Three.js.\nSources: presenter identification November 9, 2026; KB daily/2026-10-21-alex-mbp.md (12:25Z scan receipt, RomaHotelMIA files copied to Fort H:/XR/UOXRShowcase/data/RomaHotelMIA), daily/2026-10-22-alex-mbp.md (SplatDiorama scan lineage); https://www.marriott.com/en-us/hotels/romab-sina-bernini-bristol-autograph-collection/overview/ . Existing shipped clip: slides/pmre/rome-splats/media/rome-hotel-flythrough-10s-1080p.mp4. The brand identity source does not imply that Marriott commissioned this scan.\n\nI love the Colosseum, but this is the bridge to your business: an actual hotel interior. Let someone look around the arrival space before they book or buy. The same idea applies to a home, amenity floor or event venue. You would still capture good photographs; I would sell the walkable place as an additional deliverable. This is my proposal, not a Marriott endorsement.",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "splat-vr",
        "title": "Rome, inside the headset",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Rome, inside the headset",
          "src": "media/v3-fix6/rome-headset.mp4",
          "alt": "First-person Vision Pro recording moving through the Colosseum Gaussian splat, with hands and SplatDiorama controls visible",
          "credit": "Headset recording: Alex Coulombe Presents · scan: Josette Seitz / Agile Lens",
          "posterTime": 7,
          "takeaway": "Let the buyer choose where to look"
        },
        "notes": "⏱ ~70s.\n\n(over video) This is two short excerpts of my actual first-person Apple Vision Pro recording, not the simulator still we used earlier. Look at the hands and the change of viewpoint. You are inside a captured place, deciding where to look. I think that is extraordinary. You do not have to convince every buyer to own a headset: start with a link, then offer a guided headset visit when it helps.\n\nSource: Alex Coulombe Presents, “Gaussian Splats on Apple Vision Pro with XGRIDS LCC2 Streaming”, https://youtu.be/AD8d6CHDbGo . Excerpts 10:10–10:28 (Colosseum) and 08:30–08:42 (hotel), rendered to 1920×1080 H.264 with all audio stripped. Rome PortalCam scan: Josette Seitz / Agile Lens, October 2026 MIA trip. This recording demonstrates this app and dataset; it is not a claim that every splat viewer or headset supports the same workflow. Native control labels in the recording are retained for honest context. The separate venue cue is silent too.\n\nFor your business — presenter proposal: build a scene that can support a buyer-controlled tour and a photographer-directed film. You can sell the capture, cleanup, route, publication and future updates as distinct parts of the job.",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "capture-to-tour",
        "use": "pmre/property-future",
        "title": "Your shoot becomes a place",
        "keep": 19,
        "year": "2026+",
        "venn": [
          1,
          0.4,
          1
        ],
        "storyRole": "content",
        "props": {
          "chapter": "The next few years",
          "title": "Your shoot becomes a place",
          "labels": [
            "Phone / drone",
            "Gaussian splat",
            "Walkthrough"
          ],
          "icons": [
            "capture",
            "splat",
            "walk"
          ],
          "src": "media/v3-fix6/mia-fountain.mp4",
          "credit": "Gaussian splat walkthrough: Alex Coulombe"
        },
        "notes": "⏱ ~75s.\n\nPresenter forecast/proposal, November 2026.\n\nMy bet: the deliverable expands from a set of views to a place the buyer can explore. On a phone or drone shoot, plan overlapping coverage for reconstruction alongside the hero shots. Process the images, clean the scan, choose the start point, then publish a walkthrough and a short film. That is a capture-to-walkthrough service you can begin testing on a property you control. A drone covers the outside; a phone or handheld capture covers the inside. This is an additional capture plan, not a promise that every ordinary real-estate shoot will reconstruct well.\n\nThe Rome examples are PortalCam captures. The phone/drone route is a separate workflow. Polycam documents Gaussian splats from existing overlapping photos or video, including drone captures; this is a supported input route, not a promised turnaround or quality guarantee. Sources: https://learn.poly.cam/hc/en-us/articles/30549134403860-How-to-Create-Drone-3D-Models-in-Polycam ; https://learn.poly.cam/hc/en-us/articles/30549121659412-How-to-Create-Photogrammetry-and-Gaussian-splats-from-Existing-Images-and-Videos-on-Mobile-and-Web . Use overlap and coverage, inspect glass/mirrors/moving subjects, clean the result and test the actual viewer. Price the work, not an assumed one-click conversion.\n\nThe portrait movie is reused from the MIA deck: media/video/splat-walkthrough.mp4, credited there to Alex Coulombe. It shows a fountain scan viewed from a moving virtual camera, not a new Rome hotel capture and not a recording of a phone actively scanning. PMRE derivative uses 00:03–00:12, audio removed, height 1080. It illustrates the middle (reconstructed scene) stage; the phone/drone input route is described separately above."
      },
      {
        "id": "view-before-visit",
        "use": "pmre/property-future",
        "title": "Choose how to live there",
        "keep": 19,
        "year": "2026+",
        "venn": [
          1,
          0.4,
          1
        ],
        "storyRole": "content",
        "props": {
          "chapter": "The next few years",
          "title": "Choose how to live there",
          "labels": [
            "Browse at home",
            "Meet in VR",
            "Place it in AR"
          ],
          "icons": [
            "home",
            "headset",
            "ar"
          ]
        },
        "notes": "⏱ ~60s.\n\nPresenter forecast/proposal, November 2026.\n\nMy prediction: the first viewing happens wherever the buyer is. Browse the captured home on a screen; join an agent in a VR showroom for an unbuilt apartment; use AR to explore a furniture or layout choice in the room you are standing in. Think about the ordinary decisions: does the dining table fit our life, how does the kitchen connect to the garden, could this room work as an office? AR and VR can help people discuss those questions before a trip and after moving in.\n\nSeparate the assets: a splat preserves captured appearance; off-plan sales need a design model or visualization; an AR furniture placement needs an appropriate object model and supported viewer. I am describing the direction I want to build toward, not announcing a universal property platform, seamless file compatibility, or an adoption forecast. The Four Seasons/DBOX work earlier in the talk is the actual example of a VR sales setting. Your service can be the guided experience and the media that brings people to it."
      },
      {
        "id": "sell-next",
        "use": "pmre/property-future",
        "title": "What I’d sell next",
        "keep": 19,
        "year": "2026+",
        "venn": [
          1,
          0.4,
          1
        ],
        "storyRole": "content",
        "props": {
          "chapter": "The next few years",
          "title": "What I’d sell next",
          "labels": [
            "Capture + tour",
            "Staging + options",
            "Launch + updates"
          ],
          "icons": [
            "camera",
            "room",
            "refresh"
          ]
        },
        "notes": "⏱ ~75s.\n\nPresenter forecast/proposal, November 2026.\n\nMy opinion: do not wait to become a headset company. Sell a small, clear addition to your existing property package: a cleaned walkable capture, a guided route and a film from the same scene. For an unbuilt project, partner with the visualization team and offer a staffed showroom session. For an existing home, offer labeled AI-assisted staging concepts and a path back to the original capture. Keep the actual space visible and distinguish a proposal from what is there.\n\nAI can help explore furniture and finishes, but your eye still has to judge scale, light, continuity and whether the result tells the truth about the property. A beautiful invented doorway is a bad listing image. I would sell the art direction and review, not the number of generated pictures. Offer updates when the space or campaign changes. No revenue forecast, price, or sales-lift statistic is implied. My bet is that the photographer who knows how to make people care about a place will be valuable across all of these formats.\n\nTransition into the restored closing trio: that is why this technology excites me, why your trained eye still matters, and why your own combination of interests is the opportunity."
      },
      {
        "id": "ai",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "What excites me now",
          "src": "media/v3-fix5/ai-theatre-concept.jpg",
          "credit": "AI-generated concept illustration",
          "alt": "Speculative AI-generated theatre and architectural atrium concept"
        },
        "title": "What excites me now",
        "keep": 30,
        "year": "2026",
        "venn": [
          0.6,
          0.3,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional current excitement. I may skip this if the room has heard enough AI this week. Connect it to the things I already love, rather than presenting a lesson about tools. My architectural training helps me judge the output.\n\nYear: 2026. Venn weights: 0.6 / 0.3 / 1.\n\nRestored November 11 at presenter request. Image is a newly AI-generated speculative theatre/architecture concept for this slide, not an existing building, client commission, product screenshot or measured demo. Use it to discuss rapid exploration at the intersection of architecture, theatre and technology. Credit: OpenAI image generation / Alex Coulombe Presents, November 11, 2026. Full generation prompt and file hash: media/v3-fix5/manifest.json.",
        "opt": "ai:on"
      },
      {
        "id": "ai-hand",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Your eye still matters",
          "src": "media/v3-fix1/napkin.jpg",
          "credit": "Hand sketch: Alex Coulombe",
          "alt": "Alex Coulombe’s hand-drawn room plan in a sketchbook"
        },
        "title": "Your eye still matters",
        "keep": 99,
        "year": "2026",
        "venn": [
          0.9,
          0.2,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nRevisit the hand-trained eye. The tools can make more things, but I still have to decide what is worth making. Avoid claiming a specific unverified product demo.\n\nYear: 2026. Venn weights: 0.9 / 0.2 / 1.\n\nRestored November 11 at presenter request. This is Alex’s actual hand-drawn room plan from Designing Naturally s49, the same sketch introduced earlier in the sketch-to-VR sequence. Deliberate visual callback: judgment begins with seeing and choosing, regardless of the tool. It is not AI output or a 2026 project. Image provenance and original byte identity: media/v3-fix1/manifest.json.",
        "opt": "ai:on"
      },
      {
        "id": "be-the",
        "use": "pmre/text-card",
        "props": {
          "kicker": "A shortcut to your X + Y",
          "title": "Don’t become a worse version of your hero",
          "lines": [
            "Copy them in <i>their</i> field: you’re the knockoff.",
            "Be them for a <b>different industry</b>: that’s a niche.",
            "“The MrBeast of real estate.”"
          ]
        },
        "title": "Don’t become a worse version of your hero",
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "notes": "⏱ ~30s.\n\nLead-in to the X + Y examples. The idea is from The Internet Stamp, “the YouTube guru lie.” (2026-10-26, https://www.youtube.com/watch?v=gov_q0rbKz8), and Alex flagged it for this talk on 2026-11-15.\n\nIf you just emulate the person you admire, in their own field, people see you as a worse version of them. The video's line is that you become the knockoff, always compared with the real thing. Instead, be that person for a totally different industry. Their example was ‘the MrBeast of real estate’. That's a fast way to find a niche nobody else holds.\n\nThen: here's what that looks like in practice → the X + Y example.\n\nOptional, only if true for you: name the person you'd be ‘the ___ of ___’ for. Don't improvise a claim.\n\nSource summary: media/youtube/the-youtube-guru-lie.md in the KB (from the transcript). The video also names Ryan Serhant as the MrBeast of real estate for New York; that is their framing, not a fact to repeat as ours.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n"
      },
      {
        "id": "niche",
        "title": "Devon Pastorius",
        "use": "pmre/niche-example",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "src": "media/v3-fix1/devon.png",
          "credit": "Devon Pastorius · Narwhal Creative · PMRE 2026",
          "brightness": 1,
          "alt": "Devon Pastorius",
          "headline": "Not the best X —\nthe best at X + Y",
          "name": "Devon Pastorius",
          "combination": "Photography + Performance"
        },
        "notes": "⏱ ~65s.\n\nMaybe not the best X of all time, but the best at X-plus-Y. That is a way to find your distinctive combination, not a measured global ranking or a factual claim that anyone here is less talented. Devon Pastorius, Creative Director and Principal Photographer of Narwhal Creative, combines real-estate media with rap music videos, cinematic one-takes and sketch comedy. Maybe not the greatest photographer of all time, but the person you call for property media plus performance. The combination is observable in his work; “best” is my rhetorical framing. He is listed as a PMRE 2026 presenter. I am not claiming he has already spoken.\nSources: https://www.pmreconference.com/presenters ; https://narwhalcreative.ca/ .\nRestored November 11 at presenter request. On-screen paired terms summarize the sourced combination; the headline is rhetorical presenter opinion, not an objective ranking. The name and portrait identify the example without relying on narration.",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "opt": "niche:devon"
      },
      {
        "id": "niche-miranda",
        "title": "Lin-Manuel Miranda",
        "use": "pmre/niche-example",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "src": "media/v3-fix5/miranda.jpg",
          "credit": "Portrait: John D. and Catherine T. MacArthur Foundation",
          "brightness": 1,
          "alt": "Lin-Manuel Miranda",
          "headline": "Not the best X —\nthe best at X + Y",
          "name": "Lin-Manuel Miranda",
          "combination": "Theatre + Hip-hop"
        },
        "notes": "⏱ ~65s.\n\nMaybe not the best X of all time, but the best at X-plus-Y. That is a way to find your distinctive combination, not a measured global ranking or a factual claim that anyone here is less talented. Maybe not the greatest musical lyricist of all time; I might argue for Sondheim. But Miranda is my example of the best at infusing musical theatre with rap and hip-hop. This is explicitly my opinion about a distinctive combination, not an objective ranking. His MacArthur profile documents Hamilton’s blending of musical theatre and hip-hop. Jennifer Vanasco’s NPR biography review describes Sondheim as his mentor. Miranda is an outside illustration, not a claimed PMRE attendee.\nSources: https://www.macfound.org/fellows/class-of-2015/lin-manuel-miranda ; https://www.capradio.org/news/npr/story?storyid=nx-s1-5532081 .\nRestored November 11 at presenter request. On-screen paired terms summarize the sourced combination; the headline is rhetorical presenter opinion, not an objective ranking. The name and portrait identify the example without relying on narration. Portrait: https://www.macfound.org/media/photos/miranda_2015_hi-res-download_1.jpg ; source and requested credit: https://www.macfound.org/fellows/class-of-2015/lin-manuel-miranda .",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "opt": "niche:miranda"
      },
      {
        "id": "niche-natalia",
        "title": "Natalia Robert",
        "use": "pmre/niche-example",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "src": "media/v3-fix3/natalia.webp",
          "credit": "Natalia Robert · The Grove · PMRE 2026",
          "brightness": 1,
          "alt": "Natalia Robert",
          "headline": "Not the best X —\nthe best at X + Y",
          "name": "Natalia Robert",
          "combination": "Interiors + Architecture"
        },
        "notes": "⏱ ~65s.\n\nMaybe not the best X of all time, but the best at X-plus-Y. That is a way to find your distinctive combination, not a measured global ranking or a factual claim that anyone here is less talented. Natalia Robert is a former architect and interior photographer. She combines architectural training with interior photography and founded The Grove in 2019 to support women in architectural and interior photography. This is a concrete example of a photographic eye plus design knowledge plus community-building. “Best at her combination” is the presenter’s invitation to think about a niche, not a competitive ranking. PMRE lists her as Ladies Luncheon Host; do not call her an earlier speaker.\nSources: https://www.pmreconference.com/presenters ; https://www.nataliarobert.com/about ; https://www.wearegrovestrong.com/about .\nRestored November 11 at presenter request. On-screen paired terms summarize the sourced combination; the headline is rhetorical presenter opinion, not an objective ranking. The name and portrait identify the example without relying on narration.",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "opt": "niche:natalia"
      },
      {
        "id": "niche-matt",
        "title": "Matt Feddermann",
        "use": "pmre/niche-example",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "src": "media/v3-fix3/matt.png",
          "credit": "Matt Feddermann · Real Snap Media · PMRE 2026",
          "brightness": 1,
          "alt": "Matt Feddermann",
          "headline": "Not the best X —\nthe best at X + Y",
          "name": "Matt Feddermann",
          "combination": "Photography + Branding"
        },
        "notes": "⏱ ~65s.\n\nMaybe not the best X of all time, but the best at X-plus-Y. That is a way to find your distinctive combination, not a measured global ranking or a factual claim that anyone here is less talented. Matt Feddermann founded Real Snap Media in Chicagoland. His work combines real-estate photography/video with brand strategy, lead generation and agent marketing. The niche is helping an agent’s business, beyond documenting the building. “Best at X-plus-Y” is an editorial example, not an evidence-backed ranking. PMRE lists him as a 2026 panelist; the order of sessions is unknown.\nSources: https://www.pmreconference.com/presenters ; https://realsnapmedia.com/ .\nRestored November 11 at presenter request. On-screen paired terms summarize the sourced combination; the headline is rhetorical presenter opinion, not an objective ranking. The name and portrait identify the example without relying on narration.",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "opt": "niche:matt"
      }
    ]
  }
];
const BONUS = {
  "opt": "chapter:off",
  "year": "2026",
  "title": "",
  "tagline": "",
  "notes": "⏱ ~0s. Hidden."
};
