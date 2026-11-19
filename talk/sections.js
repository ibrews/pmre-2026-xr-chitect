// PMRE v8: final local audit; authoring source.
const TALK = {
  "coverEvent": "PMRE 2026 &middot; Las Vegas &middot; Thursday, Nov 19",
  "coverTitle": "Architect to <span class=\"xr\">XR</span>-chitect",
  "coverSub": "The Best Career Advice I Ever Ignored",
  "speaker": "Alex Coulombe",
  "speakerCo": "Co-Founder, Agile Lens &middot; New York City",
  "coverNotes": "⏱ ~30s.\n\nI want to tell you how architecture, theater and emerging technology became one job. I hope this sparks an idea about the things you love. Full is the primary rehearsal cut. Select 20t for the venue time limit.\n\nFor this room: I make spaces understandable before people can be there. You already do that with property photographs and films. I want to show you what you might sell when the buyer can step inside the media.\n\nNovember 18: I have the great honor of knowing that I am very likely the worst photographer in this room. Thanks to Brandon, the PMRE team, Reed and Jazz. I have learned from the people here and calibrated this talk to your work. Buckle up: I will move quickly. Recent events I have attended include Augmented Enterprise Summit in Atlanta, the film/television event in Rome, Meta Connect and an Android developer event. This conference has helped me connect that work to property media. The last slide has one QR for the talk, links and a free starter guide.",
  "mapCenter": [
    "ARCHITECT",
    "TO XR-CHITECT"
  ],
  "mapNotes": "⏱ ~0s.\nHidden: per-slide year and Venn carry the orientation.",
  "closeEyebrow": "",
  "closeTitle": "Build it together. Q&A",
  "closeSub": "Start small. Make it valuable. Bring us the ambitious ones.",
  "web": "ibrews.github.io/pmre-2026-xr-chitect/v8/resources/",
  "qr": "https://ibrews.github.io/pmre-2026-xr-chitect/v8/resources/",
  "qrLabel": "Free starter kit · training · projects · this deck\nPassword: pixie",
  "options": {
    "cut": {
      "label": "Length",
      "default": "full",
      "choices": {
        "20": "Short rehearsal",
        "30": "Medium rehearsal",
        "full": "Full v8 story",
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
  "closeNotes": "⏱ ~30s.\nOne QR opens the existing v8 attendee resource hub; password pixie. Free second-brain starter kit, project context and the full deck. The hub links to alexcoulombepresents.com/pmre for private 1:1 and team training. Alex confirmed November 19 08:01 UTC: PMRE20 is live, 20% off once on private 1:1 and the 1-hour consultation; team training discounted manually in the quote. No public-class/voucher/stacked-code offer. The main /pmre page itself has no password. Invite questions and a hands-on headset demo. PICO Space Pro: name and generic silhouette only; no NDA specs or imagery."
};
const SECTIONS = [
  {
    "year": "2026",
    "accent": "teal",
    "storyChapter": 1,
    "storyLesson": "Hello",
    "lesson": {
      "title": "Alex Coulombe",
      "short": "Hello",
      "tagline": "",
      "tags": "",
      "opt": "",
      "notes": "⏱ ~45s.\n\nMIA slide #2 reused per Alex, November 19. Co-Founder; 350+ classes. Three clicks: bio, five icon power-ups including replacement compact VR glasses, stat tallies. First headset covers the whole head; VR pickup replaces it.\nFinal audit: 13 years in VR, counted from the confirmed DK1 start in 2013; 350+ classes and clients are presenter-supplied figures.",
      "id": "speaker-intro",
      "use": "pmre/mia-speaker",
      "props": {
        "eyebrow": "Your Speaker",
        "name": "Alex<br>Coulombe",
        "role": "Co-Founder &amp; CEO, Agile Lens: Immersive Design",
        "withBeard": true,
        "bio": "Architect. Designer. Developer. Educator.",
        "ue5": "Authorized Unreal Engine instructor since 2020\n350+ classes",
        "stats": [
          {
            "n": "16+",
            "l": "Years in XR"
          },
          {
            "n": "10+",
            "l": "Years of Agile Lens"
          },
          {
            "n": "8+",
            "l": "Years in Unreal Engine"
          },
          {
            "n": "100+",
            "l": "Experiences built"
          }
        ],
        "icons": [
          "architecture",
          "theatre",
          "film",
          "computer",
          "vr"
        ]
      },
      "hideTracker": true
    },
    "cases": [
      {
        "id": "hello",
        "use": "pmre/studio-wheel",
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
        "notes": "⏱ ~35s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nMy name is Alex Coulombe. I run a little company in New York City called Agile Lens Immersive Design: an XR studio working across architecture, real estate, entertainment and much more.\n\nThank you to Brandon. Thank you to PMRE. I am particularly excited to be in Vegas, as you will hear later: about ten years ago something really cool happened here, and what happened in Vegas did not stay in Vegas. (Confirmed by Alex 2026-11-14: the Vegas moment is Autodesk University 2017. Pays off at the “Sharing work led to speaking” slide.)\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n",
        "hideTracker": true
      },
      {
        "id": "poll",
        "title": "Have you tried VR?",
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/text-card",
        "props": {
          "title": "Have you tried VR?",
          "lines": [
            "<span style=\"font-size:.5em;opacity:.75;font-style:italic\">No, you haven’t.</span>"
          ],
          "lineSteps": true,
          "quote": "",
          "attr": "",
          "kicker": "",
          "centered": true
        },
        "notes": "⏱ ~35s.\n\nPresenter audience poll, in this order. Pause for each response. Ask what they remember; no audience percentages are asserted.\n\nHands up if you have tried a VR headset.\nHands down if it was Google Cardboard.\nKeep them up if it was in the past three years.\n\nClick: “No, you haven’t.” If you haven’t tried it in the last few years, it has changed a lot.",
        "hideTracker": true
      },
      {
        "id": "xr-terms",
        "title": "VR, AR, MR, XR",
        "year": "2026+",
        "venn": [1, 1, 1],
        "keep": 19,
        "use": "pmre/xr-terms",
        "props": {},
        "notes": "⏱ ~30s.\n\nKeep it brief: one click per term. VR: a headset fully replaces what you see. AR: digital content layered on your view of the real world, on a phone or glasses. MR: digital content that understands your real room, so a floor plan can sit on this floor or walls can rise around you. XR: the umbrella term. Most new headsets do all of it, so the labels matter less every year.",
        "hideTracker": true
      },
      {
        "id": "goals",
        "use": "pmre/text-card",
        "props": {
          "kicker": "",
          "title": "What I hope this talk provides for you:",
          "lines": [
            "<b>1.</b> A value on your weird mix of skills and interests",
            "<b>2.</b> A reason &amp; roadmap to create media you can step inside",
            "<b>3.</b> A good yarn"
          ],
          "lineSteps": true
        },
        "title": "What I hope this talk provides for you:",
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~40s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nToday is mostly story time. I will go roughly chronologically. Two goals.\n\nOne: tell a good yarn, and maybe get you thinking about what it means to develop expertise in a niche, and about the special abilities, interests or passions you have that are so far untapped.\n\nTwo: get you excited about what virtual, augmented and mixed reality can do in architecture and real estate. You may be thinking, I have worked with Matterport. This is more about projects that do not exist yet: Gaussian splatting for unbuilt properties, walking through something completely at scale, photorealistic, in a way that amazes and inspires.\n\nYear: 2026. Venn weights: 1 / 1 / 1.\n\n\nItem 2: Sell the next tier of your package.",
        "hideTracker": true
      },
      {
        "id": "teaser",
        "use": "pmre/text-card",
        "props": {
          "kicker": "Where this story leads",
          "big": "$2 billion",
          "quote": "",
          "attr": "Without VR, an ambitious luxury real estate project would not be happening"
        },
        "title": "Where this story leads",
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
        "title": "REWIND",
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
    ],
    "introLesson": true
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
        "keep": 19,
        "year": "2005",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~50s.\n\nAlex’s November 18 direction: retain the fuller traffic/road opening (v5 #8) and omit the simpler variant (#9). Traffic vamps until the presenter clicks. Then four clicks take the scene through theater planning, live VR theater, archviz and the XR-chitect intersection. Keep the original Alex sprite and domain colors. No timed transition forces the presenter to finish speaking.\n\nRecalled advice: Pick a lane. Master one craft. Richard Rosa, Syracuse University. Entry holds one road; step 1 adds the other lanes; step 2 starts traffic. Then four steps reveal the overlaps.",
        "motion": "lane-traffic"
      },
      {
        "id": "what",
        "use": "pmre/text-card",
        "props": {
          "kicker": "2006 · a theater company for architecture students",
          "title": "Warehouse Architecture Theatre",
          "photos": [
            {
              "src": "media/pmre/v5/what-show.jpg",
              "alt": "Warehouse Architecture Theatre cast raising glasses on stage"
            },
            {
              "src": "media/pmre/v5/what-rehearsal1.jpg",
              "alt": "WhAT rehearsal: an actor in a wig and dress reads at a desk scene"
            },
            {
              "src": "media/pmre/v5/what-rehearsal2.jpg",
              "alt": "WhAT rehearsal: two actors at a long table"
            },
            {
              "src": "media/pmre/v5/what-rehearsal3.jpg",
              "alt": "WhAT rehearsal: a director gestures to actors holding scripts"
            },
            {
              "src": "media/pmre/v5/what-rehearsal4.jpg",
              "alt": "WhAT cast and crew celebrating in a warehouse space"
            }
          ],
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
        "id": "craft",
        "use": "pmre/v6-gallery",
        "props": {
          "title": "Great ideas. Shaky craftsmanship.",
          "line": "An early study model. Plenty of glue.",
          "media": [
            {
              "src": "media/pmre/audit/equus-sketches.jpg",
              "alt": "Four pages of Alex’s sketchbook: set design studies for Equus, with a stage perspective, horse pens, a components list and a platform sketch"
            },
            {
              "src": "media/pmre/audit/craft-model-crop.jpg",
              "alt": "Alex’s cardboard study model with a glue bottle lying in front of it"
            }
          ],
          "cols": "1.6fr 1fr"
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
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nTwo problems that first year. One: no computers. Everything was hand drawn. Two, as if my insecurity wasn’t high enough: the craftsmanship. Great ideas, but my line work and study models were not clean. I was told to work on my craft.\n\nI was not a wunderkind. Worth saying: a lot of the wunderkinds I knew did not end up becoming architects, or became architects who did not seem happy about it. Good at it, not enjoying it.\n\nPhoto (supplied by Alex 2026-11-14): one of my cardboard study models. The camera stamp read 08/04/2004, before Syracuse, so it is probably Cornell summer program work (KB bio lists the program; confirm). The slide shows a crop without the stamp. Say “my study models”, not “my first-year model”.\n\nSlide year: 2005 (Alex, 2026-11-19: present it as 2005; the photo itself is 2004). Venn weights: 1 / 0 / 0.1.\n\nAlex, 2026-11-19: crop to the model and glue bottle, larger; no date on the slide (camera stamp removed); his Equus sketchbook pages on the left (the scan's “© 2008” line removed). Describe these as examples of my early study work, not a Syracuse first-year photograph."
      },
      {
        "id": "hand",
        "use": "pmre/the-hand",
        "props": {},
        "title": "Drafting by hand taught me to work with intention.",
        "keep": 30,
        "year": "2005",
        "venn": [
          1,
          0,
          0.1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAt Syracuse we were not allowed to touch a computer for the first year. At the time it was excruciating. It made me think deliberately about every line and every line weight. With Revit you make a wall, and the lines are a byproduct. Clarity can get lost.\n\nYear: 2005. Venn weights: 1 / 0 / 0.1.\n\n\nElizabeth review, November 11: The diagram contrasts a carefully drawn stair opening with a generated slab that blocks the stair. Ask the audience to spot the headroom problem. The point is that learning a tool also means learning to judge its output. The building/error is an original schematic, not a real failed project. Retain because this establishes the trained eye before the software workflow.\n\nTalkthrough 07:40: “It taught me how to do things with intention, deliberately.”\nSubstep: generated plans, sections, elevations and schedules stack on the right. Left = slow and deliberate; right = very fast, but not necessarily clean.\n⏱ ~35s.\n\nIllustrative BIM drawing sheets, not scans of Alex’s student work. After making a model, plans, sections, elevations and schedules become byproducts. You still need the eye to review the output. This prepared me for AI: a few crucial decisions, lots of output, then checking emails, photographs, marketing copy and 3D models. The diagram deliberately contains a stair headroom clash.",
        "motion": "the-hand"
      },
      {
        "id": "early-model",
        "title": "From drawings to places",
        "use": "pmre/v6-gallery",
        "year": "2005–2010",
        "tags": [
          "20",
          "30",
          "full",
          "20t"
        ],
        "props": {
          "title": "From drawings to places",
          "line": "I wanted to build spaces you could explore.",
          "media": [
            {
              "src": "media/pmre/audit/infobox-study.mp4",
              "poster": "media/pmre/audit/infobox-study.jpg",
              "label": "infoBox · a digital building study"
            },
            {
              "src": "media/pmre/audit/greenbox-model.jpg",
              "label": "Greenbox · a restaurant in a container"
            }
          ]
        },
        "notes": "⏱ ~20s. Early experiments with digital and physical models. This infoBox is a study of Schneider + Schumacher’s Berlin building (1995), not a building Alex designed. Alex’s original student animation assembles the model. Greenbox is Alex’s 2009 shipping-container restaurant project. The original portfolio also linked interactive executables; none are run here.\nRecovered from Alex’s original public portfolio: http://alexcoulombe.com/architecture/portfolio/infobox.htm and greenbox.htm. infoBox embedded video https://www.youtube.com/watch?v=-JAI83fIYWY; source 00:20–01:10, sped up 2.5x, muted. Greenbox interior model photograph: http://alexcoulombe.com/architecture/portfolio/images/greenbox_interior.jpg. Period is the student chapter; no unverified exact infoBox production year claimed."
      },
      {
        "id": "drawing-judgment",
        "hidden": true,
        "title": "Your eye is the bottleneck",
        "year": "2007",
        "venn": [
          1,
          0.3,
          1
        ],
        "keep": 19,
        "use": "pmre/drawing-review",
        "props": {
          "review": true
        },
        "notes": "⏱ ~35s.\n\nIllustrative BIM drawing sheets, not scans of Alex’s student work. After making a model, plans, sections, elevations and schedules become byproducts. You still need the eye to review the output. This prepared me for AI: a few crucial decisions, lots of output, then checking emails, photographs, marketing copy and 3D models. The diagram deliberately contains a stair headroom clash."
      },
      {
        "id": "overlaps",
        "use": "pmre/venn-grow",
        "props": {
          "feeds": [
            "a play’s structure → a building’s structure",
            "restaurant project → dinner theater",
            "park project → modular amphitheater"
          ],
          "caption": "Each interest made the others stronger"
        },
        "title": "overlaps",
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
        "id": "thesis",
        "title": "Of course my thesis was an immersive theater you attend via submarine.",
        "year": "2009",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 30,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "Of course my thesis was an immersive theater you attend via submarine.",
          "line": "",
          "media": [
            {
              "src": "media/v3-fix1/thesis-atrium.jpg",
              "label": "Immersive theater"
            },
            {
              "src": "media/v3-fix1/thesis-model.jpg",
              "label": "The model"
            },
            {
              "src": "media/pmre/v5/thesis-superjury.jpg",
              "label": "Webcam AR in the presentation"
            }
          ],
          "steps": false,
          "layout": "row",
          "arCallout": true
        },
        "notes": "⏱ ~55s.\n\nAlex’s thesis combined a script, immersive theater, physical model and webcam AR. Use the original superjury photo without the enlarged, contrast-enhanced inset. Presenter-supplied photos; no new date inferred from the camera stamp."
      },
      {
        "id": "graduation",
        "title": "The job I’ll have in five years doesn’t exist yet",
        "use": "pmre/text-card",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "quote": "The job I’ll have in five years <b>doesn’t exist yet</b>",
          "centered": true
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
        "id": "overlap-yours",
        "title": "Now find yours",
        "use": "pmre/overlap-yours",
        "props": {},
        "keep": 99,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~40s. NEW concept slide (Claude, Nov 19 overnight). Two clicks.\n\nStart: my three circles, architecture, theater, technology. The overlap became an XR studio. That professor told me to pick one; the overlap turned out to be the job.\n\nClick 1: my Venn shrinks into the corner. Yours grows. Photography is your circle. Spatial media is the one I'm offering you tonight. The third circle is YOURS: it cycles through niches from this room (aviation, Lake Martin, performance, architecture: the people on the previous slide). Ask: what's your third circle?\n\nClick 2: the center lights up: your lane. Anyone can be hired to shoot a listing; only you sit in your overlap. That's the part an app or a bundled Zillow shoot can't commoditize.\n\nNiche labels are editorial summaries reused from the sourced Great niches slide; no new claims.\nFinal audit: hidden, retained. Moves the audience exercise to the close, after the practical examples.",
        "hidden": true
      },
      {
        "id": "weird",
        "use": "pmre/text-card",
        "props": {
          "kicker": "",
          "quote": "When you’re the weird person with weird overlaps in interests, <b>people remember you</b>.",
          "attr": ""
        },
        "title": "When you’re the weird person with weird overlaps in interests, people remember you.",
        "keep": 30,
        "year": "2008",
        "venn": [
          0.8,
          1,
          0.4
        ],
        "storyRole": "content",
        "notes": "⏱ ~25s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nOpportunities come from having a weird reputation. When you’re the weird person doing a weird combination of things, you stick in people’s heads. They remember you. It happened with Equus, and it happens again in 2012 with Connie Caldwell.\n\nYear: 2008. Venn weights: 0.8 / 1 / 0.4.\n\n\nNot “follow your dream.” The niche came from deliberate practice: years of focused, effortful work on things just past my ability, with feedback. That does not guarantee a niche. What it does is put you in alignment (Oliver Ward’s word at PMRE yesterday) so that when a lucky opportunity shows up, you are ready to take it. Luck plus preparation, not a dream."
      },
      {
        "id": "ring-2010",
        "use": "pmre/ring-chapter",
        "props": {
          "from": 2009,
          "year": 2010,
          "kicker": "GRADUATION",
          "label": "2010",
          "sub": "Out of school, into the\npost-2008 recession\narchitecture economy.",
          "sfx": "advance",
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
        "title": "GRADUATION",
        "keep": 19,
        "year": "2010",
        "venn": [
          1,
          0.5,
          0.6
        ],
        "storyRole": "content",
        "hideTracker": true,
        "notes": "⏱ ~10s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-14 dictation.\n\nGraduation, 2010.\n\nYear: 2010. Venn weights: 1 / 0.5 / 0.6.\n\nTalkthrough 16:15–16:22: “Out of school, coming out.” / “We’re not into a recession. Coming out of the 2008 recession, not a lot of architecture jobs.”"
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
          "brightness": 1,
          "alt": "Sightlines, before VR",
          "overlay": {
            "src": "media/pmre/v8/fda-sightlines.webp",
            "alt": "Theater sightline study"
          }
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
        "id": "sightline-views",
        "title": "Testing the view in a flat medium",
        "use": "pmre/v6-gallery",
        "keep": 99,
        "year": "2012",
        "venn": [
          1,
          1,
          0.1
        ],
        "storyRole": "content",
        "props": {
          "title": "Testing the view in a flat medium",
          "layout": "grid",
          "media": [
            {
              "src": "media/pmre/v8/sightline-02-left.webp",
              "alt": "Theater sightline study, position B, first view"
            },
            {
              "src": "media/pmre/v8/sightline-02-right.webp",
              "alt": "Theater sightline study, position B, second view"
            },
            {
              "src": "media/pmre/v8/sightline-03-left.webp",
              "alt": "Theater sightline study, position C, first view"
            },
            {
              "src": "media/pmre/v8/sightline-03-right.webp",
              "alt": "Theater sightline study, position C, second view"
            }
          ]
        },
        "notes": "Presenter-supplied 02.jpg and 03.jpg: two views from each sheet, arranged as a 2×2 grid. Margins and source sheet text omitted to emphasize the sightlines."
      },
      {
        "id": "dk1",
        "title": "Enter: Oculus Rift DK1",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Enter: Oculus Rift DK1",
          "entrance": "spin",
          "sfx": "achievement",
          "src": "media/pmre/fda-dk1-office-demo.jpg",
          "credit": "",
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
        "id": "early-vr",
        "year": "2013",
        "title": "Oculus Rift DK1 · Xiqu Centre",
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
          "title": "Oculus Rift DK1 · Xiqu Centre",
          "src": "media/v3-fix1/fda-early-vr.mp4",
          "credit": "",
          "brightness": 1,
          "alt": "At eye level",
          "posterTime": 5
        },
        "notes": "⏱ ~45s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s8. Early FDA work: plans and renders could not answer whether a seat felt good. VR made that experience discussable. Source recording is a later demonstration of the early workflow; do not call it a dated2013 recording."
      },
      {
        "id": "xiqu",
        "year": "2014",
        "title": "Xiqu Centre",
        "use": "pmre/xiqu-comparison",
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
          "brightness": 1,
          "alt": "Xiqu Centre",
          "stereo": "media/pmre/v8/xiqu-stereo.webp"
        },
        "notes": "⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s9. Architectural render of Xiqu Centre. Source notes describe testing railing height and the swoop of a wall at human scale. Paraphrase the recorded Venelin Kokalov response; do not invent a new quotation. The source places this work in the 2013–2015 FDA era; no exact contract date is asserted.\n\nFull-cut delivery space: Walk through one seating decision: identify the audience viewpoint, the obstruction and what a client can test at eye level. Contrast that with explaining the same question from a plan. Invite the audience to think of a view their own client cannot yet picture. Do not assert a quantified result.\n\nBing Thom Architects saw the benefit too. Michael Heeney, Principal at Bing Thom, describes the benefit as such: \"We understood the space in an entirely new way. It was one thing to be rotating around a 3D model. It was entirely something else to see the project at exactly the scale the audience would perceive it after construction.\""
      },
      {
        "id": "not-turnkey",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "An extension of the workflow",
          "src": "media/v3-fix1/workflow.jpg",
          "credit": "",
          "brightness": 1,
          "alt": "An extension of the workflow",
          "flat": true
        },
        "title": "An extension of the workflow",
        "keep": 99,
        "year": "2014",
        "venn": [
          0.8,
          0.4,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~65s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nIn 2013 there was no elegant turnkey way to do what I expected. I went home at night and learned JavaScript and C# on Codecademy, learned Unity, learned model optimization. Architecture school taught me modeling, not optimization. It was exactly the kind of challenge I loved going home to.\n\nYear: 2013. Venn weights: 0.8 / 0.4 / 1.\n\n\nDesigning Naturally s18–20: begin with existing drawings, modeling, texturing and lighting; add optimization and an interactive engine, then deliver human-scale experience. The s20 diagram incorporates the progression of s18 and s19. Keep the technical sequence in notes, not extra dense on-slide text. This is a later diagram explaining the 2013 learning story.\n\nV6 direction (Alex, November 18): A robust 3D model can also yield plans, images, 360s, tours and a headset experience. This is an extension of the workflow you already sell. Remove the dark overlay so the workflow remains readable."
      },
      {
        "id": "macbeth-comparison",
        "title": "Macbeth · virtual to built",
        "year": "2014",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "Macbeth · virtual to built",
          "line": "",
          "media": [
            {
              "src": "media/pmre/fda-macbeth-armory-unity.png",
              "label": "Virtual study"
            },
            {
              "src": "media/pmre/fda-macbeth-armory-vr-demo.jpg",
              "label": "The production"
            }
          ],
          "steps": true,
          "layout": "row"
        },
        "notes": "⏱ ~50s.\n\n⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nEarly Macbeth work at the Park Avenue Armory. Could everyone see? Now I could stand in a theater before it existed, at a human eye height. Source: KB Macbeth overview dates this previs work to 2014.\n\nYear: 2014. Venn weights: 1 / 1 / 1.\n\n\nProperty-media connection — presenter interpretation: That same eye-level question matters in a home: can I see the garden from the kitchen, and what is the view from the sofa? Media makers already know how to tell that story with a lens.\nFirst show the virtual study; next click reveals the production side by side. Preserve original project credits: Fisher Dachs Associates / Kenneth Branagh’s Macbeth at Park Avenue Armory."
      },
      {
        "id": "extensions",
        "title": "One skill, new kinds of work",
        "year": "2014–2015",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 30,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "One skill, new kinds of work",
          "line": "",
          "media": [
            {
              "src": "slides/pmre/hxr-shed/media/shed/Shed_Video.mp4",
              "label": "The Shed at Hudson Yards"
            },
            {
              "src": "media/pmre/fda-ed-sullivan-vr-capture.mp4",
              "label": "The Late Show · Ed Sullivan Theater"
            }
          ],
          "steps": false,
          "layout": "row"
        },
        "notes": "⏱ ~45s.\n\nTwo extensions of the same expertise, as requested in the talkthrough. The Shed: Alex Coulombe / Fisher Dachs Associates. The Late Show: Bravo Media / Fisher Dachs Associates. Do not imply Agile Lens was the original client-facing practice for these early FDA projects."
      },
      {
        "id": "niche-expands",
        "title": "A narrow niche can open wide doors",
        "year": "2015",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/text-card",
        "props": {
          "title": "A narrow niche can open wide&nbsp;doors",
          "lines": [
            "Get good at a particular combination.",
            "Let people imagine where else it could go."
          ],
          "quote": "",
          "attr": "",
          "kicker": ""
        },
        "notes": "⏱ ~30s.\n\nPresenter’s lesson. The drone photographer’s identity in the audio is uncertain; omit the name rather than attribute it to Bobby.\n\nChoosing the work you want: “recovering people pleaser” — Jen Lueck, yesterday. Jen’s exact wording in Alex’s original Apple Note: recovering people pleaser. Attribution expanded to Jen Lueck by Alex’s v8 answer. This is a self-description; do not add a fabricated sentence, motive or personal story. Use it as a brief bridge to choosing the work and clients that fit. Source: canonical KB projects/pmre2026/2026-11-18-alex-notes-raw.md; yesterday wording expressly authorized by Alex."
      },
      {
        "id": "wisconsin-detail",
        "title": "I added too much detail",
        "use": "pmre/story-media",
        "keep": 19,
        "year": "2013–2015",
        "venn": [
          1,
          0.8,
          1
        ],
        "props": {
          "title": "I added too much detail",
          "src": "media/pmre/v8/wisconsin-theater.jpg",
          "credit": "",
          "alt": "Wisconsin School of Music theater model",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~35s.\n\nAlex’s November 19 direction: Wisconsin School of Music, where I added too much detail. Use his supplied experiencing-a-theater image. Modeling for rendering did not automatically make an optimized VR experience."
      },
      {
        "id": "napkin-scale",
        "year": "2017",
        "title": "A sketch, at full scale",
        "use": "pmre/v6-gallery",
        "keep": 99,
        "venn": [
          1,
          0.7,
          1
        ],
        "storyRole": "content",
        "props": {
          "title": "A sketch, at full scale",
          "media": [
            {
              "src": "media/v3-fix1/napkin.jpg",
              "label": "The sketch"
            },
            {
              "src": "media/v3-fix1/sketching.mp4",
              "label": "Sketching in VR"
            },
            {
              "src": "media/v3-fix1/sketch-at-scale.mp4",
              "label": "At human scale"
            }
          ]
        },
        "notes": "⏱ ~48s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s15+s44 grouped as one beat. First the sketchbook, then Alex sketching in VR, then the sketch as a3D environment at scale. Move from dollhouse scale into the space. This is a demonstration of design intent, not finished construction documentation. Original s44 nTransit work credits Paloma Rodriguez. The source is the 2017-era design demonstration; an exact recording date is not asserted."
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
          "brightness": 1,
          "alt": "Rice / designing at human scale",
          "posterTime": 8,
          "mediaFooter": true
        },
        "notes": "⏱ ~48s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nSource: Designing Naturally s28. Alex dates the beginning of this Rice work to2015. The selected video segment visibly says late2015, OculusDK2; this matches the supplied date. The separate static poster in the original deck says late2016 and is not used. The source clip opens on Wisconsin School of Music before changing to Rice. This derivative contains only the verified Rice40-second segment from4–44seconds, not the unrelated opening. Allan Greenberg Architect, theater design Fisher Dachs Associates. Compare design options rather than claiming the finished opera hall opened in2015. The selected media establishes late-2015 design exploration; no wider engagement start is asserted."
      },
      {
        "id": "blueprint",
        "title": "Blueprint Immersive",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Blueprint Immersive",
          "src": "media/pmre/v7/bpi-latest-trailer-v2.mp4",
          "credit": "",
          "alt": "Blueprint Immersive, latest BPI trailer V2 supplied by Alex",
          "poster": "media/pmre/v7/bpi-latest-trailer-poster.jpg",
          "posterTime": 8,
          "mode": "content",
          "brightness": 1,
          "takeaway": "Make your expertise repeatable"
        },
        "notes": "⏱ ~35s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThis product takes the one-off bespoke theater VR workflow I built for Fisher Dachs and lets them do it themselves. Disseminating expertise can mean teaching, software, a platform, or a talk.\n\nYear: 2025–2026. Venn weights: 1 / 1 / 1.\n\n\nFor your business — presenter proposal: This is a theatre tool, not a property-marketing product claim. The transferable lesson: package what you know into a repeatable buyer experience. Build a template for the questions every buyer asks: what can I see, how does it connect, where would my furniture go?\n\nV6 direction (Alex, November 18): Deliberate flash-forward: Blueprint Immersive 2023–2026. Place beside the Rice white model to connect repeatable seat and design-option tools. Do not imply this product existed in 2015.\n\nV7: replaced the 49.566667s seat-demo derivative with Alex’s Latest BPI Trailer V2.mp4 (48.833333s). Different SHA-256 and duration; H.264 web derivative, no audio, silent autoplay/loop. Source comparison and derivative hashes are in v7 evidence.\nCreative/source credit retained in notes: Product demo: Agile Lens",
        "year": "2023–2026",
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
        "title": "A COMPANY",
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
        "title": "We should do it together",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "mode": "content",
          "title": "We should do it together",
          "src": "media/pmre/v8/agile-lens-wide-white.png",
          "credit": "",
          "brightness": 1,
          "alt": "Agile Lens Immersive Design",
          "flat": true,
          "brand": true
        },
        "notes": "⏱ ~100s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nThen Josh said that if I really wanted to start a VR company, we should do it together. That was the surprise. We founded Agile Lens later in 2016. Ten years now. Show people how passionate you are, including what you do off-hours because you love it. That is how they come to believe in you.\n\nYear: 2016. Venn weights: 0.7 / 0.8 / 1.\n\n\nMerged delivery context:\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nEarly 2016: Josh pulled me in and said he felt I was thinking of leaving to start a VR company. My reaction was, What? No! I will work here till I die. Then he said I was not much of a business manager, not organized, with creative wildfire but not much direction. I thought he was trying to convince me not to leave. These are paraphrased delivery prompts from the walk, not a verbatim historical transcript.\n\nYear: 2016. Venn weights: 0.5 / 0.7 / 1.\n\n\nTell the early-2016 Josh office story first, then the invitation to become partners and the later-2016 founding. The logo is company identity, not a photo of that conversation.",
        "year": "2016",
        "venn": [
          0.7,
          0.8,
          1
        ]
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
      },
      {
        "id": "film-language",
        "use": "pmre/film-language",
        "props": {},
        "title": "VR is still a new medium",
        "keep": 99,
        "year": "2016",
        "venn": [
          0.2,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nOne camera films an action. Then cuts connect angles and time: the next day. Montage makes relationships. A close-up feels different from a wide. Tilting the camera can make us uneasy. That language developed over time. VR is still young. Dated milestones, not first-invention claims: Lumière 1895 (ACMI); Porter 1903 (MoMA/LOC); Pig Alley 1912 (MoMA); Intolerance 1916 (BFI); expressionist geometry 1920s (Deutsche Kinemathek); Eisenstein 1925 (MoMA). No first use of a Dutch tilt is asserted.\n\nYear: 2026. Venn weights: 0.2 / 1 / 1.\nHistorical milestones: https://www.acmi.net.au/works/91927--lumiere-programme-silent-version/\nhttps://www.moma.org/collection/works/304708\nhttps://www.moma.org/collection/works/306011\nhttps://www.bfi.org.uk/lists/10-great-silent-epics\nhttps://www.deutsche-kinemathek.de/en/visit/exhibitions/be-caligari-virtual-cabinet\nhttps://www.moma.org/collection/works/305815\n\nShort-cut story context:\nAt SIGGRAPH 2025 I co-authored and presented “Seeing Yourself on Stage: Multi-Avatar Performance and the Evolution of Self-Monitoring in VR” in Spatial Storytelling (August 14, Vancouver). In 2026 I returned for “Stage Presence: Design and Testing of a Virtual Rehearsal Room Toolset” and the “Virtual Theatre: Producing Live Theatre on Virtual Stages” panel. At FMX 2026 I curated its first Spatial Storytelling track and presented with David Gochfeld. The final FMX program title was “Ghosts of Performances Past: Five Years of A Christmas Carol VR,” May 7, 2026. The appearances page retains an earlier working title. Work toward a second FMX edition in 2027 is planning, not a completed second curatorship.\nSources: https://s2025.conference-schedule.org/presenter/?uid=645453 ; https://blog.siggraph.org/2024/11/siggraph-2025-innovation-and-community-meet-in-the-heart-of-vancouver.html/ ; https://doi.org/10.1145/3721244.3742445 ; https://alexcoulombepresents.com/appearances ; https://fmx.de/en/news/latest-news/news-23-04-2026 ; https://fmx.de/en/program/program-2026/detail/event/35067 ; KB intelligence/emails/2026-08-25-fmx-2027-spatial-storytelling.md. Visual is an Unreal NYC discussion, not a SIGGRAPH/FMX photograph.\n\nElizabeth review, November 11: At baseline hash #75 this is film grammar, not the legacy career timeline. Simplified to an undated schematic sequence of framing/cuts/close-up/time/angle/montage, avoiding implied first-invention chronology. The historical source links above are background only. The retained per-slide career years were cross-checked against presenter-career-facts.md: Syracuse2005–2010, Viñoly2010, ZGF2010–2012, FDA2012–2017, Agile Lens public2016, instructor2020, teaching2020–2022 including Princeton2021, RSC2024–2025, SIGGRAPH2025/2026 and FMX2026. Yu-Jun Yeh hiring year remains omitted. No legacy career-timeline module is used in any cut.\n\nV6 direction (Alex, November 18): Replace stick figures with filled human pictograms. Finish with a seated audience watching cuts in a theater, and The Balcony question. This is a schematic, not footage or a reconstruction of a specific production.",
        "motion": "film-language"
      },
      {
        "id": "statue-vr",
        "year": "2016",
        "title": "Statue of Liberty Museum",
        "use": "pmre/v6-gallery",
        "keep": 99,
        "venn": [
          1,
          0.4,
          1
        ],
        "storyRole": "content",
        "props": {
          "title": "Statue of Liberty Museum",
          "line": "Bring VR in while the design can still change.",
          "steps": true,
          "media": [
            {
              "src": "slides/pmre/hxr-statue-free-work/media/pivot/00_StatueOfLiberty.jpg",
              "label": "Before it was built"
            },
            {
              "src": "media/pmre/audit/statue-museum-built.jpg",
              "label": "The completed museum"
            }
          ]
        },
        "notes": "⏱ ~55s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nHarvardXR #10 source. Per Alex’s supplied brief, we did this basically for free and it became an important portfolio item. FXCollaborative were sad to experience it in VR only after the design decisions were settled. Bring VR into the process while it can still change decisions. This is the unbuilt render, not a completed-building photo. Work happened before the2019 opening; the shown year range is a source-deck era, not a contract date.\nFinal audit: reveal the completed museum on click. Public project photograph from FXCollaborative https://www.fxcollaborative.com/projects/175/the-statue-of-liberty-museum/ (photo 3, downloaded 2026-11-19). Source page does not name an individual photographer; no attribution invented. The render and photograph are different viewpoints, not a registered before/after."
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
        "title": "The right people saw the work",
        "year": "2017",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "The right people saw the work",
          "line": "",
          "media": [
            {
              "src": "media/pmre/v8/au-queue.jpg",
              "alt": "The line waiting for Alex’s talk at Autodesk University"
            },
            {
              "src": "media/v3/au-panel.jpeg",
              "alt": "Alex on the Autodesk University expert panel"
            }
          ],
          "steps": false,
          "layout": "row"
        },
        "notes": "⏱ ~70s.\n\n⏱ ~110s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBusiness development took off when I stopped cold calling and started speaking. Jeff Mottle invited me to Autodesk University after a YouTube video with few views. It did not need to go viral. It needed to reach the right person. Separate channels are fine if that helps you put work out there. Name corrected against official Autodesk panel credits.\n\nYear: 2017. Venn weights: 0.4 / 0.6 / 1.\nSource: https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017\n\nA low-view YouTube video reached Jeff Mottle, leading to a speaking invitation. This picture shows the resulting Autodesk expert panel, not a screenshot of the video. Speaking made the work visible to potential collaborators. Source: presenter recollection and official Autodesk 2017 panel https://www.autodesk.com/autodesk-university/class/vision-future-Virtual-Reality-Design-Viz-Advice-Experts-2017 . The separate Vegas crowd selfie is removed; it obscures this cause-and-effect story.\n\nVegas callback (Alex, 2026-11-14): this is the Vegas moment from the opening. Autodesk University 2017, Las Vegas, about ten years ago. What happened in Vegas did not stay in Vegas.\n"
      },
      {
        "id": "speaking-unlock",
        "title": "Speaking opened the doors",
        "use": "pmre/v6-gallery",
        "keep": 19,
        "year": "2017–2026",
        "venn": [
          1,
          1,
          1
        ],
        "props": {
          "title": "Speaking opened the doors",
          "line": "I toured the country pitching architects. Sharing the work changed the conversation.",
          "media": [
            {
              "src": "media/pmre/v8/speaking-italy.jpg",
              "alt": "Alex speaking in Italy"
            },
            {
              "src": "media/pmre/v8/speaking-unreal.jpg",
              "position": "50% 15%",
              "alt": "Alex speaking at Unreal"
            },
            {
              "src": "media/pmre/v8/speaking-ial.jpg",
              "alt": "Alex speaking to an audience"
            },
            {
              "src": "media/pmre/v8/speaking-stage.jpg",
              "alt": "Alex presenting onstage"
            }
          ],
          "layout": "grid",
          "steps": false
        },
        "notes": "⏱ ~40s.\n\nAlex’s account, November 19: trying to sell services to architects all over the country was not working. Speaking was a huge unlock. These are the four photos he supplied in speaking/. No provenance captions or invented event identities."
      },
      {
        "id": "speaking-and-rates",
        "title": "Being known for the work",
        "use": "pmre/conference-voices",
        "props": {},
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s.\n\nAlex’s v8 direction: connect touring the country selling services to becoming a regular speaker who commands higher rates. This progression is his account, not a measured attribution of revenue to a talk. The three conference quotations and speaker identities are supplied by Alex: Vince Collura, Reed, Alex Aaron. Vince’s phrase was popularized by Steve Martin and Cal Newport; preserve this context in speaker notes without changing Alex’s requested conference attribution. Reed asks “How do you deal with the race to the bottom?” Alex Aaron answers “Raising my prices.” Yesterday is the presenter’s authorized relative day wording, not a web-verified schedule."
      },
      {
        "id": "waldorf",
        "title": "Waldorf Astoria Miami",
        "year": "2025",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/story-media",
        "props": {
          "title": "Waldorf Astoria Miami",
          "src": "slides/pmre/hxr-waldorf-astoria/media/waldorf-astoria-miami/concierge-loop.mp4",
          "poster": "slides/pmre/hxr-waldorf-astoria/media/waldorf-astoria-miami/02.jpg",
          "alt": "Live virtual concierge in the Waldorf Astoria Miami lobby",
          "mode": "content",
          "flat": true,
          "brightness": 1.1111111111
        },
        "notes": "⏱ ~50s.\n\nRoot deck #45 media, without pixel cycling. Alex’s talkthrough: someone saw his VR theater presentation at SIGGRAPH in Vancouver and imagined a live-host architectural tour for Waldorf Astoria Miami. Present as his recollection; do not infer a specific SIGGRAPH year from “a few years ago.”"
      },
      {
        "id": "expectations",
        "title": "The best brief stretches your reputation",
        "year": "2025",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 30,
        "use": "pmre/text-card",
        "props": {
          "title": "The best brief<br>stretches your reputation",
          "layout": "brief",
          "lines": [
            "They see what you do.",
            "They imagine something you have not done yet.",
            "Then they ask you to make it real."
          ],
          "quote": "",
          "attr": "",
          "kicker": ""
        },
        "notes": "⏱ ~30s.\n\nPresenter’s observation in talkthrough 37:45–38:24, after Waldorf. No invented quotation or client outcome."
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
        "title": "Brockman Hall for Opera · virtual and built",
        "year": "2021–2022",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 30,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "Brockman Hall for Opera · virtual and built",
          "line": "",
          "media": [
            {
              "src": "media/v3-fix1/brockman-virtual.mp4",
              "label": "Virtual / construction"
            },
            {
              "src": "media/v3-fix4/brockman-brandon-martin.jpg",
              "label": "Built"
            }
          ],
          "steps": true,
          "layout": "row"
        },
        "notes": "⏱ ~45s.\n\n⏱ ~40s.\n\nDelivery prompts from Alex’s supplied decks and November 8 direction.\n\nVirtual Architecture RTC2021 s46, actual built hall photograph supplied in that deck. Alex’s contemporaneous notes say the building opened during the pandemic and imagine virtual performances if digital rights were licensed. Frame that as an idea from2021, not an existing agreement or NFT product. Rice dates the public opening and first in-person public performances to April2022; distinguish that from the pandemic construction/access recollection. https://news.rice.edu/news/2022/it-feels-walking-versailles-rices-new-opera-hall-officially-opens-mozarts-legendary-don . Photographer is uncredited in the supplied source. The 2021 deck shows this view; no public opening in 2021 is claimed.\n\nElizabeth review, November 11: Replaced unresolved RTC photograph with Rice’s inline Martin46 photograph, captioned “Photo by Brandon Martin” on https://news.rice.edu/news/2022/story-brockman-hall-operas-one-kind-space. Venue: Lucian and Nancy Morrison Theater, Brockman Hall for Opera, Rice University / Shepherd School of Music. Tracker 2022 is the Rice publication/public-opening context, not an inferred capture date. The image filename encodes July 2020, which is not claimed as a verified photographic date. Architecture: Allan Greenberg Architect LLC; theater design: Fisher Dachs Associates; acoustics: Threshold Acoustics. Correct firm spelling verified by Rice https://music.rice.edu/news/built-brilliance-brockman-hall-opera .\n\nFull-cut delivery space: Compare the built room with the preceding virtual view. Identify what can be recognized and what a photograph still cannot communicate about being inside. Explain that the 2022 public opening is distinct from the earlier design/construction work.\nClick to compare beside virtual/construction. Built photograph: Brandon Martin / Rice University Shepherd School; design Allan Greenberg Architect, theater design Fisher Dachs Associates. Video loops silently."
      },
      {
        "id": "geffen",
        "title": "David Geffen Hall",
        "year": "2022",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "David Geffen Hall",
          "line": "A physical railing. A virtual balcony. A decision you can feel.",
          "media": [
            {
              "src": "slides/pmre/hxr-david-geffen-hall/media/dgh/DavidGeffenHall01.jpg",
              "label": "Try different railing heights"
            },
            {
              "src": "slides/pmre/hxr-david-geffen-hall/media/dgh/DavidGeffenHall02.jpg",
              "label": ""
            },
            {
              "src": "slides/pmre/hxr-david-geffen-hall/media/dgh/DavidGeffenHall03.jpeg",
              "label": "The completed hall"
            }
          ],
          "steps": false,
          "layout": "row",
          "railCallout": true,
          "equalHeights": true
        },
        "notes": "⏱ ~50s.\n\n⏱ ~65s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAnother chance to bring theater expertise into a real architectural decision at eye level. Image and project credits: Agile Lens / Fisher Dachs Associates.\n\nYear: 2022. Venn weights: 1 / 1 / 1.\n\n\nFull-cut delivery space: Use the on-site headset photograph to distinguish a design model, the actual room and a human judging the relationship. Describe the need to communicate across architecture, theater and technology, without claiming an undocumented measured benefit.\nRoot #46 restored as simultaneous media. Talkthrough: physical railing with swappable heights. Discuss testing comfort and vertigo with physical stagecraft. No invented measurements."
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
          "year": 2022,
          "kicker": "REAL ESTATE",
          "label": "2022",
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
        "title": "REAL ESTATE",
        "keep": 19,
        "year": "2022",
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
        "use": "pmre/email-arrivals",
        "props": {
          "title": "A reputation becomes a brief"
        },
        "title": "Getting the brief",
        "keep": 30,
        "year": "2022",
        "venn": [
          0.7,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~65s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nFour Seasons came through word of mouth. Original Unreal Fest 2023 slide and notes name Shane Scranton, Paul Debevec, Kim Baumann Larsen, Jeff Mottle, Vikas Reddy and Jeff Powers. Several contacts converged on an introduction to Jonathan Coon. Do not turn them into a made-up relay chain or say the slide lists 17 people. Original recording 9:10–9:43. Correspondence includes an October 2022 message.\n\nYear: 2023. Venn weights: 0.7 / 1 / 1.\nSource: https://www.youtube.com/watch?v=6la2yieiCG0&t=550s\n\nV6 direction (Alex, November 18): Use 2022 for the approach, consistent with October 2022 correspondence; the retained image comes from the later Unreal Fest 2023 presentation. No on-slide event date mislabel. $2 billion was the project-scale brief, not our fee.\nFinal audit: each email is spotlighted on its own click; earlier messages dock. Fifth click restores the full original collage."
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
        "title": "A holodeck",
        "use": "pmre/story-media",
        "keep": 99,
        "storyRole": "content",
        "props": {
          "title": "A holodeck",
          "src": "media/pmre/fs-v2/lake-06.jpg",
          "credit": "",
          "alt": "Visitors share a room-scale VR tour in the Four Seasons Lake Austin Holodeck",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~67s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nBuyers walk the future home together. A guide and physical stagecraft make this a shared visit.\n\nYear: 2023. Venn weights: 1 / 1 / 1.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.\n\nFull-cut delivery space: Describe the visitor journey: briefing, headset, shared walk and sitting in a real seat at the end. Explain the guide’s role and why other people in the room change the visit. Ask which part of a property story needs more than a camera.\n\nAlex talkthrough 45:18–45:40: introduce the Holodeck room photo here, between the DBOX rendering and the Unreal tour. Call it A holodeck; do not pair this introductory image with the $870M construction-loan headline.\nCreative/source credit retained in notes: Four Seasons Lake Austin · photo: Agile Lens",
        "year": "2023",
        "venn": [
          1,
          1,
          1
        ]
      },
      {
        "id": "fs-walkthrough",
        "title": "Market the property before it exists",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Market the property before it exists",
          "src": "media/pmre/v6/four-seasons-unreal-tour.mp4",
          "alt": "Actual in-headset VR tour of Four Seasons Lake Austin",
          "credit": "",
          "mode": "content",
          "brightness": 1,
          "takeaway": ""
        },
        "notes": "⏱ ~90s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nActual in-headset tour. We end in a theater, which feels fitting. Rendering: DBOX for Austin Capital Partners. PureBlink: project visualization collaborator; Agile Lens: interactive experience.\n\nYear: 2023. Venn weights: 1 / 1 / 1.\n\n\nFor your business — presenter proposal: For an off-plan sale, a photograph cannot show the finished home. Partner with the architect and visualization team to create a guided, human-scale sales visit. Your job is still choosing the views and helping someone imagine living there. Project context is evidence of use, not proof of a sales lift caused by VR.\n\nV6 direction (Alex, November 18): Play the Unreal portion of the complete Aspen film from 30 seconds onward, no Aspen setup yet, silently looping. DBOX and Pureblink remain credited in these notes as visualization collaborators; this is the Agile Lens interactive experience, not a static DBOX rendering.\nCreative/source credit retained in notes: Agile Lens · interactive experience",
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
          "credit": "",
          "alt": "The floor becomes the set",
          "mode": "content",
          "brightness": 1
        },
        "notes": "⏱ ~115s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nKevin Laibson story. Jonathan wished there were a way to remember where the furniture belonged so it could go back in exactly the same place. Theater already has that: spike tape. I hire a lot of theater people. They bring things like this. The photograph shows the room setup, not a claimed close-up of theatrical spike tape.\n\nYear: 2023. Venn weights: 0.8 / 1 / 0.8.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.\nCreative/source credit retained in notes: Four Seasons Lake Austin · photo: Agile Lens",
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
          "credit": "",
          "alt": "$500M+ in presales",
          "mode": "content",
          "brightness": 1,
          "takeaway": "Sell the visit as well as the image"
        },
        "notes": "⏱ ~35s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nPresenter-approved project context. Do not turn the figure into a measured causal return on VR.\n\nYear: 2023–2026. Venn weights: 1 / 0.5 / 1.\n\n\nElizabeth review, November 11: Project: Four Seasons Private Residences Lake Austin. Client/partners: Four Seasons, Impossible Ventures, DBOX, Pureblink. DBOX supplied source renderings; Pureblink built visualization levels; Agile Lens optimized and assembled the interactive experience and installed/operated the Holodeck. This image is a real-room photograph from Agile Lens, not a DBOX render. Source: https://agilelens.com/portfolio/four-seasons-lake-austin. No individual photographer is named by the source, so none is invented.\n\nFull-cut delivery space: Separate the evidence of buyer adoption from causality. The presales figure is project context; ask what additional evidence would be needed to attribute sales to VR alone. Return to the customer’s ability to judge an unbuilt home.\n\nFor your business — presenter proposal: I would offer an ongoing showroom service: keep views current, train the sales team, and produce the flat media that gets buyers into the experience. The presales figure is sourced project context, not a measured return on VR.\nCreative/source credit retained in notes: Four Seasons Lake Austin · photo: Agile Lens",
        "year": "2023–2026",
        "venn": [
          1,
          0.5,
          1
        ]
      },
      {
        "id": "fs-stats",
        "title": "Four Seasons · project figures",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/fs-stats",
        "props": {},
        "notes": "⏱ ~65s.\n\nRoot deck #53 stands alone: $500M+ presales and $870M construction loan are different project measures. June 2026 TYKO announcement verifies the construction loan. Never add them together or claim VR alone caused either result. These are public project figures, not Agile Lens fees.\n\nV8 screenshot: Emily Olman / AR Insider, June 10, 2026 (updated August 3). https://arinsider.co/2026/06/10/lake-austin-luxury-how-a-developer-presold-500m-in-real-estate-with-vr/ . Actual article-header screenshot captured with headless Google Chrome and cropped to site-header hero, preserving masthead, headline and byline. The article headline is the publisher’s wording; it does not establish a causal measurement. Screenshot credit is visible on this same Four Seasons figures slide.\n\nThe investors came through the experience and understood the project. It all comes back to theater: the shared tour ends in real seats. Presenter previously called this investment; the public June 2, 2026 TYKO announcement specifies a construction loan. Do not add it to presales or imply VR caused financing."
      },
      {
        "id": "holodeck-travels",
        "title": "The holodeck travels",
        "year": "2023–2026",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/fs-travels",
        "props": {},
        "notes": "⏱ ~65s.\n\nRoot #60 America map style. The Aspen setup timelapse loops on the left throughout. One presenter build starts the ten-second map tour: Austin, Aspen, New York, then California. The dotted route travels between stops; each photo grows into a spotlight, holds, then settles beside its pin before the next leg. Backward stepping resets the tour; returning from the next slide restores all four thumbnails. California summer 2026; New York 57th Street investor demonstration January 2026. DBOX is another New York location, not a separate city. Miami is current as of November 9 but no verified photograph is supplied here."
      },
      {
        "id": "sponsor-pipeline",
        "title": "The first three steps are in this room",
        "use": "pmre/sponsor-pipeline",
        "props": {},
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "notes": "⏱ ~25s.\n\n[DWELL] CAPTURE → EDIT → DELIVER → STEP INSIDE. Everything I am about to show you starts as a file from one of these. You already make the first three. I take the same files one step further. Their output is my input: a proposed workflow, not a partnership or a promise of one-click import. Zillow and realtor.com are listing ecosystems, not PMRE sponsors. Bubo² and Nucleus4D are room exhibitors. XGRIDS is Alex’s actual working relationship, separate from this sponsor wall. Vendor sources and limitations live in talk/sponsors.js and assets/pmre-sponsors/verification.json. November 19 local audit: display current Nucleus, iGuide and Realsee names; current official logos keep their original colors and aspect ratios. Bubo² is splat processing, not camera hardware. Editing/delivery categories overlap. No individual person is named on this slide. One manual arrow fades the exact earlier workflow.jpg diagram back in under Agile Lens; backward navigation hides it again."
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
          "brightness": 1,
          "takeaway": "Let buyers feel the floor plan",
          "inputs": [
            "cubicasa",
            "iguide"
          ],
          "inputLabel": "Plan reference",
          "outputLabel": "Walkable Floor Tour: Agile Lens"
        },
        "notes": "[FLASH] Plan reference: CubiCasa / iGUIDE → walkable Floor Tour: Agile Lens. Workflow proposal; neither vendor is credited as the actual source of the demonstration plan. No direct importer claimed.\n\nSponsor nod (keep it light, one sentence): you may already make the plan this starts from. CubiCasa (floor plans from a five-minute phone scan) and iGuide (floor plans and 3D tours) are PMRE 2026 sponsors. Source: pmreconference.com/sponsors and each sponsor’s own site, checked 2026-11-17.\n\n⏱ ~26s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nAnother repeatable tool: walk an architectural plan at human scale. Product demonstration, not a current price or availability claim.\n\nYear: 2025–2026. Venn weights: 1 / 0.3 / 1.\n\n\nFor your business — presenter proposal: A floor plan is obvious to an architect and unfamiliar to many buyers. I would sell a guided plan walkthrough beside the photographs, especially before a home is built. This clip demonstrates Floor Tour; it does not establish a price, availability or measured conversion rate.\n\nClip: FloorTour_1Min (55 s, supplied by Alex 2026-11-14): plan in the headset, mixed-reality pass-through, then the rendered interior. Video only (the deck plays clips muted); re-encoded 1080p H.264.",
        "year": "2025–2026",
        "venn": [
          1,
          0.3,
          1
        ]
      },
      {
        "id": "walkthrough-demo",
        "title": "Walkthrough",
        "use": "pmre/story-media",
        "keep": 30,
        "storyRole": "content",
        "props": {
          "title": "Walkthrough",
          "src": "media/story/walkthrough-fern-cottage.mp4",
          "credit": "",
          "alt": "A dollhouse plan opens into a furnished cottage interior",
          "mode": "content",
          "brightness": 1,
          "takeaway": "Finished sample app vs. open system"
        },
        "notes": "⏱ ~30s.\n\nAlex’s framing (2026-11-15): Walkthrough is a finished, vibe-coded sample app; Floor Tour is the more open and deliberate system.\n\nWalkthrough: a PICO prototype from Agile Lens’s November 2026 vibe-lab sprint, written in Kotlin largely by AI coding agents. Drop a floor plan on your real floor, look at it as a dollhouse, then raise its walls around you at full size in mixed reality. It ships with a few sample houses (this clip is Fern Cottage).\n\nContrast to land: an AI-built app can look done in days, but it only does what it was built to do. Floor Tour is built on our shared-spatial-anchor template: multi-user and co-located, with tools to draw walls over your own floor plan. Both are useful; know which one you are buying.\n\nClip: “Walkthrough - Fern Cottage floor plan to interior” (10.6 s, non-headset capture from the Nov 6–7 filming selects, 960×540), upscaled to 1080p with Lanczos, video only. Not a store release; no price or availability claim.\nCreative/source credit retained in notes: Prototype: Agile Lens",
        "year": "2026",
        "venn": [
          1,
          0.3,
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
        "title": "Perfect Day Mexico",
        "year": "2025–2026",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 30,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "Perfect Day Mexico",
          "line": "",
          "media": [
            {
              "src": "media/pmre/fs-v2/mexico-02.jpg",
              "label": "Human-scale experience"
            },
            {
              "src": "media/pmre/fs-v2/mexico-01.jpg",
              "label": "The larger proposal"
            }
          ],
          "steps": false,
          "layout": "row"
        },
        "notes": "⏱ ~35s.\n\n⏱ ~100s.\n\nPerfect Day Mexico was commissioned in 2025. Our six-person standalone VR balloon ride previewed Royal Caribbean’s future destination, using a physical hot-air-balloon installation aboard the 2025 President’s Cruise. Distinguish this 2025 commission/demo from the resort’s later opening. Compare the flyby to being there at human scale. The immersive preview is the result I can describe; it is not evidence that the visualization caused a planning decision.\nSources: presenter confirmation November 9, 2026; KB projects/perfect-day-mexico/overview.md (completed 2025, updated for 2026); https://agilelens.com/portfolio/perfect-day-mexico .\nRoot #49 media restored. Commission/demo in 2025, updated for 2026; not an opened resort. Keep human scale and the ability to communicate an unbuilt destination as the lesson."
      },
      {
        "id": "project-family",
        "title": "The same expertise opens new doors",
        "year": "2024–2026",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "The same expertise opens new doors",
          "line": "Royal Caribbean · Halcyon · RSC · U.S. Cotton",
          "media": [
            {
              "src": "slides/pmre/hxr-royal-caribbean/media/royal-caribbean/rc_01.jpg",
              "label": "Royal Caribbean"
            },
            {
              "src": "slides/pmre/hxr-community/media/community/community06_halcyon_collage.jpg",
              "label": "Halcyon"
            },
            {
              "src": "media/v3/rsc.jpg",
              "label": "Royal Shakespeare Company"
            },
            {
              "src": "media/pmre/v8/cotton-muted.mp4",
              "poster": "media/pmre/v7/cotton-placeholder.png",
              "label": "U.S. Cotton"
            }
          ],
          "steps": false,
          "layout": "grid"
        },
        "notes": "⏱ ~45s.\n\nHalcyon root #79 shares the slide with Royal Caribbean. RSC is rehearsal-tool research, not a production credit. U.S. Cotton: Alex supplied cotton-muted.mp4 on November 18; original H.264 video copied without re-encoding, no audio, silent autoplay and loop. The supplied cotton.png still remains the poster. Joby work remains undisclosed; do not show actual client material.\n\nUnreal NYC, speaker note only: suggested as a natural fit; now among the first people people think of for enterprise virtual experiences in NYC. Alex’s anecdote: someone new to the city wanted to “come say hi and kiss the ring”.\n\nFurther speaker recollection: The Orchard Off-Broadway and Mikhail Baryshnikov. Omit unverified dates."
      },
      {
        "id": "attendee-niches",
        "title": "Great niches in this room",
        "use": "pmre/attendee-niches",
        "props": {},
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~90s. Ten quick, one-click spotlights, then the whole room. These combinations are editorial summaries, not quoted biographies. Dave → Navjeet → Tom → Krisse & Rich → Devon → Via → Perica → Emily → Matt → Brandon. Sources and omitted claims: media/pmre/v8/niche-audit-sources.json. Via’s company is unverified and intentionally omitted. No six-figure production-cost, production-time, drone-first-history or product-priority claims. Brandon closes: you are standing in his overlap.\nFinal narrative audit: moved the audience niche sequence after the major projects, before the future-media chapter. This follows Alex’s current origin → projects → audience niche → next-tier/future → DIY/pricing → hire/QR order. The earlier typed placement was a suggestion, not a requirement to interrupt the 2005–2010 story.\n\nFraming: these people did not stumble into niches by following a dream. Each built real craft first, then stayed aligned (Oliver Ward’s word) when the opening came."
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
        "title": "NOW",
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
        "id": "rome",
        "title": "Walk around the Colosseum",
        "use": "pmre/story-media",
        "keep": 19,
        "storyRole": "content",
        "props": {
          "title": "Walk around the Colosseum",
          "src": "slides/pmre/rome-splats/media/rome-colosseum-flythrough-15s-1080p.mp4",
          "credit": "Josette Seitz / Agile Lens · Web-rendered scan",
          "alt": "Colosseum: a photoreal 3D capture you can walk through",
          "mode": "content",
          "brightness": 1,
          "takeaway": "Splats: photoreal 3D captures you can walk through"
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
          "takeaway": "Let the buyer choose where to look",
          "brightness": 1
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
        "id": "glasses-objections",
        "title": "Now we’re there.",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ],
        "keep": 19,
        "use": "pmre/glasses-objections",
        "props": {},
        "notes": "⏱ ~45s.\n\nFor years, people told me: “VR is cool, but it makes me sick, messes up my hair, messes up my makeup, and makes me look like a doofus in front of friends and colleagues. Come back when it’s like putting on a pair of glasses.”\n\nHold on the objections. Then click once: “Now we’re there.” Lead into glasses-form devices like XREAL AURA, then the photos of people trying my demos this week, and the hardware comparison. This is Alex’s recurring personal story, supplied November 19, 2026, not a quotation attributed to a named attendee.\n\nThe punchline refers to the glasses form factor. It does not promise that every wearer avoids motion sickness or that every app, comfort concern, hairstyle or makeup concern is solved. Choose and test the actual experience. The official AURA product image and hardware sources are retained from the adjacent comparison: https://www.xreal.com/aura ; media/pmre/v7/product-image-sources.json."
      },
      {
        "id": "helmet-to-glasses",
        "title": "From helmet to sunglasses",
        "use": "pmre/helmet-to-glasses",
        "props": {},
        "keep": 99,
        "year": "2026",
        "venn": [
          0.3,
          0.6,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~30s. NEW concept slide (Claude, Nov 19 overnight). Three clicks; sits right after “Now we’re there.”\n\nStart: the developer-kit era. 2012, the Rift DK1 I showed you earlier: a box strapped to your face. That's the thing that messed up your hair and made you look like a doofus.\n\nClick 1: standalone headsets. No cable, no computer.\n\nClick 2: lighter headsets.\n\nClick 3: glasses. Same head, same idea: putting on a pair of glasses.\n\nPoint: the objection was never the idea, it was the form factor. That's changing, and your buyers will be wearing these. Silhouettes are generic and illustrative, not specific products; pass the real devices around instead.\nFinal audit: hidden, retained. Duplicates the real product/glasses reveal and postpones the joyful montage.",
        "hidden": true
      },
      {
        "id": "demo-montage",
        "title": "Demo montage",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ],
        "keep": 19,
        "use": "pmre/demo-montage",
        "props": {},
        "notes": "⏱ ~50s.\n\nOpen on IMG_9350 alone with its original sound, untrimmed (20.48 seconds). On clip end, Urban Chomp Funk fades in over an energetic 28-photo collage, including visually selected silent stills from the other attendee videos. After 17 seconds the collage settles into eight favorite memories on a scrapbook page. Music fades out after the page settles.\n\nArrow one skips to the collage, arrow two settles the scrapbook. Automatic transitions keep the arrow position in sync. Re-entering restarts the opening clip. If direct-link autoplay is blocked, the first arrow or click starts the opening with sound; it does not skip it. Subsequent arrows may skip phases. Static, reduced motion and print views show the final scrapbook silently.\n\nAlex supplied every photo/video and Urban Chomp Funk. All source images reviewed, HEIC orientation applied to pixels. Five weaker or out-of-scope sources omitted as listed in slides/pmre/demo-montage/media-manifest.json. Attendee names, exact device models and individual photo authors are not asserted. This replaces the v8d demo-montage module in the same slot after glasses-objections and before headset-comparison."
      },
      {
        "id": "headset-comparison",
        "title": "Pick the experience, then the hardware",
        "year": "2026",
        "venn": [
          1,
          0.3,
          1
        ],
        "keep": 19,
        "use": "pmre/headset-comparison",
        "props": {},
        "notes": "⏱ ~60s.\n\nPublic specs verified November 18, 2026. USD base launch prices: Vision Pro M5 $3,499 (256GB); Quest 3 $499.99 (128GB, original 2023 launch, not current 512GB retail); XREAL AURA $1,099 limited-time launch offer through end 2026 (12GB/256GB), regular announced base $1,279.\n\nWeights: Vision Pro M5 750–800g includes Light Seal/cushion and Dual Knit Band; separate battery 353g. Quest 3 515g headset. AURA 95g glasses plus 265g compute puck. These are different wearing/compute designs, not equivalent payload measurements.\n\nCompute headroom ordering is an editorial, qualitative inference: 1 M5, 2 Reality Elite, 3 XR2 Gen 2. It is not a measured cross-device benchmark, battery/power-draw ranking, or promise an app works on every headset. Official specifications identify the chips; Qualcomm describes Reality Elite as the next generation beyond XR2+ Gen 2. Test the actual scene and target viewer.\n\nSources: https://www.apple.com/apple-vision-pro/specs/ ; https://www.apple.com/newsroom/2025/10/apple-vision-pro-upgraded-with-the-m5-chip-and-dual-knit-band/ ; https://www.meta.com/quest/quest-3/ ; https://about.fb.com/news/2023/09/meet-meta-quest-3-mixed-reality-headset/ ; https://www.xreal.com/aura ; https://us.shop.xreal.com/blogs/guides/xreal-aura-price-preorder-us ; https://www.qualcomm.com/news/releases/2026/06/qualcomm-takes-spatial-computing-into-the-ai-era-with-snapdragon .\n\nPICO Space Pro: generic, invented headset silhouette ONLY, not a product likeness. Name authorized by Alex for this slide. NDA: no specs, rank, image, price, weight or performance claim.\nFinal audit: lightest/middle/heaviest refers only to on-head weight. Separate batteries and compute pucks are printed below the weight. Compute ranks remain editorial qualitative ordering, not measured benchmarks.\nNovember 19 final audit recheck: Meta official store now lists Quest 3 512GB $599.99 (515g), superseding the old $499.99 128GB launch figure. https://www.meta.com/quest/quest-3/ and https://www.meta.com/quest/quest-3/buy-now/?sku=B0CD1JTBSC . AURA official Google product page https://store.google.com/magazine/xreal_aura?hl=en-US confirms $1099 limited offer and 95g; XREAL FAQ https://tutorials.xreal.com/docs/aura/troubleshooting/faq/ confirms 265g compute puck. Apple official specs https://support.apple.com/en-us/125436 confirm M5 750–800g plus353g battery; Apple launch announcement https://www.apple.com/newsroom/2025/10/apple-vision-pro-upgraded-with-the-m5-chip-and-dual-knit-band/ confirms $3499. No benchmark claim is made for qualitative compute ordering."
      },
      {
        "id": "future-brief",
        "title": "Your next shoot can become a place",
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/text-card",
        "props": {
          "title": "Your next shoot can become a place",
          "lines": [
            "3D models &amp; splats: revisit and choose new views",
            "VR tours: walk a property before traveling",
            "Mixed reality: test options on site",
            "Unbuilt property: photograph what could be"
          ],
          "quote": "",
          "attr": "",
          "kicker": "The next few years"
        },
        "notes": "⏱ ~55s.\n\nBrandon’s brief, verbatim: \"Our audience will love hearing your take on how AR and VR could change the way we live and do business over the next few years. If you can connect that to how they create media and market properties, you'll have them hooked. That's exactly why we wanted to bring you in.\"\n\nPresenter forecast, not a guarantee: these workflows can change remote visits, design conversations and pre-sales. Apply them to commercial and industrial space as well as homes. Tie each change to a deliverable this room already knows how to sell."
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
            "Phone + drone photos",
            "3D model / splat",
            "Walkthrough"
          ],
          "icons": [
            "capture",
            "splat",
            "walk"
          ],
          "src": "media/v3-fix6/mia-fountain.mp4",
          "credit": "Gaussian splat walkthrough: Alex Coulombe",
          "inputs": [
            "giraffe360",
            "nucleus",
            "bubo"
          ],
          "inputLabel": "Capture tools in this room",
          "outputLabel": "A visit at human scale"
        },
        "notes": "[FLASH] Capture tools in this room: Giraffe360 · Nucleus4D · Bubo². They did not produce this example scan. Compatible exports and viewer support must be checked per product; do not promise a one-click headset path. Sources: talk/sponsors.js.\n\n⏱ ~75s.\n\nPresenter forecast/proposal, November 2026.\n\nMy bet: the deliverable expands from a set of views to a place the buyer can explore. On a phone or drone shoot, plan overlapping coverage for reconstruction alongside the hero shots. Process the images, clean the scan, choose the start point, then publish a walkthrough and a short film. That is a capture-to-walkthrough service you can begin testing on a property you control. A drone covers the outside; a phone or handheld capture covers the inside. This is an additional capture plan, not a promise that every ordinary real-estate shoot will reconstruct well.\n\nThe Rome examples are PortalCam captures. The phone/drone route is a separate workflow. Polycam documents Gaussian splats from existing overlapping photos or video, including drone captures; this is a supported input route, not a promised turnaround or quality guarantee. Sources: https://learn.poly.cam/hc/en-us/articles/30549134403860-How-to-Create-Drone-3D-Models-in-Polycam ; https://learn.poly.cam/hc/en-us/articles/30549121659412-How-to-Create-Photogrammetry-and-Gaussian-splats-from-Existing-Images-and-Videos-on-Mobile-and-Web . Use overlap and coverage, inspect glass/mirrors/moving subjects, clean the result and test the actual viewer. Price the work, not an assumed one-click conversion.\n\nThe portrait movie is reused from the MIA deck: media/video/splat-walkthrough.mp4, credited there to Alex Coulombe. It shows a fountain scan viewed from a moving virtual camera, not a new Rome hotel capture and not a recording of a phone actively scanning. PMRE derivative uses 00:03–00:12, audio removed, height 1080. It illustrates the middle (reconstructed scene) stage; the phone/drone input route is described separately above.\n\nV8 RESOLVED: use the explicitly attributed Nucleus4D priority claim in the source notes, as supplied by Alex; do not state priority in the presenter’s own voice."
      },
      {
        "id": "nucleus-zillow",
        "hidden": true,
        "title": "Splats in the listing ecosystem",
        "use": "pmre/text-card",
        "props": {
          "title": "Splats in the listing ecosystem",
          "lines": [],
          "quote": "“first 3DGS platform approved to publish immersive experiences directly into Zillow's 3D tour ecosystem”",
          "attr": "— Nucleus4D · nucleus4d.com",
          "kicker": "Nucleus4D’s claim"
        },
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~25s.\n\nRESOLVED: Alex explicitly authorized this vendor-attributed wording for v8: first 3DGS platform approved to publish immersive experiences directly into Zillow's 3D tour ecosystem. Source: https://www.nucleus4d.com/ . Treat priority as the company’s claim, not an independently established industry first. Live homepage checked November 18 confirms tours publish into Zillow and realtor.com 3D tour ecosystems; its current rendered copy did not expose the exact first sentence supplied by Alex. Do not broaden this to arbitrary splat uploads to Zillow or confuse it with Zillow SkyTour. Vendor attribution is visible on the slide."
      },
      {
        "id": "view-before-visit",
        "use": "pmre/property-future",
        "title": "Explore a property before you visit",
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
          "title": "Explore a property before you visit",
          "labels": [
            "Tour on screen",
            "Walk together in VR",
            "Test furniture in AR"
          ],
          "parallel": true,
          "details": [
            "Explore the captured home",
            "Meet an agent at human scale",
            "See what fits in your room"
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
        "id": "photograph-unbuilt",
        "title": "Photograph an unbuilt space",
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/text-card",
        "props": {
          "title": "Photograph an unbuilt space",
          "lines": [
            "Your composition. Your lighting. Your story.",
            "A virtual camera becomes another service."
          ],
          "quote": "",
          "attr": "",
          "kicker": ""
        },
        "notes": "⏱ ~35s.\n\nPresenter proposal. The virtual-camera concept demo follows; it is schematic, not a promised product or captured client deliverable.\nFinal audit: hidden, retained. Its headline and message now lead the animated plan/model/photo demonstration.",
        "hidden": true
      },
      {
        "id": "unbuilt-shutter",
        "title": "Photograph a place that doesn’t exist yet",
        "use": "pmre/unbuilt-shutter",
        "props": {},
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          0.5,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~35s. NEW concept slide (Claude, Nov 19 overnight). Two clicks; the second fires a quiet shutter.\n\nStart: plan linework draws on. This is where every project you'll never get to shoot begins.\n\nClick 1: it tilts into 3D and the floors rise. Now it's a model. Developers already pay for this step.\n\nClick 2: shutter. It resolves into a photoreal aerial: Four Seasons Lake Austin, marketed before it was built (rendering by DBOX for Austin Capital Partners). In effect, a drone shot of a building that wasn't there yet.\n\nPoint: your eye for light, angle and lens doesn't need the building to exist. The next slide lets us choose the lens.\n\nLinework is schematic, drawn for this slide: not the project's drawings."
      },
      {
        "id": "camera-demo",
        "title": "A virtual set. Your point of view.",
        "year": "2026+",
        "venn": [
          1,
          0.6,
          1
        ],
        "keep": 30,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "A virtual set. Your point of view.",
          "line": "A Christmas Carol VR · the performance is a place you can film",
          "media": [
            {
              "src": "media/pmre/audit/carol-trailer-dance.mp4",
              "poster": "media/pmre/audit/carol-trailer-dance.jpg",
              "label": "Stand inside the story"
            },
            {
              "src": "media/pmre/audit/carol-replay-marley.mp4",
              "poster": "media/pmre/audit/carol-replay-marley.jpg",
              "label": "Choose another point of view"
            }
          ],
          "steps": true,
          "shutter": true
        },
        "notes": "⏱ ~30s. Christmas Carol replacement requested by Alex, using the MIA spatial deck’s existing show and replay media. Real live-performed virtual theater, not a property model. The transferable skill is composing a view inside a place. The preceding plan/model/photo example supplies the architectural application. First: stand inside the scene. Click: another point of view. These are existing show/replay recordings, not footage of the MIA prototype UI.\nSource: local mia-src/index.html carol-inside and media/video/carol-replay-marley.mp4; MIA 9ee2493. Exact #79 at e5876b3 is camera-demo; older note numbering called the Nucleus card #79. Nucleus remains covered by the niche sequence."
      },
      {
        "id": "ai",
        "hidden": true,
        "title": "A short AI palate cleanser",
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 30,
        "use": "pmre/text-card",
        "props": {
          "title": "A short AI palate cleanser",
          "lines": [
            "Generate options. Keep your judgment.",
            "Never market an invented feature as real."
          ],
          "quote": "",
          "attr": "",
          "kicker": ""
        },
        "notes": "⏱ ~35s.\n\nReplace the AI-generated building image with a plain card. AI can hallucinate architecture, dimensions, materials and views. Label a proposal and verify the actual property before using it as listing media. Do not let AI do the part of photography you love.",
        "opt": "ai:on"
      },
      {
        "id": "sharp",
        "title": "One photo. Nearby views.",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 30,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "One photo. Nearby views.",
          "line": "AI predicts what a small camera move could reveal. Verify before marketing.",
          "media": [
            {
              "src": "media/pmre/v6/sharp-overview.jpg",
              "label": "Source photo → predicted 3D"
            },
            {
              "src": "media/pmre/v6/sharp-courtyard.mp4",
              "label": "A small camera move · Apple ML SHARP"
            }
          ],
          "steps": false,
          "layout": "row",
          "inputs": [
            "autohdr",
            "fotello",
            "luxengine"
          ]
        },
        "notes": "Merged the generic AI palate-cleanser into this specific example: generate options, keep your judgment, never market an invented feature as real. Do not let AI do the part of photography you love.\n\n⏱ ~40s.\n\nOfficial Apple research example, https://apple-aiml-research.github.io/ml-sharp/ . SHARP predicts a 3D Gaussian representation from one photograph for nearby-viewpoint synthesis. This is not measured geometry or evidence of what is behind a wall. Use the local official example clip, silently looping; verify the property before marketing. Research code/model license terms apply to deployment; do not promise unrestricted commercial use.\n\n[FLASH] An edited listing photo—the kind AutoHDR, Fotello and LUXengine deliver—is the proposed input to this separate experiment. Apple supplied the actual example shown; no sponsor edited it. SHARP predicts nearby views, not a complete measured walkable property.",
        "opt": "ai:on"
      },
      {
        "id": "ai-hand",
        "use": "pmre/story-media",
        "props": {
          "mode": "content",
          "title": "Your eye still matters",
          "src": "media/v3-fix1/napkin.jpg",
          "credit": "",
          "alt": "Alex Coulombe’s hand-drawn room plan in a sketchbook",
          "brightness": 1
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
        "notes": "⏱ ~85s.\n\nDelivery prompts, paraphrased from Alex’s 2026-11-08 walk.\n\nRevisit the hand-trained eye. The tools can make more things, but I still have to decide what is worth making. Avoid claiming a specific unverified product demo.\n\nYear: 2026. Venn weights: 0.9 / 0.2 / 1.\n\nRestored November 11 at presenter request. This is Alex’s actual hand-drawn room plan from Designing Naturally s49, the same sketch introduced earlier in the sketch-to-VR sequence. Deliberate visual callback: judgment begins with seeing and choosing, regardless of the tool. It is not AI output or a 2026 project. Image provenance and original byte identity: media/v3-fix1/manifest.json.\nCreative/source credit retained in notes: Hand sketch: Alex Coulombe",
        "opt": "ai:on"
      },
      {
        "id": "package-shelf",
        "title": "The top shelf of what you already sell",
        "use": "pmre/package-shelf",
        "props": {},
        "keep": 19,
        "year": "2026",
        "venn": [
          1,
          0.4,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s. NEW concept slide (Claude, Nov 19 overnight). Four clicks; sits right before the package table.\n\nStart: photos, video, drone. What you sell today.\n\nClick 1: 3D tour and floor plan. Many of you already sell this.\n\nClick 2: splat walkthrough. Same shoot, a little more overlap coverage, and now it's a place.\n\nClick 3: a VR or MR visit. The splat or the plan, delivered at human scale in a headset.\n\nClick 4: premium Unreal at the top shelf. Unbuilt space, custom interaction, scoped project fee: that's where we collaborate.\n\nPoint: I'm not asking you to change careers. Each step reuses the capture below it. You're adding shelves, not replacing the store. Heights are illustrative, not measured value; the next slide puts example numbers on it.\nThe shelf is a menu of possible services, not a universal progression; choose what solves a client need."
      },
      {
        "id": "package-table",
        "title": "Your package has room to grow",
        "year": "2026+",
        "venn": [
          1,
          0.5,
          1
        ],
        "keep": 19,
        "use": "pmre/package-table",
        "props": {},
        "notes": "⏱ ~70s.\n\nIdea credit: Matt Michalski, PMRE 2026 day-1 package/product slides, supplied by Alex as two photographs in Downloads/PMRE Packages. This is our original design, with our own hypothetical add-on figures and scope, not a reproduction of his slides or confidential Aryeo data.\n\nFor this room: keep photos, video, aerials, plans and existing 3D tours. Add a splat tour, guided VR walkthrough, mixed reality on site, then a bespoke Unreal premium. The example add-on prices are teaching proposals, NOT market medians, vendor rates, Agile Lens quotes or guaranteed margins. Scope revisions, travel, hosting and device support separately. A reusable template can reduce marginal setup work; a client pays for a reliable visit and decision, not the number of clicks. Custom Unreal and MR alignment still take real production and QA.\n\nNucleus4D officially confirms Zillow/realtor.com 3D tour publication (https://www.nucleus4d.com/). V8 RESOLVED: Nucleus4D’s supplied priority wording is shown as a vendor claim, visibly attributed; independent priority is not asserted.\n\n[FLASH] Starting products are examples, not verified native imports. Plan reference: CubiCasa / iGUIDE. Capture category: Giraffe360 / Nucleus4D / Bubo². Sell through Aryeo / HDPhotoHub, publish a supported companion tour to Zillow; guided headset delivery and compatibility remain separate.\n\nClient education: the next step should feel familiar. Connect each new spatial deliverable to work the client already values: a photograph chooses a view, a tour connects views, and a guided VR visit lets them judge the place at human scale. Introduce 3D models & splats as an additional deliverable, then price the useful client outcome. This folds the former cognitive-ladder slide into the business section.\nProduction scope moved offscreen for readability: plan/tour = capture, check dimensions, publish; splat = coverage, cleanup, hosting; VR = template, scale and headset QA; MR = alignment, options and hosted session; Unreal = model, lighting, optimization, deployment. No guaranteed file conversion or platform compatibility."
      },
      {
        "id": "plan-to-presence",
        "title": "A floor plan is already a starting point",
        "year": "2026+",
        "venn": [
          1,
          0.3,
          1
        ],
        "keep": 19,
        "use": "pmre/plan-to-presence",
        "props": {},
        "notes": "⏱ ~45s.\n\nIdea credit: Matt Michalski’s day-1 PMRE slide on products becoming easier to make, supplied by Alex. This original diagram extends that idea to spatial delivery without repeating confidential adoption statistics or claiming a five-minute VR build.\n\nStart with a plan you already deliver. Confirm scale against a known dimension. Put it on the floor, trace walls, add a few useful viewpoints, then test a guided walk. Our Floor Tour demonstration shows a deliberate multi-user, co-located system; Walkthrough is the focused AI-built sample prototype shown earlier. Neither is promised as a free public download. The free starter-kit route uses A-Frame/WebXR or Unreal basics instead. Reuse the template; price setup, QA, hosting, device support and the client outcome. A bespoke home is still a bespoke job."
      },
      {
        "id": "brief-closer",
        "title": "Your next tier is a place",
        "use": "pmre/brief-closer",
        "props": {},
        "keep": 19,
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "storyRole": "content",
        "notes": "⏱ ~45s. NEW concept slide (Claude, Nov 19 overnight). Two clicks; the bridge into the DIY and hire-us beats.\n\nStart: Brandon’s brief to me, read it aloud. Full verbatim: \"Our audience will love hearing your take on how AR and VR could change the way we live and do business over the next few years. If you can connect that to how they create media and market properties, you'll have them hooked.\" The slide shows a trimmed version with an ellipsis.\n\nClick 1: my answer in three words. Live: you visit a home before you fly in, or before it's built. Do business: layouts, finishes and deals get decided inside the space, together, like the Four Seasons holodeck. Your media: every shoot can become a place buyers step inside.\n\nClick 2: so start building. And bring us the ambitious ones. Then: Jonathan Lee’s line, then DIY, then collaboration.\n\nThese are my forecasts, not guarantees."
      },
      {
        "id": "educate-client",
        "title": "“If no one is asking for it then you're not educating your client properly.”",
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/text-card",
        "props": {
          "title": "",
          "lines": [],
          "quote": "“If no one is asking for it then you're not educating your client properly.”",
          "attr": "— Jonathan Lee, Tuesday",
          "kicker": ""
        },
        "notes": "⏱ ~30s.\n\nExact quote and attribution supplied by Alex in this task. The earlier raw note used the typographic apostrophe and lowercase name; V8: conference quotations now appear visibly, with Alex’s exact attributions."
      },
      {
        "id": "career-recap",
        "use": "pmre/career-recap",
        "title": "Keep the whole mix",
        "keep": 19,
        "year": "2005–2026",
        "venn": [
          1,
          1,
          1
        ],
        "hideTracker": true,
        "props": {},
        "notes": "⏱ ~30s. Talkthrough 54:27–54:40 asked for the years and key lessons to return. 2005: work with intention. 2006: theater makes an experience for people. 2013: experiment with a new medium. 2026: combine those skills into something valuable for your clients. Your own overlap will be different."
      },
      {
        "id": "start-now",
        "title": "Start with a place you already know",
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/text-card",
        "props": {
          "title": "Start with a place you already know",
          "lines": [
            "Capture it. Review it. Deliver a useful tour.",
            "Try a small paid add-on. Learn from the client.",
            "Free second-brain starter kit via the final QR."
          ],
          "quote": "",
          "attr": "",
          "kicker": ""
        },
        "notes": "⏱ ~40s.\n\nThe resources page includes a real downloadable free guide and links to free Scaniverse / SuperSplat tools. Vendor subscriptions and hardware may cost money. The repo-hosted second-brain kit is a real Markdown/ZIP download; no signup required. Ask via alexcoulombepresents.com for training and updates. V8 moves the approved conference quotes onto slides. Other raw-note fragments remain unused. V8 moves the approved conference quotes onto slides. Other raw-note fragments remain unused."
      },
      {
        "id": "premium-proof",
        "title": "When the brief needs more",
        "year": "2026",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/v6-gallery",
        "props": {
          "title": "When the brief needs more",
          "line": "Photoreal Unreal at scale · physical stagecraft · live hosts",
          "media": [
            {
              "src": "media/pmre/fs-v2/intro-render.jpg",
              "label": "Four Seasons"
            },
            {
              "src": "slides/pmre/hxr-waldorf-astoria/media/waldorf-astoria-miami/02.jpg",
              "label": "Waldorf Astoria"
            },
            {
              "src": "slides/pmre/hxr-david-geffen-hall/media/dgh/DavidGeffenHall03.jpeg",
              "label": "David Geffen Hall"
            },
            {
              "src": "slides/pmre/hxr-community/media/community/community06_halcyon_collage.jpg",
              "label": "Halcyon"
            }
          ],
          "steps": false,
          "layout": "grid"
        },
        "notes": "⏱ ~50s.\n\nThe $2B “binary” project is the reason to collaborate on premium luxury work. Four Seasons, Waldorf, Geffen Hall, Halcyon and Royal Caribbean show different applications of the studio’s architectural, performance and real-time skills. They are not evidence that every client needs a bespoke VR app. Your capture, client knowledge and composition are part of the team."
      },
      {
        "id": "pixie-dust",
        "title": "Build a lot on your own.",
        "year": "2026+",
        "venn": [
          1,
          1,
          1
        ],
        "keep": 19,
        "use": "pmre/text-card",
        "props": {
          "title": "Build a lot on your own.",
          "lines": [
            "Then hire us to sprinkle our pixie dust on it.",
            "Your client. Your craft. A bigger team."
          ],
          "quote": "",
          "attr": "",
          "kicker": ""
        },
        "notes": "⏱ ~35s.\n\nAlex’s wording: \"You can build a lot of experiences on your own, then hire us when you need us to sprinkle our pixie dust on it.\" Collaboration, not competition. Bring us the high-touch, premium, unbuilt-property experiences that need photoreal Unreal, application building and stagecraft."
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
