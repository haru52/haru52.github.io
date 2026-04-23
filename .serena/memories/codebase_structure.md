# Codebase structure

```
.
├── Makefile                 # Lint orchestration (dev-install, lint, update-gi)
├── package.json             # npm scripts and deps
├── tsconfig.json
├── webpack.common.ts        # Shared webpack config
├── webpack.dev.ts           # dev-server config (extends common via webpack-merge)
├── webpack.prod.ts          # production build config
├── src/
│   ├── typescript/
│   │   ├── index.ts                      # Entry: reflect-metadata + container.resolve(Application).run()
│   │   ├── application.ts                # Application class (tsyringe @injectable)
│   │   └── current-nav-link-activator.ts # Feature class injected into Application
│   ├── views/                # Pug templates
│   │   ├── layouts/_layout.pug
│   │   ├── components/_*.pug (header, footer, GA)
│   │   ├── index.pug, 404.pug, magic.pug, movie.pug, privacy_policy.pug
│   └── assets/
│       ├── stylesheets/      # index.scss entry (imports custom.scss + Bootstrap)
│       ├── images/
│       └── haru52_pub.asc    # GPG public key, emitted as asset/resource
├── docs/                    # Build output, committed to the repo (GH Pages serves from here).
│                            # CI regenerates this; DO NOT hand-edit.
└── .github/workflows/
    ├── test.yml             # Lint + build on push/PR (test job commented out)
    └── publish.yml          # On successful Test on main: build + commit docs/ via EndBug/add-and-commit
```

## Webpack pipeline (key details)

- Entry `src/typescript/index.ts` → output `docs/`.
- `initHtmlWebpackPlugins()` globs `src/views/**/*.pug` excluding `_*.pug` partials, one `HtmlWebpackPlugin` per page.
- SCSS → `docs/assets/stylesheets/main.css` (MiniCssExtractPlugin).
- Images and `.asc` files emitted as `asset/resource` under `docs/assets/`.
