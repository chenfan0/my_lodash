// 处理数组下标为小数时
export function ensureInteger(value: number) {
  return Number.isInteger(value) ? value : value >= 0 ? Math.floor(value) : Math.ceil(value)
}

// 处理数组下标为负数时
export function ensurePositive(value: number, replace: number = Math.abs(value)) {
  return value >= 0 ? value : replace
}
