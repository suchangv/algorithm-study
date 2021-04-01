const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    res = 0

  while (l < r) {
    res = Math.max(res, Math.min(height[l], height[r]) * (r - l))
    if (height[l] < height[r]) l++
    else r--
  }

  return res
}

let max = maxArea(height)
console.log(max)
