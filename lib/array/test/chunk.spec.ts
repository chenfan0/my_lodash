import { test, expect } from 'vitest'

import { chunk } from '../chunk'

test('chunk', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
    ['a', 'b'],
    ['c', 'd']
  ])
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
  expect(chunk([1, 2, 3, 4], 0)).toEqual([])
})
