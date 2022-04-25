import { test, expect } from 'vitest'

import { chunk } from '../chunk'
import { compact } from '../compact'
import { concat } from '../concat'
import { difference } from '../difference'
import { drop } from '../drop'
import { dropRight } from '../dropRight'
import { fill } from '../fill'
import { findIndex } from '../findIndex'
import { findLastIndex } from '../findLastIndex'
import { head } from '../head'
import { indexOf } from '../indexOf'

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

test('findIndex', () => {
  const arr = [1, 2, 3, 4, 5, 1]

  expect(
    findIndex(arr, function (value, index, arr) {
      return value === 1
    })
  ).toBe(0)

  expect(
    findIndex(arr, function (value, index, arr) {
      return value === 8
    })
  ).toBe(-1)
})

test('findLastIndex', () => {
  const arr = [1, 2, 3, 4, 5, 1]

  expect(
    findLastIndex(arr, function (value, index, arr) {
      return value === 1
    })
  ).toBe(5)

  expect(
    findLastIndex(arr, function (value, index, arr) {
      return value === 8
    })
  ).toBe(-1)
})

test('head', () => {
  expect(head([1, 2, 3])).toBe(1)
  expect(head([])).toBe(undefined)
})

test('indexOf', () => {
  expect(indexOf([1, 2, 1, 2], 2)).toBe(1)
  expect(indexOf([1, 2, 1, 2], 2, 2)).toBe(3)
})
