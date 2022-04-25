import { ensureInteger, ensurePositive } from './helper'

export function at(array: any[], index = 0) {
  const n = array.length
  if (!n) return undefined
  index = ensureInteger(index)
  index = ensurePositive(index, index + n)

  return array[index]
}
