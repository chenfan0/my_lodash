import { ensureInteger, ensurePositive } from './helper'

export function lastIndexOf(array: any[], value, fromIndex = array.length - 1) {
  const n = array.length
  if (!n) return -1
  fromIndex = ensureInteger(fromIndex)
  fromIndex = ensurePositive(fromIndex, n + fromIndex)

  for (let i = fromIndex; i >= 0; i--) {
    const item = array[i]
    if (item === value) {
      return i
    }
  }

  return -1
}
