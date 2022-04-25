import { test, expect } from 'vitest'
import { isEqual } from '../../lang/isEqual'

import { chunk } from '../chunk'
import { compact } from '../compact'
import { concat } from '../concat'
import { difference } from '../difference'
import { drop } from '../drop'
import { dropRight } from '../dropRight'
import { fill } from '../fill'
import { findIndex } from '../findIndex'
import { findLastIndex } from '../findLastIndex'
import { flatten } from '../flatten'
import { fromEntries } from '../fromEntries'
import { head } from '../head'
import { indexOf } from '../indexOf'
import { initial } from '../initial'
import { intersection } from '../intersection'
import { intersectionWith } from '../intersectionWith'
import { join } from '../join'
import { last } from '../last'
import { slice } from '../slice'

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

  expect(drop([1, 2, 3], -1)).toStrictEqual([3])
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
  expect(fill([4, 6, 8, 10], '*', -1)).toStrictEqual([4, 6, 8, '*'])
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

test('slice', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(slice(arr)).toStrictEqual(arr.slice())
  expect(slice(arr, 0, 5)).toStrictEqual(arr.slice(0, 5))
  // start和end相同
  expect(slice(arr, 0, 0)).toStrictEqual(arr.slice(0, 0))
  // end负数情况
  expect(slice(arr, 0, -1)).toStrictEqual(arr.slice(0, -1))
  // start和end都为负数的情况
  expect(slice(arr, -2, -1)).toStrictEqual(arr.slice(-2, -1))
  expect(slice(arr, -2, -3)).toStrictEqual(arr.slice(-2, -3))
  // 小数情况
  expect(slice(arr, 0, 3.5)).toStrictEqual(arr.slice(0, 3.5))
  expect(slice(arr, 0, -3.5)).toStrictEqual(arr.slice(0, -3.5))
})

test('initial', () => {
  expect(initial([1, 2, 3])).toStrictEqual([1, 2])
})

test('flatten', () => {
  expect(flatten([1, [2, [3, [4]], 5]], 0)).toStrictEqual([1, [2, [3, [4]], 5]])
  expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, [3, [4]], 5])
  expect(flatten([1, [2, [3, [4]], 5]], 2)).toStrictEqual([1, 2, 3, [4], 5])
  expect(flatten([1, [2, [3, [4]], 5]], 3)).toStrictEqual([1, 2, 3, 4, 5])
  expect(flatten([1, [2, [3, [4]], 5]], 4)).toStrictEqual([1, 2, 3, 4, 5])
})

test('fromEntries', () => {
  expect(
    fromEntries([
      ['a', 1],
      ['b', 2]
    ])
  ).toStrictEqual({ a: 1, b: 2 })
  expect(fromEntries([[undefined, 1]])).toStrictEqual({ undefined: 1 })
  expect(fromEntries([[{}, 1]])).toStrictEqual({ '[object Object]': 1 })
})

test('intersection', () => {
  expect(intersection()).toStrictEqual([])
  expect(intersection([1, 2])).toStrictEqual([1, 2])
  expect(intersection([1, 1, 2, 2])).toStrictEqual([1, 2])
  expect(intersection([2, 1], [2, 3])).toStrictEqual([2])
  expect(intersection([2, 1], [3, 4])).toStrictEqual([])
  expect(intersection([2, 1, 2], [3, 2], [2])).toStrictEqual([2])
})

test('intersectionWith', () => {
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 }
  ]
  const others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 }
  ]
  expect(intersectionWith(objects, others, isEqual)).toStrictEqual([{ x: 1, y: 2 }])
})

test('join', () => {
  expect(join([1, 2, 3])).toBe('123')
  expect(join([1, 2, 3], '*')).toBe('1*2*3')
  expect(join([undefined, 2, 3], '*')).toBe('*2*3')
  expect(join([{}, 2, 3], '*')).toBe('[object Object]*2*3')
})

test('last', () => {
  const obj = {}
  expect(last([])).toBe(undefined)
  expect(last([1, 2, 3])).toBe(3)
  expect(last([obj])).toBe(obj)
})
