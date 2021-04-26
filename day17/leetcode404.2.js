function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0

  let left = sumOfLeftLeaves(root.left)
  let right = sumOfLeftLeaves(root.right)

  // 是左叶子
  if (root.left && root.left.left === null && root.left.right === null) {
    return left + right + root.left.val
  }

  return left + right
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const res = sumOfLeftLeaves(root)
console.log(res)
