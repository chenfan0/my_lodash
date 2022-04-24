export function drop(array: any[], n = 1) {
  const arrayLength = array.length
  const resultLength = arrayLength - n
  if (!resultLength) return []
  const result = new Array(resultLength)
  for (let i = n; i < arrayLength; i++) {
    result[i - n] = array[i]
  }
  return result
}
