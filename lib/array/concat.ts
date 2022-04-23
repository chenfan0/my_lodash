export function concat(arr: any[], ...values) {
  const result: any[] = [...arr]

  for (let i = 0; i < values.length; i++) {
    const item = values[i]
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        result.push(item[j])
      }
    } else {
      result.push(item)
    }
  }

  return result
}
