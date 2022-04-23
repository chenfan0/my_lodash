export function difference(array: any[], values: any[]) {
  const result: any[] = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (values.includes(item)) {
      continue
    } else {
      result.push(item)
    }
  }

  return result
}
