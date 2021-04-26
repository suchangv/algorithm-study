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
var isSymmetric = function (root) {
  if (root === null) return true

  const left = root.left
  const right = root.right

  return order(left, right)
}

function order(left, right) {
  if (left === null && right === null) return true
  else if (left === null || right === null) return false
  
  if (left.val !== right.val) return false
  if (!order(left.left, right.right)) {
    return false
  }
  if (!order(left.right, right.left)) {
    return false
  }

  return true
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)

root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)

root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

const res = isSymmetric(root)
console.log(res)
