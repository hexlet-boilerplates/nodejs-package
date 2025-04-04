install: deps-install
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

deps-install:
	npm ci

deps-update:
	npx ncu -u

test:
	npm test

test-coverage:
	npm test -- --coverage --coverage.provider=v8

lint:
	npx eslint .

publish:
	npx release-it

.PHONY: test
