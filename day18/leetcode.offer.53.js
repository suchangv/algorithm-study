/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = 0
  for (let i = 0; i <= nums.length; i++) {
    if (i === nums.length) {
      res += i
      continue
    }
    res += i
    res -= nums[i]
  }
  return res
}

console.log(missingNumber([0, 1, 3]))
