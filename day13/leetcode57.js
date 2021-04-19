/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)

  // 合并区间
  const res = []
  for (let i of intervals) {
    for (let j = 0; j < res.length; j++) {
      let re = res[j]
      if ((i[0] >= re[0] && i[0] <= re[1]) || (re[0] >= i[0] && re[0] <= i[1])) {
        // 可合并
        let left = Math.min(i[0], re[0])
        let right = Math.max(i[1], re[1])
        i[0] = left
        i[1] = right
      } else {
        continue
      }
      res.splice(j, 1)
      j--
    }
    res.push(i)
  }

  // 排序
  res.sort((x, y) => x[0] - y[0])
  return res
}

let intervals = [
    [1, 3],
    [6, 9]
  ],
  newInterval = [2, 5]
const res = insert(intervals, newInterval)
console.log(res)
