# Code style and conventions

## TypeScript / JS

- ESLint extends `airbnb-base` + `airbnb-typescript/base` + `prettier` (`.eslintrc.yml`).
- Prettier is the source of truth for formatting — do not hand-format.
- New feature classes are wired through `tsyringe` DI (`@injectable()`). Inject them into `Application` rather than calling from `index.ts`.
- Entry point `src/typescript/index.ts` imports `reflect-metadata` and does `container.resolve(Application).run()`.

## Pug

- Linter: `markuplint` (`@markuplint/pug-parser`).
- `pug-loader` uses `root: src/views`, so absolute include paths resolve from there.
- `src/views/layouts/_layout.pug` is the base layout. Page templates extend it and override `content` / `breadcrumb_items` / `variables` blocks.
- Partials are prefixed with `_` (e.g. `components/_header.pug`) and excluded from page-glob.
- To add a new page: drop `src/views/*.pug` — webpack globs them automatically, no config change needed.

## SCSS

- `src/assets/stylesheets/index.scss` is the entry; imports `custom.scss` and Bootstrap.
- Linter: `stylelint` with `stylelint-config-standard-scss` + `stylelint-config-prettier-scss`.

## Markdown / prose

- `markdownlint-cli` for structure, `Vale` for prose (top-level `*.md` + `.github/` docs).

## Commits / branching

- **Conventional Commits** enforced by commitlint (`@commitlint/config-conventional`) via husky `commit-msg` and CI. PR titles follow the same rule.
- **GitHub flow**: feature branch → PR → merge to `main`.
- Do NOT bypass husky/lint-staged hooks — CI re-runs them and will fail.
