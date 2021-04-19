/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0]
  let sum = nums.reduce((s, i) => s * i, 1)
  if (sum > 0) return sum

  let l = 0,
    r = nums.length - 1

  let max = -Infinity
  while (nums[l] > 0) l++
  while (nums[r] > 0) r++

  let sum1 = 1
  let sum2 = 1
  let sum3 = 1
  let sum4 = 1
  for (let i = 0; i < l; i++) {
    sum1 *= nums[i]
  }
  for (let i = l + 1; i < nums.length; i++) {
    sum2 *= nums[i]
  }
  for (let i = 0; i < r; i++) {
    sum3 *= nums[i]
  }
  for (let i = r + 1; i < nums.length; i++) {
    sum4 *= nums[i]
  }
  max = Math.max(sum1, sum2, sum3, sum4)

  return max
}

let nums = [-2, 2, 3, 0, -2, 4, -4]

let res = maxProduct(nums)
console.log(res)
