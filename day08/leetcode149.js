/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length <= 2) return points.length

  let res = 0
  const map = new Map()
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let k = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0])
      if (k === Infinity || k === -Infinity) {
        let x = `x=${points[i][0]}`
        const value = map.get(x) || 0
        map.set(x, value + 1)
        continue
      }
      let c = points[i][1] - k * points[i][0]

      let y = `${k.toFixed(6)}x+${c.toFixed(6)}`
      const value = map.get(y) || 0
      map.set(y, value + 1)
    }
  }

  for (let [_, value] of map) {
    res = Math.max(res, value)
  }

  for (let i = 0; i < 100; i++) {
    if (i * i - i - 2 * res === 0) return i
  }

  return res
}

let points = [
  [7, 3],
  [19, 19],
  [-16, 3],
  [13, 17],
  [-18, 1],
  [-18, -17],
  [13, -3],
  [3, 7],
  [-11, 12],
  [7, 19],
  [19, -12],
  [20, -18],
  [-16, -15],
  [-10, -15],
  [-16, -18],
  [-14, -1],
  [18, 10],
  [-13, 8],
  [7, -5],
  [-4, -9],
  [-11, 2],
  [-9, -9],
  [-5, -16],
  [10, 14],
  [-3, 4],
  [1, -20],
  [2, 16],
  [0, 14],
  [-14, 5],
  [15, -11],
  [3, 11],
  [11, -10],
  [-1, -7],
  [16, 7],
  [1, -11],
  [-8, -3],
  [1, -6],
  [19, 7],
  [3, 6],
  [-1, -2],
  [7, -3],
  [-6, -8],
  [7, 1],
  [-15, 12],
  [-17, 9],
  [19, -9],
  [1, 0],
  [9, -10],
  [6, 20],
  [-12, -4],
  [-16, -17],
  [14, 3],
  [0, -1],
  [-18, 9],
  [-15, 15],
  [-3, -15],
  [-5, 20],
  [15, -14],
  [9, -17],
  [10, -14],
  [-7, -11],
  [14, 9],
  [1, -1],
  [15, 12],
  [-5, -1],
  [-17, -5],
  [15, -2],
  [-12, 11],
  [19, -18],
  [8, 7],
  [-5, -3],
  [-17, -1],
  [-18, 13],
  [15, -3],
  [4, 18],
  [-14, -15],
  [15, 8],
  [-18, -12],
  [-15, 19],
  [-9, 16],
  [-9, 14],
  [-12, -14],
  [-2, -20],
  [-3, -13],
  [10, -7],
  [-2, -10],
  [9, 10],
  [-1, 7],
  [-17, -6],
  [-15, 20],
  [5, -17],
  [6, -6],
  [-11, -8]
]

let result = maxPoints(points)
console.log(result)
