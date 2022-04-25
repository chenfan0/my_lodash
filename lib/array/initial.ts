import { slice } from './slice'

export function initial(array: any[]) {
  const length = array.length
  if (length <= 1) return []
  return slice(array, 0, -1)
}
