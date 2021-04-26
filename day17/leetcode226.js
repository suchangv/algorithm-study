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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  invert(root)
  return root
}

function invert(root) {
  if (!root) return
  let temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
}

let root = new TreeNode(4)
root.left = new TreeNode(7)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(6)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(1)

const res = invertTree(root)
console.log(res)
