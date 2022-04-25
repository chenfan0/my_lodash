export function sortedIndex(array: number[], values: number) {
  const n = array.length
  if (!n) return 0

  let i = 0
  let j = n

  while (i < j) {
    const mid = (i + j) >> 1

    if (array[mid] > values) {
      j = mid - 1
    } else {
      // 这里 i = mid + 1，是因为就是当前mid的值和value相等，那么最终插入的结果也是在下一个
      i = mid + 1
    }
  }
  return i
}
