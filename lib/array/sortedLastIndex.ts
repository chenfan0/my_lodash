export function sortedLastIndex(array: number[], value: number) {
  const n = array.length
  if (!n) return 0

  let i = 0
  let j = n

  while (i < j) {
    const mid = (i + j) >> 1
    const item = array[mid]
    if (item > value) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return i
}
