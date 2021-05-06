function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1)
}

function helper(nums, left, right) {
  if (left > right) return null

  let mid = Math.floor((left + right + 1) / 2)

  let root = new TreeNode(nums[mid])
  root.left = helper(nums, left, mid - 1)
  root.right = helper(nums, mid + 1, right)
  return root
}
