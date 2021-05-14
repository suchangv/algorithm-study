// result = []
// def backtrack(路径, 选择列表):
//     if 满足结束条件:
//         result.add(路径)
//         return

//     for 选择 in 选择列表:
//         做选择
//         backtrack(路径, 选择列表)
//         撤销选择

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
  const list = []
  backtrack(res, list, nums)
  return res
}

function backtrack(res, list, nums) {
  if (list.length === nums.length) {
    res.push(list.concat())
    return
  }

  for (let num of nums) {
    if (!list.includes(num)) {
      list.push(num)
      backtrack(res, list, nums)
      list.pop()
    }
  }
}

let nums = [1, 2, 3]
const res = permute(nums)
console.log(res)
