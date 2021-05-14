/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const used = []

  const backtrack = (list) => {
    if (list.length === nums.length) {
      res.push(list.concat())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        list.push(nums[i])
        used[i] = true
        backtrack(list)
        list.pop()
        used[i] = false
      }
    }
  }

  backtrack([])
  return res
}

let nums = [1, 1, 2, 3]
const res = permute(nums)
console.log(res)
