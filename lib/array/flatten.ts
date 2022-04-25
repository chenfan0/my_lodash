function flat(array: any[], curDeep: number, deep: number): any[] {
  if (curDeep === deep) return array
  return array.reduce(
    (prev, item) => [...prev, ...(Array.isArray(item) ? flat(item, curDeep + 1, deep) : [item])],
    []
  )
}

export function flatten(array: any[], deep = 1) {
  return flat(array, 0, deep)
}
