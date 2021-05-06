function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0
  if (!root) return 0
  let left = rangeSumBST(root.left, low, high)
  if (root.val >= low && root.val <= high) {
    sum += root.val
  }
  let right = rangeSumBST(root.right, low, high)
  return sum + left + right
}

const root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(7)
root.right.right = new TreeNode(18)

const res = rangeSumBST(root, 7, 15)
console.log(res)
