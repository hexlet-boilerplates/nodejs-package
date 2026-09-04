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
	npm test -- --coverage

lint:
	npx oxlint && npx oxfmt --check

lint-fix:
	npx oxfmt && npx oxlint --fix

publish:
	npx release-it

.PHONY: test
