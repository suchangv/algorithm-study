function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false
  }
  
  if (root.left === null && root.right === null) {
    return targetSum === root.val
  }

  if (hasPathSum(root.left, targetSum - root.val)) {
    return true
  }

  if (hasPathSum(root.right, targetSum - root.val)) {
    return true
  }

  return false
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
const res = hasPathSum(root, 4)
console.log(res)
