import { ensureInteger, ensurePositive } from './helper'

export function slice(array: any[], start = 0, end = array.length) {
  const length = array.length
  // 确保start和end为整数
  start = ensureInteger(start)
  end = ensureInteger(end)
  // 确保start和end为正数
  start = ensurePositive(start, length + start)
  end = ensurePositive(end, length + end)

  if (!length) return []
  if (start >= end) return []

  const result = new Array(end - start)

  for (let i = start; i < end; i++) {
    result[i - start] = array[i]
  }

  return result
}
