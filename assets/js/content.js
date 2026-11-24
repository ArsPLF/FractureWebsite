/**
 * FRACTURE #37687 — CENTRAL CONTENT CONFIGURATION
 * ---------------------------------------------------------------------------
 * Everything the site knows about the team lives here. Update this file to
 * publish new members, robot specs, outreach programs, results, and sponsors.
 *
 * Placeholders that still need real team data are marked with:
 *   // TODO:
 *
 * Photography slots live in assets/images/. If an image path is empty or the
 * file is missing, the site renders a deliberate technical placeholder instead
 * of a broken image.
 */

window.TEAM_CONTENT = {
  identity: {
    teamName: "Fracture",
    teamNumber: "37687",
    program: "FIRST Tech Challenge",
    location: "Round Rock, Texas",
    region: "Central Texas",
    season: "2026–27",
    founded: "Season 01",
    tagline: "Student-led robotics built on precision, iteration, and nerve.",
    mission:
      "Fracture is a student-led FIRST Tech Challenge team in Round Rock, Texas. We design, build, and rebuild until every subsystem earns its place on the field.",

    // TODO: Replace the sample inbox before publishing the site.
    contactEmail: "fracture37687@gmail.com",
    sponsorshipEmail: "fracture37687@gmail.com",
    recruitmentEmail: "fracture37687@gmail.com",
    meetingSchedule: "Build schedule to be announced",
    workshopAddress: "Round Rock, Texas",

    logoPath: "assets/icons/team-mark.svg",

    // TODO: Add official profile URLs when the team accounts are live.
    // A blank url renders as a "pending" row instead of a broken link.
    socials: [
      { label: "Instagram", handle: "@fracture37687", url: "" },
      { label: "YouTube", handle: "@fracture37687", url: "" },
      { label: "GitHub", handle: "fracture37687", url: "" }
    ]
  },

  ticker: [
    "FRACTURE // 37687",
    "ROUND ROCK, TEXAS",
    "FIRST TECH CHALLENGE",
    "DESIGN / BUILD / BREAK / REPEAT",
    "SEASON 2026–27"
  ],

  home: {
    heroImage: "assets/images/robot/hero-chassis.jpg",
    heroImageAlt: "Fracture competition chassis in the workshop",
    heroCaption: "Reference build visual // team photography to be added",
    heroIntro:
      "Fracture is a student-led FIRST Tech Challenge team in Round Rock, Texas. Five builders. One machine. No shortcuts — just the next iteration.",
    keyStats: [
      { value: "37687", label: "TEAM NUMBER", note: "FTC // Fracture" },
      { value: "05", label: "FOUNDING ROSTER", note: "Students, not spectators" },
      { value: "FTC", label: "COMPETITION PROGRAM", note: "FIRST Tech Challenge" },
      { value: "2026–27", label: "ACTIVE SEASON", note: "Build cycle in progress" }
    ],
    principles: [
      {
        index: "01",
        title: "Precision over speed",
        body: "Measure twice. Cut once. Then test the thing until the data says it is ready. A fast wrong answer still costs a match."
      },
      {
        index: "02",
        title: "Document the process",
        body: "If it is not written down, it did not happen. CAD, wiring notes, and design decisions are part of the machine."
      },
      {
        index: "03",
        title: "Rebuild without ego",
        body: "The best idea wins — not the loudest voice. Every failure gets a postmortem, and every postmortem gets a next step."
      }
    ],
    robotPreviewSummary:
      "Project 37687 is the team's first competition platform. The brief: a drivetrain we trust, mechanisms we can service in the pit, and code we can explain line by line.",
    robotPreviewSpecs: [
      { label: "STATUS", value: "DESIGN PHASE" },
      { label: "DRIVETRAIN", value: "UNDER EVALUATION" },
      { label: "WEIGHT", value: "TO BE MEASURED" },
      { label: "AUTONOMOUS", value: "IN DEVELOPMENT" }
    ],
    rosterNote:
      "Small roster. Wide scope. Every member owns a system, a schedule, and a share of the pit work.",
    outreachTeaser:
      "The field is bigger than the match. Fracture is building workshops, demonstrations, and rookie support that make robotics easier to enter — and harder to leave.",
    sponsorTeaser:
      "Founding partner slots are open. Put your name on the machine, the pit, and the next generation of local engineers.",
    ghostWord: "BUILD"
  },

  about: {
    intro:
      "Fracture brings together five students across design, fabrication, programming, and operations. We are building the team and the machine at the same time.",
    groupImage: "assets/images/team/workshop-collab.jpg",
    groupImageAlt: "Team collaborating around a robot chassis in a workshop",
    groupCaption: "Reference workshop visual // team photography to be added",
    statement:
      "The robot is the excuse. The real work is learning to think clearly, build honestly, and finish something difficult as a team.",
    values: [
      {
        index: "01",
        title: "Precision",
        body: "Tolerances, cable routes, and commit messages all matter. We treat the details as the work, not the decoration."
      },
      {
        index: "02",
        title: "Transparency",
        body: "We publish what worked and what broke. A clean engineering notebook is more useful than a perfect story."
      },
      {
        index: "03",
        title: "Momentum",
        body: "Small, finished iterations beat grand plans that never leave CAD. We ship, measure, and go again."
      }
    ],
    roadmap: [
      {
        phase: "01",
        title: "Foundation",
        detail: "Assemble the roster, define ownership, and set the engineering standards for the season.",
        status: "ACTIVE"
      },
      {
        phase: "02",
        title: "Design",
        detail: "Game analysis, concept selection, CAD architecture, and the first prototype cycles.",
        status: "UPCOMING"
      },
      {
        phase: "03",
        title: "Build",
        detail: "Fabricate, assemble, wire, and tune the first complete competition platform.",
        status: "UPCOMING"
      },
      {
        phase: "04",
        title: "Compete",
        detail: "Qualifiers, pit iteration, match review, and a full season postmortem.",
        status: "UPCOMING"
      }
    ],
    members: [
      // Replace role and focus as assignments are confirmed. Empty values fall
      // back to "To be announced" in the roster cards.
      {
        name: "Abdurrehman S",
        initials: "AS",
        number: "01",
        role: "To be announced",
        focus: "Description to be announced"
      },
      {
        name: "Abrar N",
        initials: "AN",
        number: "02",
        role: "To be announced",
        focus: "Description to be announced"
      },
      {
        name: "Benjamin P",
        initials: "BP",
        number: "03",
        role: "To be announced",
        focus: "Description to be announced"
      },
      {
        name: "Antonio O",
        initials: "AO",
        number: "04",
        role: "To be announced",
        focus: "Description to be announced"
      },
      {
        name: "Firas S",
        initials: "FS",
        number: "05",
        role: "To be announced",
        focus: "Description to be announced"
      }
    ],
    memberNote:
      "Roster profiles are intentionally minimal while the team settles into its first season. Each card reserves a dedicated slot for a role title and a short description.",
    joinNote:
      "Fracture is looking for builders, coders, documentarians, and mentors. If you want to learn by making something real, start a conversation.",

    recognition: {
      title: "AWARDS & RANKINGS.",
      intro:
        "Verified results only. Awards and rankings are published here after they are earned and confirmed — never before.",
      emptyNote:
        "No awards or rankings have been recorded yet. The first verified entry will appear here after competition.",
      archiveNote: "Full match results and the season archive live on the results page.",
      // Add real entries when they are confirmed. Leave the arrays empty until then.
      // Award entry shape:
      //   { title: "Award name", event: "Event name", season: "2026–27", detail: "Optional note" }
      // Ranking entry shape:
      //   { rank: "1st", event: "Event name", season: "2026–27", detail: "Optional note" }
      awards: [],
      rankings: []
    }
  },

  robot: {
    name: "Project 37687",
    season: "2026–27",
    status: "DESIGN PHASE",
    heroImage: "assets/images/robot/hero-chassis.jpg",
    heroImageAlt: "Reference chassis build for Project 37687",
    heroCaption: "Reference chassis visual // team CAD and photography to be added",
    cadImage: "assets/images/robot/cad-assembly.jpg",
    cadImageAlt: "Reference CAD assembly render",
    overview:
      "The first Fracture competition platform is in development. The architecture is being selected against three priorities: serviceability in the pit, repeatable motion under match pressure, and a control stack the whole team can explain.",
    quickSpecs: [
      { label: "STATUS", value: "DESIGN", note: "Concept selection in progress" },
      { label: "DRIVETRAIN", value: "TBD", note: "Architecture under evaluation" },
      { label: "WEIGHT", value: "TBD", note: "Measured after assembly" },
      { label: "CONTROL", value: "FTC", note: "Control system + driver station" }
    ],
    specTable: [
      {
        parameter: "Chassis Frame",
        spec: "Pending",
        notes: "Material and stock thickness will be documented after the design review."
      },
      {
        parameter: "Drive Motors & Ratio",
        spec: "Pending",
        notes: "Motor selection and gear reduction under evaluation."
      },
      {
        parameter: "Odometry & Localization",
        spec: "Pending",
        notes: "Sensor package to be confirmed during the autonomous build."
      },
      {
        parameter: "Intake Mechanism",
        spec: "Pending",
        notes: "Game-piece handling concept in prototype phase."
      },
      {
        parameter: "Scoring / Endgame",
        spec: "Pending",
        notes: "Reach and cycle targets will be published with the first revision."
      },
      {
        parameter: "Software Stack",
        spec: "In development",
        notes: "FTC SDK, state-machine architecture, and telemetry standards."
      }
    ],
    subsystems: [
      {
        index: "01",
        name: "Drivetrain & Mobility",
        summary: "A chassis built for traction, service access, and predictable control.",
        description:
          "The drivetrain is the first system under review. Fracture is evaluating wheel topology, gear ratio, and frame stiffness against the game's cycle paths. Final CAD and measured performance will be posted here once the first revision is assembled.",
        status: "IN DESIGN",
        metrics: [
          { label: "Topology", value: "Under evaluation" },
          { label: "Free speed", value: "TBD" },
          { label: "Drive motors", value: "TBD" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/drivetrain-detail.jpg"
      },
      {
        index: "02",
        name: "Intake & Handling",
        summary: "A capture system designed for repeatable pickup from awkward angles.",
        description:
          "Intake geometry is being prototyped around reliable acquisition and jam recovery. Roller compliance, sensor choice, and actuation will be documented as the concept narrows. This section will hold the final mechanism breakdown and test footage stills.",
        status: "PROTOTYPE",
        metrics: [
          { label: "Capture width", value: "TBD" },
          { label: "Acquisition time", value: "TBD" },
          { label: "Detection", value: "TBD" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/intake-detail.jpg"
      },
      {
        index: "03",
        name: "Scoring & Endgame",
        summary: "Repeatable scoring with minimal backlash and a clear service path.",
        description:
          "The scoring architecture is tied directly to the season's game rules. Fracture is comparing reach, cycle time, and packaging tradeoffs before committing to fabrication. Final geometry, motors, and control presets will be published after the design review.",
        status: "IN DESIGN",
        metrics: [
          { label: "Reach", value: "TBD" },
          { label: "Cycle target", value: "TBD" },
          { label: "Actuation", value: "TBD" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/scoring-detail.jpg"
      },
      {
        index: "04",
        name: "Electronics & Power",
        summary: "A labeled, strain-relieved harness built for fast pit diagnosis.",
        description:
          "Power distribution and sensor routing are being planned before the frame is drilled. Every run will be labeled, every connector strain-relieved, and every subsystem isolated enough to swap under match pressure.",
        status: "SCHEMATIC",
        metrics: [
          { label: "System voltage", value: "12V nominal" },
          { label: "Sensor bus", value: "TBD" },
          { label: "Service access", value: "Top-access plan" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/electronics-detail.jpg"
      },
      {
        index: "05",
        name: "Software & Autonomous",
        summary: "A control stack that is deterministic, observable, and teachable.",
        description:
          "Fracture's software plan favors small, testable behaviors over one large autonomous routine. Odometry, vision, and scoring presets will be documented as they are validated, with telemetry logs kept alongside the code.",
        status: "IN DEVELOPMENT",
        metrics: [
          { label: "Language / SDK", value: "FTC SDK" },
          { label: "Auto routines", value: "TBD" },
          { label: "Vision pipeline", value: "TBD" }
        ],
        image: "",
        placeholderPath: "assets/images/robot/software-telemetry.jpg"
      }
    ],
    cadDetails: {
      software: "To be announced",
      revision: "REV 0.1 // IN PROGRESS",
      summary:
        "Every structural plate, bracket, and mechanism will be modeled before fabrication. The master assembly, bill of materials, and fabrication drawings will live here as the design matures.",
      deliverables: [
        "Parametric master assembly and bill of materials",
        "2D fabrication drawings and laser/DXF profiles",
        "Design review notes, weight budget, and revision history"
      ]
    }
  },

  outreach: {
    heroImage: "assets/images/outreach/stem-demo.jpg",
    heroImageAlt: "Students learning electronics at a community STEM workshop",
    heroCaption: "Reference outreach visual // team photography to be added",
    intro:
      "Fracture's outreach program is being built alongside the robot. The goal is simple: give local students a first hands-on win with engineering, then a reason to keep going.",
    impactStats: [
      { value: "—", label: "WORKSHOPS HOSTED", note: "First event to be announced" },
      { value: "—", label: "STUDENTS REACHED", note: "Impact log starts with Season 01" },
      { value: "—", label: "TEAMS MENTORED", note: "Rookie support in planning" },
      { value: "—", label: "VOLUNTEER HOURS", note: "Tracked from the first event" }
    ],
    programs: [
      {
        category: "Demonstrations",
        title: "Community STEM Nights",
        date: "TO BE ANNOUNCED",
        location: "Round Rock, TX",
        status: "PLANNED",
        summary:
          "Live robot demonstrations, driver-station walkthroughs, and open Q&A for families and local students. Every demo ends with a chance to touch the hardware and ask how it works."
      },
      {
        category: "Mentorship",
        title: "Rookie Team Support",
        date: "TO BE ANNOUNCED",
        location: "Central Texas",
        status: "PLANNED",
        summary:
          "Hands-on help for younger robotics teams: build reviews, wiring checks, code troubleshooting, and an honest conversation about what judges look for."
      },
      {
        category: "Workshops",
        title: "Build Lab Sessions",
        date: "TO BE ANNOUNCED",
        location: "Round Rock, TX",
        status: "PLANNED",
        summary:
          "Small-format workshops on CAD, fabrication, and control basics. Designed for students who have never held a caliper or opened a CAD file."
      },
      {
        category: "Community",
        title: "School & Library Visits",
        date: "TO BE ANNOUNCED",
        location: "Round Rock, TX",
        status: "PLANNED",
        summary:
          "Short, energetic sessions that bring a working robot into classrooms and libraries. The objective is exposure, not recruitment: show students that engineering is something people like them do."
      }
    ],
    ctaTitle: "Bring Fracture to your school or event.",
    ctaCopy:
      "We coordinate robot demonstrations, beginner STEM sessions, and mentorship visits for local schools, libraries, and youth organizations. Reach out with a date and an audience.",
    ctaLabel: "START A CONVERSATION"
  },

  achievements: {
    intro:
      "Fracture is in its first competition cycle. This archive will hold every match result, ranking, award, and season note — published as they happen, not after the fact.",
    summaryStats: [
      { value: "00", label: "EVENTS COMPETED", note: "Season 01 has not started" },
      { value: "00", label: "JUDGED AWARDS", note: "First award entry pending" },
      { value: "—", label: "PEAK RANK", note: "No match data logged" },
      { value: "—", label: "WIN RATE", note: "No match data logged" }
    ],
    seasons: [
      {
        season: "2026–27",
        robotName: "Project 37687",
        status: "ACTIVE SEASON",
        events: []
      }
    ],
    archiveNote:
      "No competition records have been logged yet. The first qualifier, match record, and award history will appear in this archive as the season begins.",
    objectives: [
      {
        index: "01",
        title: "Engineering Portfolio",
        body: "Document the design process, test data, and team structure to a standard we are proud to defend in the judges' room."
      },
      {
        index: "02",
        title: "A Robot That Repeats",
        body: "Build a platform that can run the same clean cycle under pressure — not a highlight-reel machine that works once."
      },
      {
        index: "03",
        title: "A Real Outreach Log",
        body: "Host events, mentor rookies, and record the impact with actual attendance and hours instead of vague claims."
      }
    ]
  },

  sponsors: {
    intro:
      "Fracture is seeking founding partners who want to invest in student engineering in Round Rock. Every contribution — funding, materials, machining, or mentorship — goes directly into the build and the outreach program.",
    partnerNote:
      "The founding partner wall is open. Logos and recognition tiers will be published here as commitments are confirmed.",
    openSlots: 4,
    tiers: [
      {
        name: "Founding Partner",
        investment: "Lead commitment",
        featured: true,
        benefits: [
          "Primary logo placement on the competition robot and pit banner",
          "Featured placement on the website and season engineering packet",
          "Lab tour, robot demonstration, and an annual impact report",
          "First right of renewal for the following season"
        ]
      },
      {
        name: "Engineering Partner",
        investment: "Project-level support",
        benefits: [
          "Logo placement on robot panels, team apparel, and pit signage",
          "Sponsor listing on the website and in season communications",
          "Invitation to scrimmages and the end-of-season review",
          "Direct support for a named subsystem or tooling purchase"
        ]
      },
      {
        name: "Community Partner",
        investment: "Outreach support",
        benefits: [
          "Recognition on the sponsor directory and outreach materials",
          "End-of-season engineering and outreach summary",
          "Direct support for workshop kits and community events",
          "A clear line from your contribution to local STEM access"
        ]
      }
    ],
    fundingAllocation: [
      {
        priority: "01",
        category: "Robot Hardware & Fabrication",
        detail: "Raw stock, fasteners, motors, sensors, electronics, and fabrication consumables."
      },
      {
        priority: "02",
        category: "Competition Registration & Travel",
        detail: "Season registration, event entry, pit safety gear, and team transport."
      },
      {
        priority: "03",
        category: "Outreach Kits & Workshops",
        detail: "Electronics kits, demo supplies, and curriculum materials provided at low or no cost."
      },
      {
        priority: "04",
        category: "Tooling & Safety",
        detail: "Metrology, machine maintenance, eye protection, and battery test equipment."
      }
    ]
  },

  contact: {
    intro:
      "Reach Fracture about student membership, sponsorship, community workshops, or competition collaboration. We answer every serious inquiry.",
    formNote:
      "This static site opens a pre-addressed draft in your email client. Connect a form backend such as Formspree later if you want in-page delivery.",
    channels: [
      {
        title: "General Inquiries",
        email: "fracture37687@gmail.com",
        description:
          "Questions about the team, the build schedule, competition plans, or anything that does not fit another channel."
      },
      {
        title: "Sponsorship & Grants",
        email: "fracture37687@gmail.com",
        description:
          "Founding partnerships, in-kind materials, machining support, and sponsorship packet requests."
      },
      {
        title: "Recruitment & Mentors",
        email: "fracture37687@gmail.com",
        description:
          "Prospective student members, parent questions, and engineers or educators interested in mentoring."
      }
    ]
  }
};
