export function sortedIndex(array: number[], values: number) {
  const n = array.length
  if (!n) return 0

  let i = 0
  let j = n

  while (i < j) {
    const mid = (i + j) >> 1

    if (array[mid] >= values) {
      // 这里 j = mid 是因为mid可能是最后的结果
      j = mid
    } else {
      i = mid + 1
    }
  }
  return i
}
