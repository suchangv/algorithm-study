function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0

  let res = findPath(root, targetSum)
  res += pathSum(root.left, targetSum)
  res += pathSum(root.right, targetSum)

  return res
}

function findPath(node, num) {
  if (!node) return 0
  let res = 0
  if (node.val === num) {
    res += 1
  }

  res += findPath(node.left, num - node.val)
  res += findPath(node.right, num - node.val)

  return res
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

const res = pathSum(root, 3)
console.log(res)
