# TechShare — English Site (GitHub Pages)

Static, desktop-first English version of the TechShare learning platform. No backend, no build step — pure HTML/CSS/JS, designed to be published on **GitHub Pages** (`*.github.io`).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, categories, popular resources, tools preview |
| `resources.html` | Resource library: category filter + live search (`?cat=c1`) |
| `detail.html` | Resource detail page (`?id=r1`) |
| `data.js` | Static dataset: 3 categories, 12 resources, 4 tools (edit this to change content) |
| `css/style.css` | Desktop-first responsive styles (green `#166534` accent) |
| `js/main.js` | Shared render logic |

## Deploy to GitHub Pages

### Option A — user/organization site (`<username>.github.io`)

1. Create a repository named exactly `<username>.github.io` (replace with your GitHub username).
2. Put these files at the **repository root** (index.html must be at the root).
3. `git add . && git commit -m "init english site" && git push -u origin main`
4. Site is live at `https://<username>.github.io/` within a minute or two.

### Option B — project site (`<username>.github.io/<repo>`)

1. Create a normal repository (e.g. `techshare-en`).
2. Put these files in the root or in `docs/`.
3. Push to GitHub, then: Repository → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` (or `gh-pages`), folder: `/ (root)` or `/docs`.
4. Site is live at `https://<username>.github.io/<repo>/`.

### Keep in sync with the main site

- Content lives in `data.js` only — update titles/summaries/articles there and re-push.
- Links inside pages use relative paths (`css/`, `js/`, `detail.html?id=…`), so both root and sub-path hosting work.

## Notes

- The static preview shows the catalog and tool cards for presentation. The four online tools (watermark removal, Word→PDF, Word→IMG, PDF→IMG) and user features require the full self-hosted backend; deploy that on your server and it will serve the Chinese H5 + admin as usual.
- No external images or CDN dependencies: covers are inline SVG, fonts are the system stack, so it works offline and behind strict CSP.
