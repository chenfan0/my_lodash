export function types(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
