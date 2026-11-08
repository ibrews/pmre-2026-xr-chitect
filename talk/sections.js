// PMRE v3: chronological story from the presenter’s walk.
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
  "qrLabel": "",
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
    "ai": {
      "label": "Current AI excitement",
      "default": "on",
      "choices": {
        "on": "Include",
        "off": "Skip"
      }
    }
  },
  "thesisAlts": {},
  "closeAlts": {},
  "closeNotes": "⏱ ~40s.\n\nIt makes me happy when I hear that I inspired someone to pursue VR, architecture, theater, or whatever they love. Thank you. What’s your weird intersection?"
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
        use: "pmre/venn",
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
        use: "pmre/story-media",
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
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nRichard Rosa told me to pick a lane. I think people who tell you to focus on one thing are telling you what worked for their brain. They are trying to help. My brain was excited to jump between things.\n\nYear: 2005. Venn weights: 1 / 0.5 / 0.2.\n\n\nShort-cut story context (full version has separate visuals):\nAt Syracuse we were not allowed to touch a computer for the first year. At the time it was excruciating. It made me think deliberately about every line and every line weight. With Revit you make a wall, and the lines are a byproduct. Clarity can get lost.\n\nIn third-year comprehensive studio Brian Lonsway was teaching MicroStation. He let me teach myself Revit instead. That led to internships at VIP Structures and Redleaf Corporation. NEEDS CONFIRMATION: Redleaf spelling. Visual is my architectural work, not a photograph of Brian or the internship.",
        "year": "2005",
        "venn": [
          1,
          0.5,
          0.2
        ]
      },
      {
        "id": "lanes",
        use: "pmre/lane-traffic",
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
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nMy interests kept pulling in different directions. Architecture, theater, emerging technology.\n\nYear: 2005. Venn weights: 1 / 1 / 1.\n",
        "motion": "lane-traffic"
      },
      {
        "id": "lanes-venn",
        use: "pmre/lane-to-venn",
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
        use: "pmre/the-hand",
        "props": {},
        "title": "One deliberate line",
        "keep": 30,
        "year": "2005",
        "venn": [
          1,
          0,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAt Syracuse we were not allowed to touch a computer for the first year. At the time it was excruciating. It made me think deliberately about every line and every line weight. With Revit you make a wall, and the lines are a byproduct. Clarity can get lost.\n\nYear: 2005. Venn weights: 1 / 0 / 0.1.\n",
        "motion": "the-hand"
      },
      {
        "id": "revit",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Brian Lonsway let me try Revit",
          "src": "media/pmre/round4/zgf-nyu-lobby.jpg"
        },
        "title": "Brian Lonsway let me try Revit",
        "keep": 30,
        "year": "2007",
        "venn": [
          1,
          0,
          0.8
        ],
        "storyRole": "content",
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIn third-year comprehensive studio Brian Lonsway was teaching MicroStation. He let me teach myself Revit instead. That led to internships at VIP Structures and Redleaf Corporation. NEEDS CONFIRMATION: Redleaf spelling. Visual is my architectural work, not a photograph of Brian or the internship.\n\nYear: 2007. Venn weights: 1 / 0 / 0.8.\n"
      },
      {
        "id": "london",
        "title": "London, 2008",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "London, 2008",
          "src": "media/pmre/pre-fda-connective-corridor-2008.jpg",
          "credit": "Student work: Alex Coulombe",
          "alt": "London, 2008: theater opens up",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nMichael Barclay helped expand my love of theater, spatial storytelling and live shows. This image is my student work.\n\nYear: 2008. Venn weights: 0.7 / 1 / 0.2.\n",
        "year": "2008",
        "venn": [
          0.7,
          1,
          0.2
        ]
      },
      {
        "id": "equus",
        "title": "Equus",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Equus",
          "src": "media/pmre/pre-fda-equus-syracuse-portfolio.png",
          "credit": "Student work: Alex Coulombe",
          "alt": "Equus: a theater problem",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~65s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSet design was already a place where architecture and theater could meet. Student work, not professional client work.\n\nYear: 2008. Venn weights: 0.8 / 1 / 0.1.\n",
        "year": "2008",
        "venn": [
          0.8,
          1,
          0.1
        ]
      },
      {
        "id": "corridor",
        "title": "Architecture became a stage",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Architecture became a stage",
          "src": "media/pmre/pre-fda-connective-corridor-2008.jpg",
          "credit": "Student work: Alex Coulombe",
          "alt": "Architecture became a stage",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nStudent work: architecture, civic technology and performance were already overlapping.\n\nYear: 2008. Venn weights: 1 / 0.6 / 0.6.\n",
        "year": "2008",
        "venn": [
          1,
          0.6,
          0.6
        ]
      },
      {
        "id": "thesis",
        "title": "Governors Island",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Governors Island",
          "src": "media/pmre/round4/thesis-earlyatrium.jpg",
          "credit": "Thesis: Alex Coulombe",
          "alt": "Governors Island, 2009",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional, brief thesis image. Describe the project only as far as I want to take it in rehearsal.\n\nYear: 2009. Venn weights: 1 / 0.5 / 0.6.\n",
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
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "I don’t think my job exists yet",
          "src": "media/pmre/round4/thesis-earlyatrium.jpg",
          "credit": "Alex Coulombe, 2010",
          "alt": "I DON’T THINK MY JOB EXISTS YET",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI did not think a traditional architecture partner ladder was going to make me happy. I was interested in too many other things.\n\nYear: 2010. Venn weights: 1 / 0.5 / 0.5.\n",
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
        use: "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "New York",
          "src": "media/pmre/round4/zgf-nyu-lobby.jpg",
          "credit": "Alex Coulombe / ZGF Architects",
          "alt": "Viñoly, ZGF, and visualization",
          "mode": "content",
          "brightness": 1
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
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Fisher Dachs Associates",
          "src": "media/pmre/fda-shed-unity-axon.png"
        },
        "title": "Fisher Dachs Associates",
        "keep": 99,
        "year": "2012",
        "venn": [
          1,
          1,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI got to be an architect specializing in theaters. Two of my interests in one job. And still I felt a gap: where was the emerging technology? It felt like complaining about the sheen of the gold on the wall. A very first-world problem.\n\nYear: 2012. Venn weights: 1 / 1 / 0.1.\n"
      },
      {
        "id": "dk1",
        "title": "Oculus Rift DK1",
        use: "pmre/story-media",
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
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "It wasn’t turnkey",
          "src": "media/pmre/fda-dk1-office-demo.jpg"
        },
        "title": "It wasn’t turnkey",
        "keep": 99,
        "year": "2013",
        "venn": [
          0.8,
          0.4,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~105s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIn 2013 there was no elegant turnkey way to do what I expected. I went home at night and learned JavaScript and C# on Codecademy, learned Unity, learned model optimization. Architecture school taught me modeling, not optimization. It was exactly the kind of challenge I loved going home to.\n\nYear: 2013. Venn weights: 0.8 / 0.4 / 1.\n"
      },
      {
        "id": "sightlines",
        "title": "Macbeth / Park Avenue Armory",
        use: "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Macbeth / Park Avenue Armory",
          "src": "media/pmre/fda-macbeth-armory-vr-demo.jpg",
          "credit": "Capture: Alex Coulombe / Fisher Dachs Associates",
          "alt": "Could everyone see the stage?",
          "mode": "content",
          "brightness": 1
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
        "id": "shed",
        "title": "The Shed",
        use: "pmre/story-media",
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
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional additional theater planning example. The visual is a Unity axonometric, not a finished-building photograph.\n\nYear: 2014. Venn weights: 1 / 1 / 0.9.\n",
        "year": "2014",
        "venn": [
          1,
          1,
          0.9
        ]
      },
      {
        "id": "late-show",
        "title": "Ed Sullivan Theater",
        use: "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Ed Sullivan Theater",
          "src": "media/pmre/fda-ed-sullivan-vr-capture.mp4",
          "credit": "Alex Coulombe / Fisher Dachs Associates",
          "alt": "Lighting the Late Show",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~105s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSightlines for people became sightlines for projectors at the Late Show. Architecture, theater and technology all in the same job. Tell the transition, rather than explain the technical pipeline.\n\nYear: 2015. Venn weights: 1 / 1 / 1.\n",
        "year": "2015",
        "venn": [
          1,
          1,
          1
        ]
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
        "id": "josh-office",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Early 2016",
          "src": "media/pmre/fda-dk1-office-demo.jpg"
        },
        "title": "Early 2016",
        "keep": 19,
        "year": "2016",
        "venn": [
          0.5,
          0.7,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~115s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nEarly 2016: Josh pulled me in and said he felt I was thinking of leaving to start a VR company. My reaction was, What? No! I will work here till I die. Then he said I was not much of a business manager, not organized, with creative wildfire but not much direction. I thought he was trying to convince me not to leave. These are paraphrased delivery prompts from the walk, not a verbatim historical transcript.\n\nYear: 2016. Venn weights: 0.5 / 0.7 / 1.\n"
      },
      {
        "id": "agile",
        "title": "“We should do it together”",
        use: "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "“We should do it together”",
          "src": "media/pmre/fda-macbeth-armory-vr-demo.jpg",
          "credit": "Photo: Agile Lens / Fisher Dachs Associates",
          "alt": "2016: Agile Lens",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThen Josh said that if I really wanted to start a VR company, we should do it together. That was the surprise. We founded Agile Lens later in 2016. Ten years now. Show people how passionate you are, including what you do off-hours because you love it. That is how they come to believe in you.\n\nYear: 2016. Venn weights: 0.7 / 0.8 / 1.\n",
        "year": "2016",
        "venn": [
          0.7,
          0.8,
          1
        ]
      },
      {
        "id": "hiring",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Curiosity",
          "src": "slides/pmre/hxr-community/media/community/community04_unrealnyc_peeps.jpg"
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
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nWhen I hire, I am not looking first at GPA or whether someone studied VR. Excitement, being a quick study, curiosity. Be curious, not judgmental, as Ted Lasso puts it. I knew talented architects whose presentations looked like watching paint dry. I would have been thrilled to show work like theirs.\n\nYear: 2016. Venn weights: 0.5 / 1 / 0.8.\n"
      },
      {
        "id": "picasso",
        use: "pmre/story-media",
        "props": {
          "title": "NEEDS CONFIRMATION: Picasso slide",
          "mode": "takeaway"
        },
        "title": "NEEDS CONFIRMATION: Picasso slide",
        "keep": 99,
        "year": "2016",
        "venn": [
          0.4,
          0.5,
          0.6
        ],
        "storyRole": "content",
        "notes": "⏱ ~35s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPLACEHOLDER: Alex will supply the remembered Picasso slide. Research did not find it in the final AU 2017 deck. Do not state an age or attribute a quotation until confirmed. Optional Miranda anecdote also needs a primary source before inclusion.\n\nYear: 2016. Venn weights: 0.4 / 0.5 / 0.6.\n"
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
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "The right one or two people",
          "src": "media/v3/au-panel.jpeg",
          "credit": "Autodesk University 2017 · AS129811"
        },
        "title": "The right one or two people",
        "keep": 19,
        "year": "2017",
        "venn": [
          0.4,
          0.6,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBusiness development took off when I stopped cold calling and started speaking. Jeff Mottle invited me to Autodesk University after a YouTube video with few views. It did not need to go viral. It needed to reach the right person. Separate channels are fine if that helps you put work out there. Name corrected against official Autodesk panel credits.\n\nYear: 2017. Venn weights: 0.4 / 0.6 / 1.\nSource: https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017\n\nShort-cut story context (full version has separate visuals):\nI got to sit on a panel of experts, several still friends today. It helped with my imposter syndrome: maybe this combination of knowledge really was useful. Official thumbnail shows two participants, not the whole panel.\n\nThere was a line outside my talk. I remember how exciting that was. I am happy to be back in Vegas. NEEDS CONFIRMATION: exact year of this queue photograph. It was on the old Agile Lens home page by 2019; the archive date is not the event date. Do not call the photograph independently verified as 2017.\n\nSpeaking led to teaching at NYU, Princeton and Columbia. I met Eugenia while I was a guest critic at Columbia, and she became my best employee. This visual is a community gathering, not a claimed Columbia classroom. Exact appointment and hiring years NEEDS CONFIRMATION."
      },
      {
        "id": "au-panel",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Autodesk University, 2017",
          "src": "media/v3/au-panel.jpeg",
          "credit": "Autodesk University 2017 · AS129811"
        },
        "title": "Autodesk University, 2017",
        "keep": 99,
        "year": "2017",
        "venn": [
          0.5,
          0.7,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI got to sit on a panel of experts, several still friends today. It helped with my imposter syndrome: maybe this combination of knowledge really was useful. Official thumbnail shows two participants, not the whole panel.\n\nYear: 2017. Venn weights: 0.5 / 0.7 / 1.\nSource: https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017"
      },
      {
        "id": "au-line",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Happy to be back in Vegas",
          "src": "media/v3/au-line.jpg",
          "credit": "Alex Coulombe / Agile Lens · AU queue, year unconfirmed"
        },
        "title": "Happy to be back in Vegas",
        "keep": 30,
        "year": "2017",
        "venn": [
          0.3,
          1,
          0.8
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThere was a line outside my talk. I remember how exciting that was. I am happy to be back in Vegas. NEEDS CONFIRMATION: exact year of this queue photograph. It was on the old Agile Lens home page by 2019; the archive date is not the event date. Do not call the photograph independently verified as 2017.\n\nYear: 2017. Venn weights: 0.3 / 1 / 0.8.\nSource: https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017"
      },
      {
        "id": "universities",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Teaching",
          "src": "slides/pmre/hxr-community/media/community/community04_unrealnyc_peeps.jpg"
        },
        "title": "Teaching",
        "keep": 99,
        "year": "2017–2020",
        "venn": [
          0.8,
          0.6,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSpeaking led to teaching at NYU, Princeton and Columbia. I met Eugenia while I was a guest critic at Columbia, and she became my best employee. This visual is a community gathering, not a claimed Columbia classroom. Exact appointment and hiring years NEEDS CONFIRMATION.\n\nYear: 2017–2020. Venn weights: 0.8 / 0.6 / 1.\n"
      },
      {
        "id": "unreal",
        "title": "Unreal Authorized Instructor",
        use: "pmre/story-media",
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
        "id": "teaching",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Teaching forces you to learn",
          "src": "media/v3/teaching.jpg",
          "credit": "Alex Coulombe Presents · August 2026"
        },
        "title": "Teaching forces you to learn",
        "keep": 99,
        "year": "2020–2026",
        "venn": [
          0.6,
          0.5,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nActual teaching footage from August 2026 illustrates the continuing practice. It is not footage of my 2020 certification or of the named private client trainings.\n\nYear: 2020–2026. Venn weights: 0.6 / 0.5 / 1.\n"
      },
      {
        "id": "geffen",
        "title": "David Geffen Hall",
        use: "pmre/story-media",
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
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAnother chance to bring theater expertise into a real architectural decision at eye level. Image and project credits: Agile Lens / Fisher Dachs Associates.\n\nYear: 2022. Venn weights: 1 / 1 / 1.\n",
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
        "id": "mexico",
        "title": "Royal Caribbean / Perfect Day Mexico",
        use: "pmre/story-media",
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
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nCompare the flyby to being there at human scale. Keep the development outcome separate from what the preview demonstrated. Do not imply the form of the visualization caused a planning decision. NEEDS CONFIRMATION: exact commission year, shown as the existing deck era pending rehearsal.\n\nYear: 2023. Venn weights: 1 / 0.4 / 1.\n",
        "year": "2023",
        "venn": [
          1,
          0.4,
          1
        ]
      },
      {
        "id": "referrals",
        use: "pmre/story-media",
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
        use: "pmre/story-media",
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
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nWhy us? Our particular combination of architecture, theater and technology. Rendering: DBOX for Austin Capital Partners. PureBlink and Agile Lens contributions remain credited separately.\n\nYear: 2023. Venn weights: 1 / 0.7 / 1.\n\n\nShort-cut story context (full version has separate visuals):\nFour Seasons came through word of mouth. Original Unreal Fest 2023 slide and notes name Shane Scranton, Paul Debevec, Kim Baumann Larsen, Jeff Mottle, Vikas Reddy and Jeff Powers. Several contacts converged on an introduction to Jonathan Coon. Do not turn them into a made-up relay chain or say the slide lists 17 people. Original recording 9:10–9:43. Correspondence includes an October 2022 message.\n\nIf you are wondering why another company got the job you wanted, maybe they were more exciting. Good presentations and storytelling matter. This is why our weird combination made us suited to this project.",
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
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/pmre/re-holodeck-tablet-guests.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "Buyers walk the future home",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBuyers walk the future home together. A guide and physical stagecraft make this a shared visit.\n\nYear: 2023. Venn weights: 1 / 1 / 1.\n",
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
        use: "pmre/story-media",
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
        use: "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Spike tape",
          "src": "media/pmre/re-holodeck-fiducial-floor.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "The floor becomes the set",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~115s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nKevin Laibson story. Jonathan wished there were a way to remember where the furniture belonged so it could go back in exactly the same place. Theater already has that: spike tape. I hire a lot of theater people. They bring things like this. The photograph shows the room setup, not a claimed close-up of theatrical spike tape.\n\nYear: 2023. Venn weights: 0.8 / 1 / 0.8.\n",
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
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "$500M+ in presales",
          "src": "media/pmre/fs-v2/lake-05.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "$500M+ in presales",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPresenter-approved project context. Do not turn the figure into a measured causal return on VR.\n\nYear: 2023–2026. Venn weights: 1 / 0.5 / 1.\n",
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
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "$870M construction loan",
          "src": "media/pmre/fs-v2/lake-06.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "$870M investment",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPresenter previously called this investment. The public June 2, 2026 TYKO announcement specifies a construction loan. Do not add it to presales or imply VR caused financing.\n\nYear: 2023–2026. Venn weights: 1 / 0.4 / 0.8.\n",
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
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "Austin",
          "src": "media/pmre/re-holodeck-lakeaustin-room.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "First, Austin",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThe experience could travel. Locations shown next are not a claimed dated itinerary.\n\nYear: 2023–2026. Venn weights: 1 / 0.8 / 1.\nSource: https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017",
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
        use: "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "title": "Aspen",
          "src": "media/pmre/fs-v2/holo-aspen.mp4",
          "poster": "media/story/aspen-poster.jpg",
          "posterTime": 7,
          "credit": "Video: Agile Lens",
          "alt": "Then, Aspen",
          "mode": "content",
          "brightness": 0.94
        },
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThe full Aspen setup clip. Let the real room and people show the stagecraft. Preserve source audio.\n\nYear: 2023–2026. Venn weights: 1 / 1 / 1.\n",
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
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/story/holodeck-build.mp4",
          "credit": "Video: Agile Lens",
          "alt": "Building the walkable room",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBuilding the walkable room. Actual setup footage, Agile Lens.\n\nYear: 2023–2026. Venn weights: 1 / 1 / 1.\n",
        "year": "2023–2026",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "dbox",
        "title": "DBOX",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "DBOX",
          "src": "media/pmre/fs-v2/dbox-01.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "Inside the DBOX space",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~55s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nA real physical place to experience the digital one.\n\nYear: 2023–2026. Venn weights: 1 / 0.8 / 1.\n",
        "year": "2023–2026",
        "venn": [
          1,
          0.8,
          1
        ]
      },
      {
        "id": "ny57",
        "title": "New York",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "New York",
          "src": "media/pmre/fs-v2/nyc-pop-up.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "57th Street, for investors",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThe investor pop-up. Exact 57th Street relationship and date NEEDS CONFIRMATION.\n\nYear: 2023–2026. Venn weights: 1 / 0.8 / 1.\n",
        "year": "2023–2026",
        "venn": [
          1,
          0.8,
          1
        ]
      },
      {
        "id": "california",
        "title": "California",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "California",
          "src": "media/pmre/round4/california.png",
          "credit": "Photo: Agile Lens",
          "alt": "Then, the California tour",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPresenter-supplied California photograph. Stops and dates NEEDS CONFIRMATION.\n\nYear: 2023–2026. Venn weights: 1 / 0.8 / 1.\n",
        "year": "2023–2026",
        "venn": [
          1,
          0.8,
          1
        ]
      },
      {
        "id": "why-us",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "",
          "src": "media/pmre/re-holodeck-tablet-guests.jpg"
        },
        "title": "",
        "keep": 99,
        "year": "2023–2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~75s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIf you are wondering why another company got the job you wanted, maybe they were more exciting. Good presentations and storytelling matter. This is why our weird combination made us suited to this project.\n\nYear: 2023–2026. Venn weights: 1 / 1 / 1.\n"
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
        "id": "rsc",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Royal Shakespeare Company",
          "src": "media/v3/rsc.jpg",
          "credit": "Royal Shakespeare Company / Agile Lens"
        },
        "title": "Royal Shakespeare Company",
        "keep": 19,
        "year": "2025",
        "venn": [
          0.7,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~105s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nWork on VR rehearsal tools for the Royal Shakespeare Company and Royal Central School of Speech and Drama. A real performance question drives the technology. Public evidence: Alex’s July 16, 2025 London Adventures video. NEEDS CONFIRMATION: precise project scope and which pictured workshop to describe.\n\nYear: 2025. Venn weights: 0.7 / 1 / 1.\n"
      },
      {
        "id": "blueprint",
        "title": "Blueprint Immersive",
        use: "pmre/story-media",
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
        use: "pmre/story-media",
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
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional additional design options demo. Product demo, Agile Lens.\n\nYear: 2025–2026. Venn weights: 1 / 1 / 1.\n",
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
        use: "pmre/story-media",
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
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAnother repeatable tool: walk an architectural plan at human scale. Product demonstration, not a current price or availability claim.\n\nYear: 2025–2026. Venn weights: 1 / 0.3 / 1.\n",
        "year": "2025–2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "uoxr",
        "title": "UOXR / simulator footage",
        use: "pmre/story-media",
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
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nReusable starting points let other people go further. Actual simulator capture, not headset acceptance.\n\nYear: 2026. Venn weights: 0.6 / 0.5 / 1.\n",
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
        use: "pmre/story-media",
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
        use: "pmre/story-media",
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
        "notes": "⏱ ~80s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThe performance can end and we can still choose a camera. Replay by Agile Lens / Yu-Jun Yeh.\n\nYear: 2026. Venn weights: 0.3 / 1 / 1.\n",
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
        use: "pmre/story-media",
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
        "notes": "⏱ ~55s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nA working-cut prototype, illustrated with the actual Carol virtual-camera screen.\n\nYear: 2026. Venn weights: 0.4 / 1 / 1.\n",
        "year": "2026",
        "venn": [
          0.4,
          1,
          1
        ]
      },
      {
        "id": "spatial",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Spatial storytelling",
          "src": "slides/pmre/hxr-community/media/community/community04_unrealnyc_peeps.jpg"
        },
        "title": "Spatial storytelling",
        "keep": 99,
        "year": "2026",
        "venn": [
          0.4,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nI was part of the inaugural SIGGRAPH spatial storytelling track, and I am curating FMX’s spatial storytelling track for a second year. This is the combination of theater and emerging technology again. It could be a whole talk. Here is just a hint. NEEDS CONFIRMATION: exact track title/edition before delivery.\n\nYear: 2026. Venn weights: 0.4 / 1 / 1.\n"
      },
      {
        "id": "film-language",
        use: "pmre/film-language",
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
        "notes": "⏱ ~150s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOne camera films an action. Then cuts connect angles and time: the next day. Montage makes relationships. A close-up feels different from a wide. Tilting the camera can make us uneasy. That language developed over time. VR is still young. Dated milestones, not first-invention claims: Lumière 1895 (ACMI); Porter 1903 (MoMA/LOC); Pig Alley 1912 (MoMA); Intolerance 1916 (BFI); expressionist geometry 1920s (Deutsche Kinemathek); Eisenstein 1925 (MoMA). Dutch tilt first use NEEDS CONFIRMATION, do not claim a first.\n\nYear: 2026. Venn weights: 0.2 / 1 / 1.\nHistorical milestones: https://www.acmi.net.au/works/91927--lumiere-programme-silent-version/\nhttps://www.moma.org/collection/works/304708\nhttps://www.moma.org/collection/works/306011\nhttps://www.bfi.org.uk/lists/10-great-silent-epics\nhttps://www.deutsche-kinemathek.de/en/visit/exhibitions/be-caligari-virtual-cabinet\nhttps://www.moma.org/collection/works/305815\n\nShort-cut story context (full version has separate visuals):\nI was part of the inaugural SIGGRAPH spatial storytelling track, and I am curating FMX’s spatial storytelling track for a second year. This is the combination of theater and emerging technology again. It could be a whole talk. Here is just a hint. NEEDS CONFIRMATION: exact track title/edition before delivery.",
        "motion": "film-language"
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
        "id": "rome",
        "title": "Rome / web-rendered scan",
        use: "pmre/story-media",
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
        "title": "",
        use: "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "slides/pmre/rome-splats/media/rome-hotel-flythrough-10s-1080p.mp4",
          "credit": "Josette Seitz / Agile Lens · Web-rendered scan",
          "alt": "A hotel becomes a location",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~50s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional second scan. Hotel name NEEDS CONFIRMATION.\n\nYear: 2026. Venn weights: 1 / 0.3 / 1.\n",
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
        use: "pmre/story-media",
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
        "notes": "⏱ ~60s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nSame scan in the actual app simulator. Maintain simulator label.\n\nYear: 2026. Venn weights: 1 / 0.3 / 1.\n",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "ai",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "What excites me now",
          "src": "media/pmre/round4/zgf-nyu-lab.jpg"
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
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOptional current excitement. I may skip this if the room has heard enough AI this week. Connect it to the things I already love, rather than presenting a lesson about tools. My architectural training helps me judge the output.\n\nYear: 2026. Venn weights: 0.6 / 0.3 / 1.\n",
        "opt": "ai:on"
      },
      {
        "id": "ai-hand",
        use: "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Your eye still matters",
          "src": "media/pmre/round4/thesis-earlyatrium.jpg"
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
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nRevisit the hand-trained eye. The tools can make more things, but I still have to decide what is worth making. Avoid claiming a specific unverified product demo.\n\nYear: 2026. Venn weights: 0.9 / 0.2 / 1.\n",
        "opt": "ai:on"
      },
      {
        "id": "devon",
        use: "pmre/story-media",
        "props": {
          "title": "Devon Pastorius",
          "mode": "takeaway"
        },
        "title": "Devon Pastorius",
        "keep": 99,
        "year": "2026",
        "venn": [
          0.4,
          1,
          0.8
        ],
        "storyRole": "content",
        "notes": "⏱ ~35s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nA quick example from this room: Narwhal Creative’s Devon Pastorius combines rap videos, comedy/sketch and cinematic one-takes with real-estate media. Official PMRE presenter bio. This is an editorial observation about the work, not a claim about his private motivation. Agenda must be rechecked before saying you already heard him.\n\nYear: 2026. Venn weights: 0.4 / 1 / 0.8.\nSource: https://www.pmreconference.com/presenters\n\nOfficial bio: real-estate rap videos, cinematic one-takes and comedy/sketch. No cleared portrait supplied."
      },
      {
        "id": "niche",
        "title": "Your particular combination",
        use: "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Your particular combination",
          "src": "slides/pmre/hxr-community/media/community/community04_unrealnyc_peeps.jpg",
          "credit": "Photo: Agile Lens",
          "alt": "Be the best at your niche",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~65s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBeing the best photographer in the world is a hard lift. Being the best medical-equipment photographer is a more specific possibility if you love both. This is my illustrative example from the walk; it is not verified podcast wording. The podcast instead uses luxury houses with pools. No promise of a measured global ranking.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\nRelated podcast (different example): https://www.youtube.com/watch?v=3xiznCmDUX0&t=1893s",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "intersection",
        "title": "",
        use: "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "",
          "src": "media/pmre/fda-macbeth-armory-vr-demo.jpg",
          "credit": "Photo: Agile Lens / Fisher Dachs Associates",
          "alt": "Your experience is the starting point",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIt makes me happy when I hear I inspired someone to pursue VR, architecture, theater, or whatever they love. That is what I hope this story does.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ]
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
