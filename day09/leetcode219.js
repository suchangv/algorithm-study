/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const record = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (record.has(nums[i])) {
      return true
    }
    record.add(nums[i])
    if (record.size === k + 1) {
      record.delete(nums[i - k])
    }
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
let k = 3
let result = containsNearbyDuplicate(nums, k)

console.log(result)
