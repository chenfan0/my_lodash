import { pull } from './pull'

export function remove(
  array: any[],
  predicate?: (value: any, index: number, array: any[]) => boolean
) {
  const n = array.length
  if (!n) return []
  if (!predicate) {
    // 没有传入predicate参数，默认将array数组清空
    const result = [...array]
    pull(array, ...result)
    return result
  }
  const removes: any = []

  for (let i = 0; i < n; i++) {
    const value = array[i]
    if (predicate(value, i, array)) {
      removes.push(value)
    }
  }
  pull(array, ...removes)
  return removes
}
