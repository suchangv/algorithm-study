/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let closeNum = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1,
      r = nums.length - 1

    while (l < r) {
      let threeNum = nums[l] + nums[r] + nums[i]
      if (Math.abs(threeNum - target) < Math.abs(closeNum - target)) {
        closeNum = threeNum
      }

      if (threeNum > target) {
        r--
      } else if (threeNum < target) {
        l++
      } else {
        return target
      }
    }
  }

  return closeNum
}

let nums = [-1, 2, 1, -4],
  target = 1
