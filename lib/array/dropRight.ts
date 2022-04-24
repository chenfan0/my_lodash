export function dropRight(array: any[], n = 1) {
  const arrayLength = array.length
  const resultLength = arrayLength - n

  if (!resultLength) return []
  const result = new Array(resultLength)

  for (let i = 0; i < resultLength; i++) {
    result[i] = array[i]
  }

  return result
}
