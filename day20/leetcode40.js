/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (nums, target) {
  const res = []
  const used = []

  const backtrack = (list, sum, start) => {
    if (sum === target) {
      res.push(list.concat())
      return
    }

    if (sum > target) {
      return
    }

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      if (!used[i]) {
        list.push(nums[i])
        used[i] = true
        backtrack(list, sum + nums[i], i + 1)
        used[i] = false
        list.pop()
      }
    }
  }

  nums.sort((a, b) => a - b)
  backtrack([], 0, 0)
  return res
}

let nums = [10, 1, 2, 7, 6, 1, 5],
  target = 8

const res = combinationSum2(nums, target)
console.log(res)
