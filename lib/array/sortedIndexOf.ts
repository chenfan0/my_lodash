export function sortedIndexOf(array: number[], value: number) {
  const n = array.length
  if (!n) return -1

  let i = 0
  let j = n

  while (i < j) {
    const mid = (i + j) >> 1
    const item = array[mid]

    if (item >= value) {
      // 这里j = mid 是因为当前的mid值可能是最后的结果
      // 所以不能 j = mid - 1
      j = mid
    } else {
      i = mid + 1
    }
  }
  return array[i] === value ? i : -1
}
