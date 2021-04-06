/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const nums1 = nums[i]
    const nums2 = target - nums1

    if (map.has(nums2)) {
      return [map.get(nums2), i]
    }
    map.set(nums1, i)
  }
}

let nums = [2, 7, 11, 15],
  target = 9

let result = twoSum(nums, target)
console.log(result)
