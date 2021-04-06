/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const map = new Map()
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const value = map.get(C[i] + D[j]) || 0
      map.set(C[i] + D[j], value + 1)
    }
  }

  let count = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (map.has(-A[i] - B[j])) {
        count += map.get(-A[i] - B[j])
      }
    }
  }

  return count
}

let A = [1, 2],
  B = [-2, -1],
  C = [-1, 2],
  D = [0, 2]
