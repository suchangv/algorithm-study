/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
}

let nums = [1, 0, -1, 0, -2, 2],
  target = 0

let result = fourSum(nums, target)

console.log(result)
