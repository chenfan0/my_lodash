import { isEqual } from '../lang/isEqual'

export function matches(source: object) {
  const entries = Object.entries(source)
  return function (obj: object) {
    for (const [key, value] of entries) {
      if (!isEqual(obj[key], value)) {
        return false
      }
    }
    return true
  }
}
