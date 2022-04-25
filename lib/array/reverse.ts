export function reverse(array: any[]) {
  const n = array.length
  if (n <= 1) return array
  let i = 0
  let j = n - 1

  while (i < j) {
    ;[array[i], array[j]] = [array[j], array[i]]
    i++
    j--
  }

  return array
}
