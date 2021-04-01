let target = 7,
  nums = [2, 3, 1, 2, 4, 3]

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0,
    r = -1 // nums[l...r] 为我们的滑动窗口

  let sum = 0
  let res = nums.length + 1
  while (l < nums.length) {
    if (r + 1 < nums.length && sum < target) {
      sum += nums[++r]
    } else {
      sum -= nums[l++]
    }

    if (sum >= target) {
      res = Math.min(res, r - l + 1)
    }
  }
  if (res === nums.length + 1) return 0
  return res
}

let result = minSubArrayLen(target, nums)

console.log(result)
