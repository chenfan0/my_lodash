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

function ensureInteger(value: number) {
  return Number.isInteger(value) ? value : value >= 0 ? Math.floor(value) : Math.ceil(value)
}

function ensurePositive(value: number, replace: number = Math.abs(value)) {
  return value >= 0 ? value : replace
}
