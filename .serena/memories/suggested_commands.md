# Suggested commands

## Setup

- `make dev-install` — `npm ci` + `vale sync` (first-time setup for lint prose rules).

## Development

- `npm run dev` — webpack-dev-server with `--open`; serves `docs/` with source maps.
- `npm run build` — production build into `docs/`. `prebuild` runs `npm run clean` first.
- `npm run clean` — `rm -rf docs; git restore docs/CNAME` (keeps the CNAME).

## Lint / format

- `make lint` — full lint suite (npm scripts + Vale prose + yamllint + shellcheck + actionlint).
  - `make lint-npm` → `npm run lint`
  - `make lint-text` → `vale` on top-level and `.github/` markdown
  - `make lint-yml` → `yamllint --strict .`
  - `make lint-sh` → `shellcheck .husky/commit-msg .husky/pre-commit`
  - `make lint-action` → `actionlint`
- `npm run lint` — runs all `lint:*` scripts in parallel (credentials/md/prettier/pug/style/es).
  - `lint:credentials` is skipped when `CI=true`.
- `npm run format` — autofix variants for md / prettier / stylelint / eslint.

## Committing

- `npm run commit` (or `npm run cm`) — Commitizen-driven Conventional Commit prompt.
- commitlint runs via husky `commit-msg` hook and in CI; PR titles follow Conventional Commits too.
- `lint-staged` runs on `pre-commit`: secretlint + prettier, plus md (markdownlint+Vale), pug (markuplint), scss (stylelint), ts/js (eslint), workflows (actionlint).

## Other

- `make update-gi` — regenerate `.gitignore` from `.gitignore_custom` + `gibo` (macOS/Linux/Windows/VSCode/JetBrains/Vim/Node).

## Darwin/system utilities

System is macOS (Darwin). Use standard BSD variants: `ls`, `find`, `grep` (prefer `rg` if available), `cd`, `git`. BSD `sed`/`grep` differ from GNU — e.g., `sed -i ''` needs the empty-string arg on macOS.
