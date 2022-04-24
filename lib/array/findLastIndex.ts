import { FnType } from '../type/array.type'

export function findLastIndex(array: any[], fn: FnType) {
  for (let i = array.length - 1; i >= 0; i--) {
    const value = array[i]
    if (fn(value, i, array)) {
      return i
    }
  }
  return -1
}
