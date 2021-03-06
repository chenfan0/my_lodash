import { FnType } from '../type/array.type'

export function findIndex(array: any[], fn: FnType) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (fn(value, i, array)) {
      return i
    }
  }
  return -1
}
