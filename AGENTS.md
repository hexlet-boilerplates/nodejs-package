# AGENTS.md

Шаблон пакета на Node.js. Код лежит в `src/`, точка входа пакета `index.js`, исполняемый файл в `bin/`, тесты Vitest в `__tests__/`.

## Команды

| Команда | Что делает |
| --- | --- |
| `make install` | Ставит зависимости и git-хуки |
| `make run` | Запускает `bin/nodejs-package.js` |
| `make test` | Запускает тесты |
| `make test-coverage` | Запускает тесты с покрытием |
| `make lint` | Проверяет код через oxlint и oxfmt и запускает knip |
| `make lint-fix` | Исправляет форматирование и то, что oxlint умеет исправить сам |
| `make deps-update` | Поднимает версии зависимостей в `package.json` |

## Проверки

`make lint` также проверяет Markdown (`rumdl`), опечатки (`typos`) и workflow GitHub Actions (`jactionlint`). knip ищет неиспользуемые файлы и зависимости и только сообщает о них, решение по находкам принимает человек. `make install` ставит git-хуки hk, перед коммитом они запускают `make lint`, перед push `make test`.

Перед завершением задачи запусти `make lint` и `make test`, обе команды должны проходить.

## Окружение

Инструменты и их версии задаёт `mise.toml`, ставит их `mise install`.

Релизы готовит release-please по истории коммитов, поэтому сообщения коммитов пишутся по Conventional Commits.
