/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const sort = Array.from(set).sort()
    if (sort.find((x) => x === nums[i] - t) <= nums[i] + t) return true

    set.add(nums[i])
    if (set.size === k + 1) {
      set.delete(nums[i - k])
    }
  }
  return false
}

let nums = [1, 2, 3, 1],
  k = 3,
  t = 0

let res = containsNearbyAlmostDuplicate(nums, k, t)
console.log(res)
