function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true

  return (
    Math.abs(height(root.left) - height(root.right) <= 1) &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

function height(root) {
  if (root === null) return 0
  return Math.max(height(root.left), height(root.right)) + 1
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

let res = isBalanced(root)
console.log(res)
