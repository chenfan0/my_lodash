export function fromEntries(array: [any, any][]) {
  const result = {}
  const n = array.length
  if (!n) return result

  for (let i = 0; i < n; i++) {
    const [key, value] = array[i]
    result[String(key)] = value
  }

  return result
}
