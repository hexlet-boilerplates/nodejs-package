---

plugins:
  # https://github.com/jest-community/eslint-plugin-jest
  - jest

# https://eslint.org/docs/user-guide/configuring#specifying-environments
env:
  node: true
  es2020: true

extends:
  - 'airbnb-base'
  - 'plugin:jest/recommended'

parserOptions:
  ecmaVersion: 11
  sourceType: module

rules:
  no-console: 0
  import/extensions: # FIXME: remove when rule will be adjusted for new nodejs version
    - error
    - ignorePackages
    - js: always
  no-underscore-dangle: [2, { "allow": ["__filename", "__dirname"] }]
