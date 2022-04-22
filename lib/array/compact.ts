export function compact(array: any[]) {
  return array.filter((item) => {
    if (item) return item
  })
}
