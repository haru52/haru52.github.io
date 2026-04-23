# Task completion checklist

After making code changes, before calling a task done:

1. **Lint**:
   - `npm run lint` for the npm-script suite (secretlint / markdownlint / prettier / markuplint / stylelint / eslint).
   - For a comprehensive pass that matches CI: `make lint` (adds Vale prose, yamllint, shellcheck, actionlint).
2. **Format** (if lint flagged style issues): `npm run format`.
3. **Build check** (for changes affecting TS/Pug/SCSS/webpack): `npm run build` — confirms the prod build succeeds. Remember `prebuild` wipes `docs/` and restores `docs/CNAME`.
4. **Do NOT run `npm test`** — it is a stub that always exits 1 by design.
5. **Do NOT commit changes under `docs/` by hand** — the Publish workflow regenerates and commits it.
6. **Commits**: use `npm run commit` (Commitizen) or write Conventional Commit messages manually. commitlint runs in the `commit-msg` husky hook and in CI.
7. **Hooks**: let husky's `pre-commit` (lint-staged) and `commit-msg` (commitlint) run — don't bypass with `--no-verify`.

## CI mirrors

- `.github/workflows/test.yml` → lint + build.
- `.github/workflows/publish.yml` → on success on `main`, regenerates `docs/` and commits it.
