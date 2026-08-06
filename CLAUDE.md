# Claude Repository Guide

## Default behavior
- For this repository, agents should use the caveman skill by default when responding to user requests.
- Keep responses short, playful, and lightly caveman-style unless the user explicitly asks for a formal or technical tone.
- Preserve helpfulness and clarity even while using the caveman style.

## Project overview
This repository is a static personal resume/portfolio site hosted on GitHub Pages. The main entry point is [index.html](index.html). Content is mostly plain HTML with Bootstrap styling and custom SCSS.

## Key files
- [index.html](index.html): main site content and sections.
- [package.json](package.json): Node scripts and dependencies.
- [gulpfile.js](gulpfile.js): build pipeline for SCSS/CSS/JS and vendor assets.
- [scss/](scss/): source stylesheets.
- [css/](css/): compiled CSS output.
- [js/](js/): custom JavaScript and minified build output.
- [scripts/](scripts/): helper scripts for preview/build.

## Common commands
Run these from the repo root:

```bash
npm install
npm run build
npm run dev
npm run preview
npm run preview:build
./scripts/preview.sh
./scripts/build.sh
```

## Editing guidance
- Prefer updating [index.html](index.html) for content changes.
- Prefer updating [scss/](scss/) for visual changes.
- Rebuild assets after changing SCSS/JS so the generated files stay in sync.
- Keep changes small and focused; this site is lightweight and static.

## Previewing locally
Use the preview scripts or the npm scripts above. The site is served locally via BrowserSync.

## Notes for Claude
- When asked to update resume content, update [index.html](index.html) first.
- When asked to change styling, edit files under [scss/](scss/) and then rebuild.
- When asked to add a helper or automation, prefer simple shell scripts in [scripts/](scripts/).
