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
    tagline: "FTC Team 37687 · Round Rock, Texas",
    mission:
      "Fracture is a student-led FIRST Tech Challenge team in Round Rock, Texas. We design, build, program, and compete with robots.",

    // TODO: Replace the sample inbox before publishing the site.
    contactEmail: "fracture37687@gmail.com",
    sponsorshipEmail: "fracture37687@gmail.com",
    recruitmentEmail: "fracture37687@gmail.com",
    meetingSchedule: "Build schedule to be announced",
    workshopAddress: "Round Rock, Texas",

    logoPath: "assets/icons/fracture-logo.png",

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
    "SEASON 2026–27"
  ],

  home: {
    heroIntro:
      "Fracture is a student-led FIRST Tech Challenge team in Round Rock, Texas.",
    keyStats: [
      { value: "37687", label: "TEAM NUMBER", note: "FTC" },
      { value: "05", label: "FOUNDING ROSTER", note: "Students" },
      { value: "FTC", label: "COMPETITION PROGRAM", note: "FIRST Tech Challenge" },
      { value: "2026–27", label: "ACTIVE SEASON", note: "Current season" }
    ],
    principles: [
      {
        index: "01",
        title: "Precision over speed",
        body: "Measure twice, cut once, then test until the data confirms it is ready."
      },
      {
        index: "02",
        title: "Document the process",
        body: "If it is not written down, it did not happen. CAD, wiring notes, and design decisions are part of the machine."
      },
      {
        index: "03",
        title: "Rebuild without ego",
        body: "Every failure gets a postmortem, and every postmortem gets a next step."
      }
    ],
    robotPreviewSummary:
      "Project 37687 is the team's first competition platform. The team is designing a drivetrain, mechanisms, and control software for the current season.",
    robotPreviewSpecs: [
      { label: "STATUS", value: "DESIGN PHASE" },
      { label: "DRIVETRAIN", value: "UNDER EVALUATION" },
      { label: "WEIGHT", value: "TO BE MEASURED" },
      { label: "AUTONOMOUS", value: "IN DEVELOPMENT" }
    ],
    rosterNote:
      "Five students make up the founding roster. Role titles and descriptions are being finalized.",
    outreachTeaser:
      "Fracture runs community STEM events, supports rookie teams, and hosts build lab sessions.",
    sponsorTeaser: ""
  },

  about: {
    intro:
      "Fracture is a student-led FIRST Tech Challenge team in Round Rock, Texas. Five students work together on design, fabrication, programming, and operations.",
    groupImage: "assets/images/team/workshop-collab.jpg",
    groupImageAlt: "Team in the workshop",
    groupCaption: "Workshop / Round Rock, TX",
    statement:
      "Fracture designs, builds, programs, and competes with robots. The team is in its first competition season.",
    values: [
      {
        index: "01",
        title: "Precision",
        body: "Tolerances, cable routes, and commit messages all matter."
      },
      {
        index: "02",
        title: "Transparency",
        body: "We publish what worked and what broke."
      },
      {
        index: "03",
        title: "Momentum",
        body: "Small finished iterations beat grand plans that never leave CAD."
      }
    ],
    roadmap: [
      {
        phase: "01",
        title: "Foundation",
        detail: "Assemble the roster, define ownership, and set engineering standards.",
        status: "ACTIVE"
      },
      {
        phase: "02",
        title: "Design",
        detail: "Game analysis, concept selection, CAD architecture, and prototype cycles.",
        status: "UPCOMING"
      },
      {
        phase: "03",
        title: "Build",
        detail: "Fabricate, assemble, wire, and tune the first competition platform.",
        status: "UPCOMING"
      },
      {
        phase: "04",
        title: "Compete",
        detail: "Qualifiers, pit iteration, match review, and season postmortem.",
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
      "Role titles and short descriptions are being finalized. Each card holds a dedicated slot for both.",
    joinNote:
      "Fracture is looking for builders, coders, documentarians, and mentors. Contact the team to get involved.",

    recognition: {
      title: "AWARDS & RANKINGS.",
      intro:
        "Verified results only. Awards and rankings are published after they are earned and confirmed.",
      emptyNote:
        "No awards or rankings have been recorded yet.",
      archiveNote: "Full match results and the season archive live on the results page.",
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
      "The first Fracture competition platform is in development. The team is designing a drivetrain, intake, scoring mechanism, electronics, and control software.",
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
          "The drivetrain is the first system under review. Fracture is evaluating wheel topology, gear ratio, and frame stiffness against the game's cycle paths.",
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
          "Intake geometry is being prototyped around reliable acquisition and jam recovery.",
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
          "The scoring architecture is tied directly to the season's game rules. Fracture is comparing reach, cycle time, and packaging tradeoffs before committing to fabrication.",
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
          "Power distribution and sensor routing are being planned before the frame is drilled.",
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
          "Fracture's software plan favors small, testable behaviors over one large autonomous routine.",
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
        "Every structural plate, bracket, and mechanism will be modeled before fabrication.",
      deliverables: [
        "Parametric master assembly and bill of materials",
        "2D fabrication drawings and laser/DXF profiles",
        "Design review notes, weight budget, and revision history"
      ]
    }
  },

  outreach: {
    heroImage: "assets/images/outreach/stem-demo.jpg",
    heroImageAlt: "Students at a community STEM workshop",
    heroCaption: "Community STEM / Reference",
    intro:
      "Fracture's outreach program includes community STEM events, rookie team support, and build lab sessions.",
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
          "Robot demonstrations, driver-station walkthroughs, and open Q&A for families and local students."
      },
      {
        category: "Mentorship",
        title: "Rookie Team Support",
        date: "TO BE ANNOUNCED",
        location: "Central Texas",
        status: "PLANNED",
        summary:
          "Build reviews, wiring checks, code troubleshooting, and guidance for younger robotics teams."
      },
      {
        category: "Workshops",
        title: "Build Lab Sessions",
        date: "TO BE ANNOUNCED",
        location: "Round Rock, TX",
        status: "PLANNED",
        summary:
          "Small workshops on CAD, fabrication, and control basics for students new to engineering."
      },
      {
        category: "Community",
        title: "School & Library Visits",
        date: "TO BE ANNOUNCED",
        location: "Round Rock, TX",
        status: "PLANNED",
        summary:
          "Short sessions that bring a working robot into classrooms and libraries."
      }
    ],
    ctaTitle: "Host an event.",
    ctaCopy:
      "Fracture coordinates robot demonstrations, beginner STEM sessions, and mentorship visits for local schools, libraries, and youth organizations.",
    ctaLabel: "Contact the team"
  },

  achievements: {
    intro:
      "Fracture is in its first competition cycle. Awards earned by the team will be listed here as they are confirmed.",
    awards: []
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
