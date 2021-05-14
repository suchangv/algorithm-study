/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (nums, target) {
  const res = []

  const backtrack = (list, sum, start) => {
    if (sum === target) {
      res.push(list.concat())
      return
    }

    if (sum > target) {
      return
    }

    for (let i = start; i < nums.length; i++) {
      let num = nums[i]
      list.push(num)
      backtrack(list, sum + num, i)
      list.pop()
    }
  }

  backtrack([], 0, 0)
  return res
}

let nums = [2, 3, 6, 7],
  target = 7

const res = combinationSum(nums, target)
console.log(res)
