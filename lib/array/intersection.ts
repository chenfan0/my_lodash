import { intersectionWith } from './intersectionWith'

type IntersectionType = ((x, y) => boolean) | any[]

export function intersection(...array: IntersectionType[]) {
  const n = array.length
  if (!n) return []
  const fn = (x, y) => x === y
  array.push(fn)
  return intersectionWith(...array)
}
