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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

  const q = []
  q.push([root, 1])
  let max = 0
  while (q.length !== 0) {
    const node = q[0][0]
    const depth = q[0][1]
    q.shift()
    max = Math.max(depth, max)

    if (node.left) {
      q.push([node.left, depth + 1])
    }
    if (node.right) {
      q.push([node.right, depth + 1])
    }
  }
  return max
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

let res = maxDepth(root)
console.log(res)
