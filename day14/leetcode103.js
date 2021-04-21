function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = []
  if (!root) return res
  const q = [[root, 0]]
  let bool = false
  while (q.length !== 0) {
    const first = q[0]
    const node = first[0]
    const level = first[1]
    q.shift()

    if (level === res.length) {
      bool = !bool
      res.push([])
    }
    if (bool) {
      res[level].push(node.val)
    } else {
      res[level].unshift(node.val)
    }

    if (node.left) q.push([node.left, level + 1])
    if (node.right) q.push([node.right, level + 1])
  }
  return res
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.left.left = new TreeNode(18)
root.left.right = new TreeNode(20)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const res = zigzagLevelOrder(root)
console.log(res)
