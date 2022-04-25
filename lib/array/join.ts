export function join(array: any[], separator = '') {
  const n = array.length
  if (!n) return ''
  let result = ''

  for (let i = 0; i < n; i++) {
    // 如果当前项为 undefined 或者 null 则将该值转换为 ''
    const item = array[i] === undefined || array[i] === null ? '' : String(array[i])
    if (i === n - 1) {
      result += item
    } else {
      result += item + separator
    }
  }
  return result
}
