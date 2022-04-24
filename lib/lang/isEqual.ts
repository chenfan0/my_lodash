import { types } from '../util/types'

export const enum TargetType {
  PRIMITIVE,
  COMMON,
  Set,
  Map,
  WEAKCOLLECTION,
  FUNCTION,
  OTHERS
}

function targetTypeMap(rawType: string) {
  switch (rawType) {
    case 'Undefined':
    case 'Null':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Symbol':
    case 'Bigint':
      return TargetType.PRIMITIVE
    case 'Object':
    case 'Array':
      return TargetType.COMMON
    case 'Set':
      return TargetType.Set
    case 'Map':
      return TargetType.Map
    case 'WeakSet':
    case 'WeakMap':
      return TargetType.WEAKCOLLECTION
    case 'Function':
      return TargetType.FUNCTION
    default:
      return TargetType.OTHERS
  }
}

export function isEqual(value, other): boolean {
  const typeValue = types(value)
  const typeOther = types(other)
  if (typeValue !== typeOther) return false
  const targetType = targetTypeMap(typeValue)

  switch (targetType) {
    case TargetType.PRIMITIVE:
    case TargetType.FUNCTION:
    case TargetType.WEAKCOLLECTION:
      return value === other
    case TargetType.COMMON:
      return isCommonEqual(value, other)
    case TargetType.Set:
      return isSetEqual(value, other)
    case TargetType.Map:
      return isMapEqual(value, other)
    case TargetType.OTHERS:
    default:
      return value.toString() === other.toString()
  }
}

function isCommonEqual(value: object | any[], other: object | any[]): boolean {
  const keysValue = Object.keys(value)
  const keysOther = Object.keys(other)

  if (keysValue.length !== keysOther.length) return false

  for (let i = 0; i < keysValue.length; i++) {
    const k1 = keysValue[i],
      k2 = keysOther[i]
    const v1 = value[k1],
      v2 = other[k2]
    if (!isEqual(v1, v2)) return false
  }
  return true
}

function isSetEqual(value: Set<any>, other: Set<any>): boolean {
  if (value.size !== other.size) return false
  for (const key of value) {
    if (!other.has(key)) return false
  }
  return true
}

function isMapEqual(value: Map<any, any>, other: Map<any, any>) {
  if (value.size !== other.size) return false

  for (const [k, v] of value) {
    if (!other.has(k)) return false
    const isEqualV = isEqual(v, other.get(k))
    if (!isEqualV) return false
  }
  return true
}
