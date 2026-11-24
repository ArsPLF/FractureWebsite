# Fracture #37687 — Team Website

Static website for **Fracture**, a FIRST Tech Challenge team in Round Rock, Texas.

- **Team:** Fracture
- **Number:** 37687
- **Program:** FIRST Tech Challenge
- **Season:** 2026–27
- **Live site:** https://arsplf.github.io/FractureWebsite/

No build step, no framework, no backend. The site is plain HTML, CSS, and vanilla JavaScript, designed to deploy directly from the repository root with GitHub Pages.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | Team, values, roadmap, roster, awards and rankings |
| `robot.html` | Robot overview, specifications, subsystems, CAD |
| `outreach.html` | Outreach programs and impact |
| `achievements.html` | Results archive and season objectives |
| `sponsors.html` | Sponsorship tiers and partner slots |
| `contact.html` | Contact channels and email draft builder |

## Project structure

```text
.
├── index.html
├── about.html
├── robot.html
├── outreach.html
├── achievements.html
├── sponsors.html
├── contact.html
├── assets/
│   ├── css/styles.css
│   ├── js/content.js      ← all team content lives here
│   ├── js/main.js         ← rendering and interactions
│   ├── images/
│   └── icons/
└── README.md
```

## Preview locally

From the project folder, start any static file server:

```powershell
python -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

Opening `index.html` directly from the filesystem also works, but a local server is closer to GitHub Pages.

## Editing content

Nearly all public content is stored in `assets/js/content.js` under `window.TEAM_CONTENT`. Update that file instead of editing the HTML pages.

### Member roles and descriptions

Each member in `about.members` has a dedicated role slot and description slot:

```js
{
  name: "Abdurrehman S",
  initials: "AS",
  number: "01",
  role: "To be announced",
  focus: "Description to be announced"
}
```

Replace `role` with the member's title (for example, a subteam lead or team captain) and `focus` with a short, factual description. Empty values automatically fall back to “To be announced”. Do not assign roles that the team has not confirmed.

### Awards and rankings

The **Awards & Rankings** section on `about.html` reads from `about.recognition`:

```js
recognition: {
  title: "AWARDS & RANKINGS.",
  intro: "Verified results only...",
  emptyNote: "No awards or rankings have been recorded yet...",
  archiveNote: "Full match results and the season archive live on the results page.",
  awards: [],
  rankings: []
}
```

Add entries only after they are earned and verified.

Award entry:

```js
{ title: "Award name", event: "Event name", season: "2026–27", detail: "Optional note" }
```

Ranking entry:

```js
{ rank: "1st", event: "Event name", season: "2026–27", detail: "Optional note" }
```

Both panels show an honest empty state while their arrays are empty. The section links to `achievements.html` for the full results archive.

### Other content

| Content | Location in `content.js` |
| --- | --- |
| Team name, number, location, email, socials | `identity` |
| Home hero, stats, principles | `home` |
| Team intro, values, roadmap, roster | `about` |
| Robot specs, subsystems, CAD | `robot` |
| Outreach programs and impact stats | `outreach` |
| Results archive and objectives | `achievements` |
| Sponsor tiers, slots, funding allocation | `sponsors` |
| Contact channels and form copy | `contact` |

Items marked `// TODO:` in `content.js` are placeholders that still need real team data.

## Images

Current photos are grayscale reference images stored in `assets/images/`:

- `robot/hero-chassis.jpg`
- `robot/cad-assembly.jpg`
- `team/workshop-collab.jpg`
- `outreach/stem-demo.jpg`

To replace one, keep the same path and filename, or update the path in `content.js`. Recommended: landscape JPEGs at least 1600 px wide, compressed for the web. Missing images render as deliberate technical placeholders rather than broken images.

## Placeholders to replace before publishing

- **Contact email:** `fracture37687@gmail.com` is a placeholder inbox. Replace it in `identity.contactEmail`, `sponsorshipEmail`, and `recruitmentEmail`.
- **Social links:** Instagram, YouTube, and GitHub URLs are intentionally blank and render as `PENDING`. Add the real profile URLs in `identity.socials`.
- **Team photography:** The four images are reference visuals, not official team photos.
- **Member roles and descriptions:** All roster entries currently read “To be announced”.
- **Awards and rankings:** The arrays are empty by design. Do not add unverified results.
- **Robot specifications:** Many values remain `TBA`, `UNDER EVALUATION`, or `TO BE MEASURED`.

## Deploy to GitHub Pages

1. Commit and push the site to the `main` branch of `ArsPLF/FractureWebsite`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**, then save.
5. GitHub publishes the site at `https://arsplf.github.io/FractureWebsite/`.

Because the site has no build step, every push to `main` updates the published site.

## Notes

- The contact form opens a pre-addressed `mailto:` draft. It does not store or send data through the website. Connect a form backend such as Formspree if in-page delivery is needed later.
- The design uses Chakra Petch, Sora, and JetBrains Mono from Google Fonts.
- Scroll reveals, the ticker, and pointer glow respect `prefers-reduced-motion`.
- Keep results, awards, rankings, and robot claims factual. The site is intentionally structured to show “pending” states instead of invented data.
