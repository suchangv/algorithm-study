/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let res = 0
  for (let i = 0; i < points.length; i++) {
    const map = new Map()
    for (let j = 0; j < points.length; j++) {
      if (j !== i) {
        const distance = dis(points[i], points[j])
        const value = map.get(distance) || 0
        map.set(distance, value + 1)
      }
    }
    for (let [key, value] of map) {
      if (value >= 2) {
        res += value * (value - 1)
      }
    }
  }
  return res
}

function dis(p1, p2) {
  return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
}

let points = [
  [0, 0],
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
]
let result = numberOfBoomerangs(points)
console.log(result)
