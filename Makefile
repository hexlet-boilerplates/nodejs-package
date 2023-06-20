install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-spec:
	npm run test-spec

test-coverage:
	npm run test-coverage

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
