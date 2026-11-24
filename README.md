# Fracture #37687 — Team Website

Static website for **Fracture**, a FIRST Tech Challenge team in Round Rock, Texas.

- **Team:** Fracture
- **Number:** 37687
- **Program:** FIRST Tech Challenge
- **Season:** 2026–27
- **Location:** Round Rock, Texas
- **Live site:** https://arsplf.github.io/FractureWebsite/

No build step, no framework, no backend. The site is plain HTML, CSS, and vanilla JavaScript, designed to deploy directly from the repository root with GitHub Pages.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — hero with team identity, statistics, and section previews |
| `about.html` | Team, values, roadmap, roster, awards |
| `robot.html` | Robot overview, specifications, subsystems, CAD |
| `outreach.html` | Outreach programs and impact |
| `achievements.html` | Awards list |
| `contact.html` | Contact channels and social links |

## Project structure

```text
.
├── index.html
├── about.html
├── robot.html
├── outreach.html
├── achievements.html
├── contact.html
├── assets/
│   ├── css/styles.css
│   ├── js/content.js      ← all team content lives here
│   ├── js/main.js         ← rendering and interactions
│   ├── images/
│   └── icons/
│       ├── fracture-logo.png   ← official team logo
│       ├── favicon.svg
│       └── team-mark.svg
└── README.md
```

## Preview locally

From the project folder, start any static file server:

```powershell
python -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

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

Replace `role` with the member's title and `focus` with a short, factual description. Empty values automatically fall back to “To be announced”.

### Awards

The **Awards** page reads from `achievements.awards`:

```js
awards: []
```

Add entries only after they are earned and verified.

Award entry:

```js
{ title: "Award name", event: "Event name", season: "2026–27", detail: "Optional note" }
```

### Other content

| Content | Location in `content.js` |
| --- | --- |
| Team name, number, location, email, socials, logo path | `identity` |
| Home hero, stats, principles | `home` |
| Team intro, values, roadmap, roster | `about` |
| Robot specs, subsystems, CAD | `robot` |
| Outreach programs and impact stats | `outreach` |
| Awards | `achievements` |
| Contact channels and form copy | `contact` |

Items marked `// TODO:` in `content.js` are placeholders that still need real team data.

### Logo

The official team logo lives at `assets/icons/fracture-logo.png`. It is referenced from `content.js` as `identity.logoPath` and is used in the header, footer, and homepage hero graphic. Replace `fracture-logo.png` with the official logo asset when available; keep the same filename so no `content.js` change is needed.

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
- **Awards:** The array is empty by design. Do not add unverified results.
- **Robot specifications:** Many values remain `TBA`, `UNDER EVALUATION`, or `TO BE MEASURED`.
- **Team logo:** Replace `assets/icons/fracture-logo.png` with the official logo asset.

## Design

- Single dark theme (no light/dark mode toggle)
- Monochromatic black/white/gray palette
- Chakra Petch (display), Sora (body), JetBrains Mono (technical labels)
- Geometric background elements on the homepage hero
- No light/dark mode, no message builder, no sponsors page

## Deploy to GitHub Pages

1. Commit and push the site to the `main` branch of `ArsPLF/FractureWebsite`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**, then save.
5. GitHub publishes the site at `https://arsplf.github.io/FractureWebsite/`.

Because the site has no build step, every push to `main` updates the published site.

## Notes

- The contact page provides email and social links as mailto:/URL links. It does not store or send data through the website.
- The design uses Chakra Petch, Sora, and JetBrains Mono from Google Fonts.
- Scroll reveals respect `prefers-reduced-motion`.
- Keep results, awards, and robot claims factual. The site is intentionally structured to show “pending” states instead of invented data.
