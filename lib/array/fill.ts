import { ensureInteger, ensurePositive } from './helper'

export function fill(array: any[], value: any, start = 0, end = array.length) {
  const n = array.length
  start = ensureInteger(start)
  end = ensureInteger(end)
  start = ensurePositive(start, n + start)
  end = ensurePositive(end, n + end)
  for (let i = start; i < end; i++) {
    array[i] = value
  }

  return array
}
