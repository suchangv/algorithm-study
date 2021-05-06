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
  let res = 0
  if (!root) return res
  const q = []
  q.push([root, root.val])
  while (q.length !== 0) {
    const node = q[0][0]
    let sum = q[0][1]
    q.shift()

    if (node.left === null && node.right === null) {
      res += sum
    }

    if (node.left) {
      q.push([node.left, sum * 10 + node.left.val])
    }
    if (node.right) {
      q.push([node.right, sum * 10 + node.right.val])
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

const res = sumNumbers(root, 11)
console.log(res)
