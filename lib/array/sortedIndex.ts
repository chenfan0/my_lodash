export function sortedIndex(array: number[], values: number) {
  const n = array.length
  if (!n) return 0

  let i = 0
  let j = n

  while (i < j) {
    const mid = Math.floor((i + j) / 2)

    if (array[mid] > values) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return i
}
