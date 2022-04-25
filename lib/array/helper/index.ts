export function ensureInteger(value: number) {
  return Number.isInteger(value) ? value : value >= 0 ? Math.floor(value) : Math.ceil(value)
}

export function ensurePositive(value: number, replace: number = Math.abs(value)) {
  return value >= 0 ? value : replace
}
