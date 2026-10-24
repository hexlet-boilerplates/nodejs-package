install: deps-install
	mise exec -- hk install --mise

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
	rumdl check .
	typos
	jactionlint
	$(MAKE) --no-print-directory knip

lint-fix:
	npx oxfmt && npx oxlint --fix

# Только отчёт, без --fix: находки решает человек
knip:
	npx knip

.PHONY: test knip
