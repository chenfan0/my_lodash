export function chunk(array: any[], size = 1) {
  const length = array.length
  if (!length || size < 1) return []
  if (size >= length) return array
  // 通过length和size就能知道返回的数组的长度
  const result = new Array(Math.ceil(length / size))
  let index = 0
  let resIndex = 0

  while (index < length) {
    // 直接通过slice对array数组进行切割，然后赋值给result数组
    result[resIndex++] = array.slice(index, (index += size))
  }

  return result
}
