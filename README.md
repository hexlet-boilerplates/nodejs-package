# nodejs-package

[![Node CI](https://github.com/hexlet-boilerplates/nodejs-package/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-boilerplates/nodejs-package/actions)

## Requirements

- Unix system (Macos/Linux)
- Nodejs 22.x+
- Make

## Description

Boilerplate for javascript projects with:

- Javascript (nodejs)
- Oxlint (linter) and Oxfmt (formatter)
- Vitest

For Typescript boilerplate see [typescript-package](https://github.com/hexlet-boilerplates/typescript-package)

## Setup

```bash
make install
```

## Run tests

```bash
make test
```

See other commands in [Makefile](./Makefile)

## Run tests with coverage

```bash
make test-coverage
# see ./coverage
```

The coverage threshold is set in [vitest.config.js](./vitest.config.js) — `make test-coverage`
exits with an error when coverage drops below it, so the Node CI badge above stays green
only while coverage holds.

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=nodejs-package)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=nodejs-package).
