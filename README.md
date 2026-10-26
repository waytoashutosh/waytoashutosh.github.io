# Ashutosh Kumar — Robotics Portfolio

A responsive, accessible portfolio built with HTML, CSS, JavaScript, and original SVG concept illustrations. There is no package installation or compilation step.

## Publish on GitHub Pages

For the profile URL `https://waytoashutosh.github.io/`:

1. Create a **public** repository named **`waytoashutosh.github.io`** under the `waytoashutosh` account.
2. Upload `index.html`, `styles.css`, `mathworks.css`, `script.js`, `.nojekyll`, and the `assets` folder to its `main` branch. Keep the files at the repository root, rather than in a nested portfolio directory.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Select **main**, **/(root)**, and **Save**.
6. Open the published address shown by GitHub. Publishing can take up to 10 minutes.

An existing public repository also works; its address is normally `https://waytoashutosh.github.io/REPOSITORY-NAME/`. All local links use relative paths so this portfolio supports either location. Private repositories require an eligible paid GitHub plan for Pages. Do not change an existing repository's visibility without reviewing its contents.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Preview locally

Open `index.html` in a browser, or run a local HTTP server from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit the portfolio

- **Text and links:** edit `index.html`.
- **Colors, fonts, and layout:** edit `styles.css`; shared colors are at the top. The MathWorks contribution section is styled in `mathworks.css`.
- **Interactions:** edit `script.js`. Project filtering and the ascent/descent illustration work without a backend.
- **Projects:** duplicate an `<article class="project-card">` element, update its `data-categories`, then update the All work count.
- **Resume:** add your current PDF to `assets/`, then add a link to it. No outdated or placeholder resume is included.
- **Photos and videos:** add actual project media when available, and replace the relevant SVG illustrations. The existing illustrations are labeled as concepts and do not imply measured results or completed hardware trials.

The fonts come from Google Fonts; system fonts are used automatically when that service is unavailable. There are no analytics scripts, cookies, trackers, contact-form services, or runtime API calls.

## Content notes

The portfolio uses professional background shared by Ashutosh and the contact information in his current GitHub profile README. The Field AI capstone is explicitly marked as ongoing. Proprietary source code and internal data are not included. Dates that were not established are described without invented ranges.
