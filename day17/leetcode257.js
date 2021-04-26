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

  if (root === null) {
    return paths
  }

  if (root.left === null && root.right === null) {
    return [root.val.toString()]
  }

  let leftS = binaryTreePaths(root.left)
  for (let i = 0; i < leftS.length; i++) {
    paths.push(root.val.toString() + '->' + leftS[i])
  }
  let rightS = binaryTreePaths(root.right)
  for (let i = 0; i < rightS.length; i++) {
    paths.push(root.val.toString() + '->' + rightS[i])
  }

  return paths

  // const paths = []
  // const construct_paths = (root, path) => {
  //   if (root) {
  //     path += root.val.toString()
  //     if (root.left === null && root.right === null) {
  //       paths.push(path)
  //     } else {
  //       path += '->'
  //       construct_paths(root.left, path)
  //       construct_paths(root.right, path)
  //     }
  //   }
  // }
  // construct_paths(root, '')
  // return paths
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
