# TechShare — Personal Developer Blog & Learning Resources

TechShare is a personal tech blog and learning-resources site maintained by a software developer: in-depth technical articles, interview banks, hands-on tutorials and architecture notes across **.NET / C#, WPF, Redis, MySQL, Go**.

## Content

| Category | What you'll find |
| --- | --- |
| Learning Materials | Interview banks, career roadmaps and deep-dive tutorials for .NET / C# engineers |
| Technical Articles | Protocol analysis, performance tuning and architecture practice from real projects |

Currently 8 articles (all data lives in `data.js` — edit it to add or change content).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: site intro, category cards, popular articles |
| `resources.html` | Article list: category filter + live search (`?cat=c1`) |
| `detail.html` | Article detail page (`?id=r1`) |
| `data.js` | Static dataset: categories + articles (edit to update content) |
| `css/style.css` | Responsive styles (green `#166534` theme) |
| `js/main.js` | Shared render logic |

## Local preview

Just open `index.html` in a browser. No dependencies — covers are inline SVG, fonts are the system stack, works offline.


## Updating content

- **Add / remove articles**: edit the `resources` array in `data.js` (fields: `id`, `category_id`, `title`, `summary`, `content` — HTML supported, `hot` — popularity score, `outer_link`, `accent`).
- **Adjust categories**: edit the `categories` array.
- **Change site copy**: edit `index.html`.
- **Change styling**: edit `css/style.css`.

