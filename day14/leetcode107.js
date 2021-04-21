function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var levelOrderBottom = function (root) {
  const res = []
  if (!root) return res
  const q = [[root, 0]]
  while (q.length !== 0) {
    const first = q.shift()
    const node = first[0]
    const level = first[1]

    if (level === res.length) {
      res.unshift([])
    }
    res[0].push(node.val)
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

const res = levelOrderBottom(root)
console.log(res)
