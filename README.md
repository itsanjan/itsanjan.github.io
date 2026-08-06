# Anjan Kumar Resume

Personal resume/portfolio site, served via GitHub Pages at [itsanjan.github.io](https://itsanjan.github.io/). Built with Bootstrap 5, Font Awesome, and Gulp, based on the [Start Bootstrap Resume](https://startbootstrap.com/template-overviews/resume/) template.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/itsanjan/itsanjan.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/itsanjan/itsanjan.github.io/actions/workflows/ci.yml)

## Development

```bash
npm install
npm run dev            # watch + live-reload preview
npm run build           # compile/minify CSS & JS, copy vendor assets
npm run preview:build   # build, then serve the built output
```

Or use the helper scripts in [scripts/](scripts/) (`preview.sh`/`build.sh`, with `.bat` equivalents for Windows), which install dependencies and run the commands above.

### Gulp tasks

- `gulp` — default task: builds vendor assets, CSS, and JS
- `gulp dev` — BrowserSync with watch + live reload
- `gulp css` — compile SCSS to CSS and minify
- `gulp js` — minify custom JS
- `gulp vendor` — copy Bootstrap/Font Awesome from `node_modules` into `vendor/`

## Structure

- [index.html](index.html) — site content
- [scss/](scss/) — source styles, compiled to [css/](css/)
- [js/resume.js](js/resume.js) — custom JS, minified to `resume.min.js`
- [vendor/](vendor/) — third-party assets copied in by `gulp vendor`

## License

MIT — see [LICENSE](LICENSE).
