import { test, expect } from 'vitest'

import { chunk } from '../chunk'
import { compact } from '../compact'
import { concat } from '../concat'

test('chunk', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([
    ['a', 'b'],
    ['c', 'd']
  ])
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']])
  expect(chunk([1, 2, 3, 4], 0)).toStrictEqual([])
})

test('compact', () => {
  const arr = [0, 1, false, 2, '', 3]
  expect(compact(arr)).toStrictEqual([1, 2, 3])
})

test('concat', () => {
  expect(concat([1], 2, [3], [[4]])).toStrictEqual([1, 2, 3, [4]])
})
