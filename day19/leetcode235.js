function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else {
    return root
  }
}

const root = new TreeNode(6)
root.left = new TreeNode(2)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)
root.right = new TreeNode(8)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)

const res = lowestCommonAncestor(root, 2, 8)
console.log(res)
