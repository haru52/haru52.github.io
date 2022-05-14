# Contributing Guideline

## Requirements

| Tool                                                        | Version                                          |
| ----------------------------------------------------------- | ------------------------------------------------ |
| Node.js and npm                                             | `engines` values in [package.json](package.json) |
| [gibo](https://github.com/simonwhitaker/gibo#readme)        | >=2.2.7                                          |
| [Vale CLI](https://vale.sh/)                                | >=2.16.0                                         |
| [ShellCheck](https://github.com/koalaman/shellcheck#readme) | >=0.8.0                                          |
| [actionlint](https://github.com/rhysd/actionlint#readme)    | [.tool-versions](.tool-versions)                 |

## Rules

| Category               | Rule                                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Git commit             | [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)                                                                |
|                        | [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#readme) |
| Git branching strategy | [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)                                                                 |
| Versioning             | [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)                                                                             |

## Development flow

1. Fork this repository
2. Develop and create a Pull Request (PR) according to the above rules
3. This repository maintainers will review the PR
4. The maintainers will merge the PR branch if they approved it, otherwise they will close it without merging

## Installation

```sh
gh repo clone <your org>/haru52.github.io # Clone the repository
cd haru52.github.io
make
```

## Lint

```sh
make lint
```

## Git commit

```sh
npm run commit # Commitizen with commitlint adapter
# or
npm run cm     # alias for `npm run commit`
# or
git commit     # standard Git commit
```
