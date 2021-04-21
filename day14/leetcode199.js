function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = []
  if (!root) return res
  const q = [[root, 0]]
  while (q.length !== 0) {
    const node = q[0][0]
    const level = q[0][1]
    q.shift()
    if (level === res.length) {
      // 新层级
      res.push(node.val)
    }
    if (node.right) q.push([node.right, level + 1])
    if (node.left) q.push([node.left, level + 1])
  }
  return res
}
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
root.right.right = new TreeNode(4)

const res = rightSideView(root)
console.log(res)
