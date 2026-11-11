// PMRE v3: chronological story; Elizabeth review with presenter closing restoration.
const TALK = {
  "coverEvent": "",
  "coverTitle": "Architect to <span class=\"xr\">XR</span>-chitect",
  "coverSub": "",
  "speaker": "Alex Coulombe",
  "speakerCo": "",
  "coverNotes": "⏱ ~30s.\n\nI want to tell you how architecture, theater and emerging technology became one job. I hope this sparks an idea about the things you love. Full is the primary rehearsal cut. Select 20t for the venue time limit.",
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
    "storyLesson": "Interests",
    "lesson": {
      "title": "Interests",
      "short": "Interests",
      "tagline": "",
      "tags": "",
      "opt": "chapter:off",
      "notes": "⏱ ~0s.\nHidden organizational record."
    },
    "cases": [
      {
        "id": "interests",
        "use": "pmre/venn",
        "props": {},
        "title": "Architecture. Theater. Emerging technology.",
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nHere are the things I love. This is the story of how they became interesting to me, and how they became a job. I hope it sparks an idea about the things you love.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n",
        "motion": "venn"
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
        "id": "rosa",
        "title": "“Pick a lane”",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "“Pick a lane”",
          "src": "media/pmre/pre-fda-equus-syracuse-portfolio.png",
          "credit": "Student work: Alex Coulombe",
          "alt": "“Pick a lane”",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nRichard Rosa told me to pick a lane. I think people who tell you to focus on one thing are telling you what worked for their brain. They are trying to help. My brain was excited to jump between things.\n\nYear: 2005. Venn weights: 1 / 0.5 / 0.2.\n\n\nShort-cut story context (full version has separate visuals):\nAt Syracuse we were not allowed to touch a computer for the first year. At the time it was excruciating. It made me think deliberately about every line and every line weight. With Revit you make a wall, and the lines are a byproduct. Clarity can get lost.\n\nIn third-year comprehensive studio Brian Lonsway was teaching MicroStation. He let me teach myself Revit instead. That led to internships at VIP Structures and Breadloaf Corporation. Breadloaf spelling corrected by Alex. Visual is my architectural work, not a photograph of Brian or the internship.\n\nMerged delivery context:\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSet design was already a place where architecture and theater could meet. Student work, not professional client work.\n\nYear: 2008. Venn weights: 0.8 / 1 / 0.1.\n",
        "year": "2005",
        "venn": [
          1,
          0.5,
          0.2
        ]
      },
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
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nMy interests kept pulling in different directions. Architecture, theater, emerging technology.\n\nYear: 2005. Venn weights: 1 / 1 / 1.\n",
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
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI was looking for places where those interests could work together. Establish cyan architecture, rose theater and violet technology, matching the tracker.\n\nYear: 2005. Venn weights: 1 / 1 / 1.\n",
        "motion": "lane-to-venn"
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
        "id": "revit",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Learning Revit",
          "src": "media/v3-fix1/revit-example.jpg",
          "credit": "Alex Coulombe / Agile Lens · later workflow example",
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
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIn third-year comprehensive studio Brian Lonsway was teaching MicroStation. He let me teach myself Revit instead. That led to internships at VIP Structures and Breadloaf Corporation. Breadloaf Corporation spelling supplied by Alex.\n Visual is my architectural work, not a photograph of Brian or the internship.\n\nYear: 2007. Venn weights: 1 / 0 / 0.8.\n\n\nImage: Designing Naturally s44, a later Revit workflow example, not an image of the 2007 studio. Breadloaf Corporation is the corrected internship name supplied by Alex (November 8 addition)."
      },
      {
        "id": "london",
        "title": "Architecture became a stage",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Architecture became a stage",
          "src": "media/pmre/pre-fda-connective-corridor-2008.jpg",
          "credit": "Student work: Alex Coulombe",
          "brightness": 1,
          "alt": "Architecture became a stage"
        },
        "notes": "⏱ ~54s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nMichael Barclay helped expand my love of theater, spatial storytelling and live shows. This image is my student work.\n\nYear: 2008. Venn weights: 0.7 / 1 / 0.2.\n\n\nMerged delivery context:\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nStudent work: architecture, civic technology and performance were already overlapping.\n\nYear: 2008. Venn weights: 1 / 0.6 / 0.6.\n\n\nVisual is the Connective Corridor student model, not a photograph of London. The London/Barclay story is delivery context.",
        "year": "2008",
        "venn": [
          0.7,
          1,
          0.2
        ]
      },
      {
        "id": "thesis",
        "title": "Governors Island",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "Governors Island",
          "src": "media/v3-fix1/thesis-atrium.jpg",
          "credit": "Alex Coulombe · Designing Naturally s57",
          "brightness": 1,
          "alt": "Governors Island"
        },
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional, brief thesis image. Describe the project only as far as I want to take it in rehearsal.\n\nYear: 2009. Venn weights: 1 / 0.5 / 0.6.\n",
        "year": "2009",
        "venn": [
          1,
          0.5,
          0.6
        ]
      },
      {
        "id": "graduation",
        "title": "I don’t think my job exists yet",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "I don’t think my job exists yet",
          "src": "media/v3-fix1/thesis-model.jpg",
          "credit": "Alex Coulombe · thesis model, Designing Naturally s57",
          "brightness": 1,
          "alt": "I don’t think my job exists yet"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI did not think a traditional architecture partner ladder was going to make me happy. I was interested in too many other things.\n\nYear: 2010. Venn weights: 1 / 0.5 / 0.5.\n",
        "year": "2010",
        "venn": [
          1,
          0.5,
          0.5
        ]
      },
      {
        "id": "archviz",
        "title": "New York",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "New York",
          "src": "media/pmre/round4/zgf-nyu-lobby.jpg",
          "credit": "Alex Coulombe / ZGF Architects",
          "brightness": 1,
          "alt": "New York"
        },
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nTeaching myself Revit helped me get the Rafael Viñoly job that brought me to New York. The image shown is my later ZGF work, not a Viñoly project.\n\nYear: 2010. Venn weights: 1 / 0.1 / 0.8.\n",
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
          "credit": "Fisher Dachs Associates · historical drawing",
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
        "notes": "⏱ ~67s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI got to be an architect specializing in theaters. Two of my interests in one job. And still I felt a gap: where was the emerging technology? It felt like complaining about the sheen of the gold on the wall. A very first-world problem.\n\nYear: 2012. Venn weights: 1 / 1 / 0.1.\n\n\nSource: Designing Naturally s7. FDA sightline work predates my arrival and VR, going back to the 1980s per Alex. Do not assign an exact year to this scanned drawing without confirmation."
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
          "credit": "Alex Coulombe · Designing Naturally s18–20",
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
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nEarly Macbeth work at the Park Avenue Armory. Could everyone see? Now I could stand in a theater before it existed, at a human eye height. Source: KB Macbeth overview dates this previs work to 2014.\n\nYear: 2014. Venn weights: 1 / 1 / 1.\n",
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
          "credit": "Kenneth Branagh’s Macbeth · Park Avenue Armory · production photo from supplied deck",
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
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "The Late Show at Ed Sullivan Theater by Bravo Media",
          "src": "media/pmre/fda-ed-sullivan-vr-capture.mp4",
          "credit": "The Late Show · Ed Sullivan Theater · Bravo Media",
          "alt": "Lighting the Late Show",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~105s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSightlines for people became sightlines for projectors at the Late Show. Architecture, theater and technology all in the same job. Tell the transition, rather than explain the technical pipeline.\n\nYear: 2015. Venn weights: 1 / 1 / 1.\n\n\nElizabeth review, November 11: Bravo Media credit and requested title supplied by Elizabeth. Alex/FDA sightline role remains in the delivery context; do not present this video as solely authored by Alex.",
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
          "credit": "Equinox lobby study · visualization: Alex Coulombe",
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
        "id": "agile",
        "title": "“We should do it together”",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "“We should do it together”",
          "src": "media/v3-fix1/agile-lens-logo.jpg",
          "credit": "Agile Lens · founded 2016",
          "brightness": 0.85,
          "alt": "“We should do it together”"
        },
        "notes": "⏱ ~210s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThen Josh said that if I really wanted to start a VR company, we should do it together. That was the surprise. We founded Agile Lens later in 2016. Ten years now. Show people how passionate you are, including what you do off-hours because you love it. That is how they come to believe in you.\n\nYear: 2016. Venn weights: 0.7 / 0.8 / 1.\n\n\nMerged delivery context:\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nEarly 2016: Josh pulled me in and said he felt I was thinking of leaving to start a VR company. My reaction was, What? No! I will work here till I die. Then he said I was not much of a business manager, not organized, with creative wildfire but not much direction. I thought he was trying to convince me not to leave. These are paraphrased delivery prompts from the walk, not a verbatim historical transcript.\n\nYear: 2016. Venn weights: 0.5 / 0.7 / 1.\n\n\nTell the early-2016 Josh office story first, then the invitation to become partners and the later-2016 founding. The logo is company identity, not a photo of that conversation.",
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
          "credit": "Alex Coulombe · Syracuse studio review, 2015–2017",
          "brightness": 1,
          "alt": "Curiosity"
        },
        "title": "Curiosity",
        "keep": 19,
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
        "keep": 19,
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
          "credit": "Autodesk University 2017 · expert panel AS129811"
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
        "notes": "⏱ ~110s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBusiness development took off when I stopped cold calling and started speaking. Jeff Mottle invited me to Autodesk University after a YouTube video with few views. It did not need to go viral. It needed to reach the right person. Separate channels are fine if that helps you put work out there. Name corrected against official Autodesk panel credits.\n\nYear: 2017. Venn weights: 0.4 / 0.6 / 1.\nSource: https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017\n\nA low-view YouTube video reached Jeff Mottle, leading to a speaking invitation. This picture shows the resulting Autodesk expert panel, not a screenshot of the video. Speaking made the work visible to potential collaborators. Source: presenter recollection and official Autodesk 2017 panel https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017 . The separate Vegas crowd selfie is removed; it obscures this cause-and-effect story."
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
        "notes": "⏱ ~155s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s45. Suggested placement after napkin sketch: bring the spatial sketch back into the Autodesk workflow as an overlay for the resolved model and documents. This is the original2017-era limitation described by Alex, not a claim about all present-day software. Optional extension; the precise recording day is not asserted.",
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
        "keep": 19,
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
        "id": "referrals",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Getting the brief",
          "src": "media/v3/referrals.jpg",
          "credit": "Alex Coulombe / Agile Lens · Epic / Unreal Fest 2023"
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
        "notes": "⏱ ~117s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBuyers walk the future home together. A guide and physical stagecraft make this a shared visit.\n\nYear: 2023. Venn weights: 1 / 1 / 1.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.\n\nFull-cut delivery space: Describe the visitor journey: briefing, headset, shared walk and sitting in a real seat at the end. Explain the guide’s role and why other people in the room change the visit. Ask which part of a property story needs more than a camera.",
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
          "brightness": 1
        },
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nActual in-headset tour. We end in a theater, which feels fitting. Rendering: DBOX for Austin Capital Partners. PureBlink: project visualization collaborator; Agile Lens: interactive experience.\n\nYear: 2023. Venn weights: 1 / 1 / 1.\n",
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
          "brightness": 1
        },
        "notes": "⏱ ~96s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPresenter-approved project context. Do not turn the figure into a measured causal return on VR.\n\nYear: 2023–2026. Venn weights: 1 / 0.5 / 1.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.\n\nFull-cut delivery space: Separate the evidence of buyer adoption from causality. The presales figure is project context; ask what additional evidence would be needed to attribute sales to VR alone. Return to the customer’s ability to judge an unbuilt home.",
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
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "DBOX New York / VR showroom",
          "src": "media/pmre/fs-v2/dbox-01.jpg",
          "credit": "DBOX NYC · photo: Agile Lens · displayed render: DBOX for Austin Capital Partners",
          "alt": "Inside the DBOX space",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~48s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nA real physical place to experience the digital one.\n\nYear: 2023–2026. Venn weights: 1 / 0.8 / 1.\n\n\nElizabeth review, November 11: This is DBOX’s Manhattan headquarters showroom, not a full-frame rendering or an Austin venue photo. Photo source: Agile Lens. DBOX/Impossible Ventures are project partners; displayed Four Seasons rendering is credited to DBOX for Austin Capital Partners, distinct from the photograph. The permanent installation opened in 2025 per https://www.agilelens.com/portfolio/ny-dbox-space .",
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
        "keep": 19,
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
        "keep": 19,
        "year": "2024–2025",
        "venn": [
          0.7,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~105s.\n\nRoyal Shakespeare Company VR Rehearsal Tool, 2024–2025 R&D, funded by XR Network+ with Royal Central School. Agile Lens built a virtual Swan Theatre so remote actors in London, Stratford-upon-Avon, New York and Los Angeles could rehearse together. Actors sharing a room use mixed reality passthrough; remote performers appear as avatars. Quest 3 performers can call up scripts and blocking cues. Directors, designers and stage managers use a Windows laptop app to ingest scripts, place blocking notes and monitor positions. A custom backend persists shared state. This is rehearsal research and tool development, not a claim that Agile Lens produced an RSC stage production.\nSource: https://agilelens.com/portfolio/virtual-rehearsal-room; https://xrnetworkplus.xrstories.co.uk/xr-network-announces-royal-shakespeare-company-rd-challenge-projects/ .\nThe supplied photograph is from this RSC research strand, also shown in the July 2025 London Adventures account. Do not assign the pictured session an exact date or name individual participants without a caption."
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
        "notes": "⏱ ~100s.\n\nRoyal Shakespeare Company VR Rehearsal Tool, 2024–2025 R&D, funded by XR Network+ with Royal Central School. Agile Lens built a virtual Swan Theatre so remote actors in London, Stratford-upon-Avon, New York and Los Angeles could rehearse together. Actors sharing a room use mixed reality passthrough; remote performers appear as avatars. Quest 3 performers can call up scripts and blocking cues. Directors, designers and stage managers use a Windows laptop app to ingest scripts, place blocking notes and monitor positions. A custom backend persists shared state. This is rehearsal research and tool development, not a claim that Agile Lens produced an RSC stage production.\nSource: https://agilelens.com/portfolio/virtual-rehearsal-room; https://xrnetworkplus.xrstories.co.uk/xr-network-announces-royal-shakespeare-company-rd-challenge-projects/ .\nSecond distinct supplied RSC rehearsal research photograph, HarvardXR #7 rsc_02.jpg. Show performers testing rehearsal interactions. Do not imply the photograph records a named production.\n\nFull-cut delivery space: Explain one rehearsal loop: director gives a note, performers try blocking at scale, stage manager saves the state. Contrast remote participants and people sharing a room. Discuss why a repeatable tool matters beyond one polished demo; do not name an unverified stage production."
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
          "brightness": 1
        },
        "notes": "⏱ ~105s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThis product takes the one-off bespoke theater VR workflow I built for Fisher Dachs and lets them do it themselves. Disseminating expertise can mean teaching, software, a platform, or a talk.\n\nYear: 2025–2026. Venn weights: 1 / 1 / 1.\n",
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
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Floor Tour",
          "src": "media/story/floor-tour-demo.mp4",
          "credit": "Product demo: Agile Lens",
          "alt": "A plan becomes walkable",
          "mode": "content",
          "brightness": 0.65
        },
        "notes": "⏱ ~51s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAnother repeatable tool: walk an architectural plan at human scale. Product demonstration, not a current price or availability claim.\n\nYear: 2025–2026. Venn weights: 1 / 0.3 / 1.\n",
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
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSpatial storytelling is another place theater and emerging technology meet. Show actual production footage. Production began earlier; 2026 is the present-day storytelling discussion, not a premiere claim.\n\nYear: 2026. Venn weights: 0.4 / 1 / 1.\n",
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
        "notes": "⏱ ~65s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nActual teaching footage from August 2026 illustrates the continuing practice. It is not footage of my 2020 certification or of the named private client trainings.\n\nYear: 2020–2026. Venn weights: 0.6 / 0.5 / 1.\n"
      },
      {
        "id": "film-language",
        "use": "pmre/film-language",
        "props": {},
        "title": "VR is like the early days of film",
        "keep": 19,
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
        "title": "Rome / web-rendered scan",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Rome / web-rendered scan",
          "src": "slides/pmre/rome-splats/media/rome-colosseum-flythrough-15s-1080p.mp4",
          "credit": "Josette Seitz / Agile Lens · Web-rendered scan",
          "alt": "Rome, captured as splats",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThis is what is exciting me now: places captured from photographs that you can move through. Josette Seitz / Agile Lens scan. Web-rendered footage, not headset footage.\n\nYear: 2026. Venn weights: 1 / 0.3 / 1.\n",
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
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Sina Bernini Bristol",
          "src": "slides/pmre/rome-splats/media/rome-hotel-flythrough-10s-1080p.mp4",
          "credit": "Sina Bernini Bristol, Autograph Collection · PortalCam: Josette Seitz / Agile Lens",
          "alt": "Gaussian splat of Sina Bernini Bristol, Autograph Collection, Rome",
          "mode": "content",
          "brightness": 1,
          "posterTime": 3
        },
        "notes": "⏱ ~45s.\n\nSina Bernini Bristol, Autograph Collection, Rome. Josette Seitz captured this hotel with XGRIDS PortalCam during the October 2026 MIA trip. This is the existing slow 10-second web-rendered Gaussian-splat flythrough of the whole-scene LOD scan, not headset footage and not a hotel-supplied marketing film. Credit capture to Josette Seitz / Agile Lens; rendering uses GaussianSplats3D / Three.js.\nSources: presenter identification November 9, 2026; KB daily/2026-10-21-alex-mbp.md (12:25Z scan receipt, RomaHotelMIA files copied to Fort H:/XR/UOXRShowcase/data/RomaHotelMIA), daily/2026-10-22-alex-mbp.md (SplatDiorama scan lineage); https://www.marriott.com/en-us/hotels/romab-sina-bernini-bristol-autograph-collection/overview/ . Existing shipped clip: slides/pmre/rome-splats/media/rome-hotel-flythrough-10s-1080p.mp4. The brand identity source does not imply that Marriott commissioned this scan.",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "splatdiorama",
        "title": "SplatDiorama / simulator",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "SplatDiorama / simulator",
          "src": "media/story/splatdiorama-rome.png",
          "credit": "SplatDiorama build77 · Simulator screenshot",
          "alt": "SplatDiorama opens the same place",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~56s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSame scan in the actual app simulator. Maintain simulator label.\n\nYear: 2026. Venn weights: 1 / 0.3 / 1.\n",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "ai",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "What excites me now",
          "src": "media/v3-fix5/ai-theatre-concept.jpg",
          "credit": "AI-generated concept illustration · OpenAI / Alex Coulombe Presents",
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
          "credit": "Hand sketch: Alex Coulombe · Designing Naturally, slide 49",
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
