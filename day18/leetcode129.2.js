function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return dfs(root, 0)
}

function dfs(root, prevSum) {
  if (!root) return 0
  let sum = prevSum * 10 + root.val
  if (root.left === null && root.right == null) {
    return sum
  }
  return dfs(root.left, sum) + dfs(root.right, sum)
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

const res = sumNumbers(root)
console.log(res)
