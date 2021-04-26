function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  const q = [[root, 'root']]
  let sum = 0
  while (q.length !== 0) {
    const node = q[0][0]
    const type = q[0][1]
    q.shift()

    if (node.left === null && node.right === null && type === 'left') {
      sum += node.val
    }

    if (node.left) {
      q.push([node.left, 'left'])
    }
    if (node.right) {
      q.push([node.right, 'right'])
    }
  }
  return sum
}
