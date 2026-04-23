# Project overview

- **Name / homepage**: `haru-website` (package.json), deployed at <https://haru52.com/>.
- **Purpose**: Personal website for "haru". Static site hosted on GitHub Pages (`docs/` is the published output, `docs/CNAME` pins the domain).
- **Repository**: <https://github.com/haru52/haru52.github.io>.
- **No runtime tests**: `npm test` intentionally exits 1; no test framework is wired up. Do not claim success on tests.

## Tech stack

- **Language**: TypeScript (strict, ESLint airbnb-base + airbnb-typescript + prettier).
- **View templates**: Pug (layouts/components/pages under `src/views/`).
- **Styling**: SCSS + Bootstrap 5, Font Awesome, Popper.
- **Bundler**: webpack 5 with `webpack.common.ts` + `webpack.dev.ts` / `webpack.prod.ts` merged via `webpack-merge`. Loaders: `ts-loader`, `pug-loader`, `sass-loader`, `css-loader`, `mini-css-extract-plugin`.
- **DI**: `tsyringe` + `reflect-metadata` (`@injectable`, `container.resolve(Application).run()`).
- **Runtime deps**: bootstrap, @popperjs/core, @fortawesome/fontawesome-free, reflect-metadata, tsyringe.
- **Engines** (pinned): Node `^20.13.1`, npm `^10.8.0`. Also pinned via `.node-version` / `.tool-versions`.
