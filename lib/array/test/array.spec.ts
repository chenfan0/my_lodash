import { test, expect } from 'vitest'

import { chunk } from '../chunk'
import { compact } from '../compact'
import { concat } from '../concat'
import { difference } from '../difference'
import { drop } from '../drop'
import { dropRight } from '../dropRight'
import { fill } from '../fill'

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

test('difference', () => {
  expect(difference([3, 2, 1], [4, 2])).toStrictEqual([3, 1])
})

test('drop', () => {
  expect(drop([1, 2, 3])).toStrictEqual([2, 3])
  expect(drop([1, 2, 3], 2)).toStrictEqual([3])
  expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3])
})

test('dropRight', () => {
  expect(dropRight([1, 2, 3])).toStrictEqual([1, 2])
  expect(dropRight([1, 2, 3], 2)).toStrictEqual([1])
  expect(dropRight([1, 2, 3], 0)).toStrictEqual([1, 2, 3])
})

test('fill', () => {
  expect(fill([1, 2, 3], 'a')).toStrictEqual(['a', 'a', 'a'])
  expect(fill(Array(3), 2)).toStrictEqual([2, 2, 2])
  expect(fill([4, 6, 8, 10], '*', 1, 3)).toStrictEqual([4, '*', '*', 10])
})
