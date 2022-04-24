import { expect, test, describe } from 'vitest'
import { isEqual } from '../../lang/isEqual'

describe('types', () => {
  test('primitive', () => {
    let x: any = 1
    let y = 2
    expect(isEqual(x, y)).toBe(false)
    x = true
    expect(isEqual(x, y)).toBe(false)
  })

  test('object and array', () => {
    let obj1: any = {}
    let obj2: any = {}
    let arr1: any[] = []
    let arr2: any[] = []
    expect(isEqual(obj1, obj2)).toBe(true)
    expect(isEqual(arr1, arr2)).toBe(true)
    obj1.name = 'obj1'
    expect(isEqual(obj1, obj2)).toBe(false)
    obj2.name = 'obj2'
    expect(isEqual(obj1, obj2)).toBe(false)

    // nested obj
    obj1 = {
      name: 'obj',
      sub: {
        name: 'sub'
      }
    }
    obj2 = {
      name: 'obj',
      sub: {
        name: 'sub'
      }
    }
    expect(isEqual(obj1, obj2)).toBe(true)

    arr1 = [1, 2, 3]
    arr2 = [1, 2, 3]
    expect(isEqual(arr1, arr2)).toBe(true)
    arr2[0] = 2
    expect(isEqual(arr1, arr2)).toBe(false)
  })

  test('map, set', () => {
    const set1 = new Set([1, 3, 2])
    const set2 = new Set([1, 2, 3])
    expect(isEqual(set1, set2)).toBe(true)
    set1.add(4)
    set2.add(5)
    expect(isEqual(set1, set2)).toBe(false)

    const map1: any = new Map([['name', 'map']])
    const map2: any = new Map([['name', 'map']])
    expect(isEqual(map1, map2)).toBe(true)
    map1.set('sub', { name: 'sub' })
    map2.set('sub', { name: 'sub' })
    expect(isEqual(map1, map2)).toBe(true)
  })

  test('others', () => {
    const reg1 = /^/
    const reg2 = /^/
    const date1 = new Date()
    const date2 = date1
    expect(isEqual(reg1, reg2)).toBe(true)
    expect(isEqual(date1, date2)).toBe(true)
  })
})
