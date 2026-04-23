# Deployment and CI

## Where the site lives

- GitHub Pages serves from the committed `docs/` directory on `main`.
- `docs/CNAME` pins the custom domain `haru52.com` and is preserved by `npm run clean`.

## CI workflows (`.github/workflows/`)

- **test.yml** — runs on push/PR. Jobs: lint + build. The test job is commented out because there is no test suite yet.
- **publish.yml** — triggers on successful Test runs on `main`. Runs `npm run build` and commits the regenerated `docs/` back to `main` using `EndBug/add-and-commit`.
  - Author: `github_actions`
  - Message: `build: publish website resources to deploy`

## Important rules

- **Never hand-edit `docs/`** — the Publish workflow will overwrite it. Make changes in `src/` and let CI regenerate `docs/`.
- Local `npm run build` is fine for verifying the build works; just avoid committing the resulting `docs/` yourself.
