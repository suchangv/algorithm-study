function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const q = []
  q.push([root, root.val, [root.val]])
  const res = []
  while (q.length !== 0) {
    const node = q[0][0]
    const sum = q[0][1]
    const path = q[0][2]
    q.shift()

    if (node.left === null && node.right === null && sum === targetSum) {
      res.push(path)
    }

    if (node.left) {
      q.push([node.left, sum + node.left.val, [...path, node.left.val]])
    }
    if (node.right) {
      q.push([node.right, sum + node.right.val, [...path, node.right.val]])
    }
  }
  return res
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
