export function sortedLastIndexOf(array: number[], value: number) {
  const n = array.length
  if (!n) return -1

  let i = 0
  let j = n

  while (i < j) {
    const mid = (i + j) >> 1
    const item = array[mid]

    if (item > value) {
      j = mid - 1
    } else {
      // 因为 (i + j) >> 1 得到的结果可能和i相等
      // 这里需要判断 i 是否已经等于mid，如果是则直接跳出循环
      if (i === mid) break
      i = mid
    }
  }
  return array[i] === value ? i : -1
}
