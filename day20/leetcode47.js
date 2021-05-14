/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  const used = []

  const backtrack = (list) => {
    if (list.length === nums.length) {
      res.push(list.concat())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
        continue
      }

      list.push(nums[i])
      used[i] = true
      backtrack(list)
      list.pop()
      used[i] = false
    }
  }

  nums.sort((x, y) => x - y)
  backtrack([])
  return res
}

let nums = [3, 3, 0, 3]
const res = permuteUnique(nums)
console.log(res)
