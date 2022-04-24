export function fill(array: any[], value: any, start = 0, end = array.length) {
  for (let i = start; i < end; i++) {
    array[i] = value
  }

  return array
}
