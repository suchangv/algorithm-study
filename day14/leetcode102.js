function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // const res = []
  // const queue = [root]
  // while (queue.length !== 0) {
  //   const currentLevelSize = queue.length
  //   res.push([])
  //   for (let i = 0; i < currentLevelSize; i++) {
  //     const node = queue.shift()
  //     res[res.length - 1].push(node.val)
  //     if (node.left) queue.push(node.left)
  //     if (node.right) queue.push(node.right)
  //   }
  // }
  // return res
  const res = []
  if (!root) return res
  const q = [[root, 0]]
  while (q.length !== 0) {
    const node = q[0][0]
    const level = q[0][1]
    q.shift()
    if (level === res.length) {
      res.push([])
    }

    res[level].push(node.val)

    if (node.left) {
      q.push([node.left, level + 1])
    }
    if (node.right) {
      q.push([node.right, level + 1])
    }
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

const res = levelOrder(root)
console.log(res)
