# Palmdale Digital Access Dashboard

A public, bilingual (English/Spanish) dashboard that tracks how the City of Palmdale is carrying out its **Digital Access Study** (July 2025). It's built for City Council, funders and grant conversations, and also for residents looking for help getting connected.

## What's on it

- **Headline figures**: households without Internet, cellular-only households, households without devices, and community engagement.
- **Implementation progress**: the 3 goals and 14 strategies, each with a status, shown by goal or as a full implementation matrix. The matrix can be downloaded as a CSV or printed.
- **Progress to date**: grants, partnerships and recognition already in place.
- **Who is most affected**: gaps by income, age, education and race, plus comparisons with LA County, California and the U.S.
- **What we heard**: community engagement and the barriers residents named.
- **Funding**: funds secured and opportunities to watch.
- **Get connected**: the resident resource directory from the study's Appendix A.

## Files

```
index.html          Page structure
assets/styles.css   Colors, fonts, layout
assets/app.js       Draws the page from the data files
data/progress.js    ← STATUS OF EACH STRATEGY (the implementation matrix). Edit this one.
data/content.js     All text in English and Spanish, figures, resources
docs/               How-to guides
```

## Updating

See **[docs/HOW-TO-UPDATE.md](docs/HOW-TO-UPDATE.md)**. You can update everything from the GitHub website without installing anything.

## Publishing and handoff

See **[docs/GITHUB-SETUP.md](docs/GITHUB-SETUP.md)**. The site is plain HTML, CSS and JavaScript, with no build step, database or paid service. It runs on GitHub Pages or any web server, and it works when you open `index.html` directly from a computer.

## Accessibility

The dashboard targets WCAG 2.1 AA. It has semantic headings and landmarks, a skip link, full keyboard support, visible focus, and AA color contrast. Statuses are never shown by color alone (each has an icon and a text label). Charts are built as real tables, so screen readers can read them. The page language switches between English and Spanish. It also includes reduced-motion, high-contrast and print styles.

## Sources

City of Palmdale Digital Access Study (July 2025). U.S. Census Bureau, American Community Survey 2023 5-Year Estimates (tables S2801, S2802).
