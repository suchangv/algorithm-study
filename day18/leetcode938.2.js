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
  const q = []
  q.push(root)
  while (q.length !== 0) {
    const node = q.shift()
    if (node.left) {
      q.push(node.left)
    }
    console.log(node.val)
    if (node.val >= low && node.val <= high) {
      sum += node.val
    }
    if (node.right) {
      q.push(node.right)
    }
  }
  return sum
}

const root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(15)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(7)
root.right.right = new TreeNode(18)

const res = rangeSumBST(root, 7, 15)
console.log(res)
