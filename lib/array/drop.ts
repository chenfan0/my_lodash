import { ensureInteger, ensurePositive } from './helper'

export function drop(array: any[], n = 1) {
  const arrayLength = array.length
  n = ensureInteger(n)
  n = ensurePositive(n, arrayLength + n)
  const resultLength = arrayLength - n
  if (!resultLength) return []
  const result = new Array(resultLength)
  for (let i = n; i < arrayLength; i++) {
    result[i - n] = array[i]
  }
  return result
}
