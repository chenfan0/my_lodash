import { test, expect } from 'vitest'
import { isEqual } from '../../lang/isEqual'
import { at } from '../at'

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
import { lastIndexOf } from '../lastIndexOf'
import { pull } from '../pull'
import { remove } from '../remove'
import { reverse } from '../reverse'
import { slice } from '../slice'
import { sortedIndex } from '../sortedIndex'
import { sortedIndexOf } from '../sortedIndexOf'
import { sortedLastIndex } from '../sortedLastIndex'
import { sortedLastIndexOf } from '../sortedLastIndexOf'

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
  // start???end??????
  expect(slice(arr, 0, 0)).toStrictEqual(arr.slice(0, 0))
  // end????????????
  expect(slice(arr, 0, -1)).toStrictEqual(arr.slice(0, -1))
  // start???end?????????????????????
  expect(slice(arr, -2, -1)).toStrictEqual(arr.slice(-2, -1))
  expect(slice(arr, -2, -3)).toStrictEqual(arr.slice(-2, -3))
  // ????????????
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

test('lastIndexOf', () => {
  const arr = [1, 2, 3, 4, 2, 3]

  expect(lastIndexOf(arr, 2)).toBe(4)
  expect(lastIndexOf(arr, 2, 2)).toBe(1)
  expect(lastIndexOf(arr, 2, -3)).toBe(1)
})

test('at', () => {
  const arr = [1, 2, 3]
  expect(at(arr)).toBe(1)
  expect(at(arr, -1)).toBe(3)
  expect(at(arr, -10)).toBe(undefined)
})

test('pull', () => {
  const arr = ['a', 'b', 'c', 'a', 'b', 'c']
  pull(arr, 'a', 'c')
  expect(arr).toStrictEqual(['b', 'b'])
})

test('remove', () => {
  const arr = [1, 2, 3, 4]
  const result = remove(arr)
  expect(arr).toStrictEqual([])
  expect(result).toStrictEqual([1, 2, 3, 4])

  const array = [1, 2, 3, 4]
  const evens = remove(array, function (n) {
    return n % 2 == 0
  })
  expect(array).toStrictEqual([1, 3])
  expect(evens).toStrictEqual([2, 4])
})

test('reverse', () => {
  expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1])
  expect(reverse([1])).toStrictEqual([1])
  expect(reverse([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1])
})

test('sortedIndex', () => {
  const arr = [1, 2, 3, 4, 4, 5, 5, 5, 6]
  expect(sortedIndex(arr, 0)).toBe(0)
  expect(sortedIndex(arr, 2)).toBe(1)
  expect(sortedIndex(arr, 4)).toBe(3)
  expect(sortedIndex(arr, 6)).toBe(8)
})

test('sortedIndexOf', () => {
  const arr = [1, 2, 3, 4, 4, 5, 5, 5, 6]
  expect(sortedIndexOf(arr, 0)).toBe(-1)
  expect(sortedIndexOf(arr, 2)).toBe(1)
  expect(sortedIndexOf(arr, 4)).toBe(3)
  expect(sortedIndexOf(arr, 6)).toBe(8)
})

test('sortedLastIndex', () => {
  const arr = [1, 2, 3, 4, 4, 5, 5, 5, 6]
  expect(sortedLastIndex(arr, 0)).toBe(0)
  expect(sortedLastIndex(arr, 2)).toBe(2)
  expect(sortedLastIndex(arr, 4)).toBe(5)
  expect(sortedLastIndex(arr, 6)).toBe(9)
})

test('sortedLastIndexOf', () => {
  const arr = [1, 2, 3, 4, 4, 5, 5, 5, 6]
  expect(sortedLastIndexOf(arr, 0)).toBe(-1)
  expect(sortedLastIndexOf(arr, 1)).toBe(0)
  expect(sortedLastIndexOf(arr, 4)).toBe(4)
  expect(sortedLastIndexOf(arr, 6)).toBe(8)
})
