function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const paths = []
  if (!root) return paths
  if (root.left === null && root.right === null && sum === root.val) {
    return [[root.val]]
  }
  let left = pathSum(root.left, sum - root.val)
  left.forEach((item) => {
    paths.push([root.val, ...item])
  })
  let right = pathSum(root.right, sum - root.val)
  right.forEach((item) => {
    paths.push([root.val, ...item])
  })
  return paths
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

const res = pathSum(root, 11)
console.log(res)
