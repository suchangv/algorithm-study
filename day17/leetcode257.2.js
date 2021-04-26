function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = []
  const q = [[root, '']]
  while (q.length !== 0) {
    const node = q[0][0]
    let path = q[0][1]
    q.shift()

    path += node.val.toString()
    if (node.left === null && node.right === null) {
      paths.push(path)
    }
    path += '->'
    if (node.left) {
      q.push([node.left, path])
    }
    if (node.right) {
      q.push([node.right, path])
    }
  }
  return paths
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

const res = binaryTreePaths(root)
console.log(res)
