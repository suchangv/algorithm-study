/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const t = []
  const ans = []
  const n = nums.length

  const dfs = (cur) => {
    if (cur === nums.length) {
      ans.push(t.slice())
      return
    }
    t.push(nums[cur])
    dfs(cur + 1)
    t.pop(t.length - 1)
    dfs(cur + 1)
  }
  dfs(0)
  return ans
}

let nums = [1, 2, 3, 4]
let res = subsets(nums)
console.log(res)
