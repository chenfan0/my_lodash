export function intersectionWith(...array: any[]) {
  const n = array.length
  if (!n) return []

  const result: any[] = []
  // 确保arr0没有重复的值
  const arr0 = [...new Set(array[0])]
  if (n === 1) return arr0
  const fn = array[array.length - 1] as (x, y) => boolean

  for (let i = 0; i < arr0.length; i++) {
    const item = arr0[i]
    let flag = true
    for (let j = 1; j < array.length - 1; j++) {
      const arrJ = array[j]
      let has = false
      for (let k = 0; k < arrJ.length; k++) {
        // 调用传进来的比较方法
        if (fn(item, arrJ[k])) {
          has = true
          break
        }
      }
      if (!has) {
        flag = false
        break
      }
    }
    if (flag) {
      result.push(item)
    }
  }

  return result
}
