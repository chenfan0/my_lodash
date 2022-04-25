export function pull(array: any[], ...values) {
  const n1 = array.length
  const n2 = values.length
  if (!n1 || !n2) return array

  for (let i = 0; i < n2; i++) {
    const delItem = values[i]

    while (array.includes(delItem)) {
      const delIndex = array.indexOf(delItem)
      array.splice(delIndex, 1)
    }
  }

  return array
}
