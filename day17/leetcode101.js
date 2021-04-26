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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true

  const left = root.left
  const right = root.right

  const q1 = [left]
  const q2 = [right]
  while (q1.length !== 0 && q2.length !== 0) {
    const node1 = q1.shift()
    const node2 = q2.shift()
    if (node1 !== null && node2 !== null) {
      if (node1.val !== node2.val) {
        return false
      }
      q1.push(node1.left)
      q1.push(node1.right)
      q2.push(node2.right)
      q2.push(node2.left)
    } else if (node1 === null && node2 === null) {
    } else {
      return false
    }
  }

  return true
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)

root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)

root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

const res = isSymmetric(root)
console.log(res)
