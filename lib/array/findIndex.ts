export type FindIndexFnType = (value, index: number, array: any[]) => boolean

export function findIndex(array: any[], fn: FindIndexFnType) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (fn(value, i, array)) {
      return i
    }
  }
  return -1
}
