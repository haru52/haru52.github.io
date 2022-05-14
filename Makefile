.PHONY: install
install:
	npm ci

.PHONY: lint
lint:
	make lint-npm
	make lint-sh
	make lint-action
	make lint-text

.PHONY: lint-npm
lint-npm:
	npm run lint

.PHONY: lint-sh
lint-sh:
	shellcheck .husky/commit-msg .husky/pre-commit

.PHONY: lint-action
lint-action:
	actionlint

.PHONY: lint-text
lint-text:
	vale README.md CONTRIBUTING.md SECURITY.md .github/*.md .github/ISSUE_TEMPLATE .github/vale_styles/Microsoft

.PHONY: update-gi
update-gi:
	gibo update
	cat .gitignore_custom >| .gitignore
	gibo dump macOS Linux Windows VisualStudioCode JetBrains Vim Node >> .gitignore
