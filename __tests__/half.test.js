// @ts-check

import { expect, test } from 'vitest'
import half from '../index.js'

test('half', () => {
  expect(half(6)).toBe(3)
})
