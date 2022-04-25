export function intersection(...array: any[][]) {
  const n = array.length
  if (!n) return []

  const result: any[] = []
  // 确保arr0没有重复的值
  const arr0 = [...new Set(array[0])]
  if (n === 1) return arr0

  for (let i = 0; i < arr0.length; i++) {
    const item = arr0[i]
    let flag = true
    for (let j = 1; j < array.length; j++) {
      const arrJ = array[j]
      if (arrJ.includes(item)) {
        continue
      }
      flag = false
      break
    }
    if (flag) {
      result.push(item)
    }
  }

  return result
}
