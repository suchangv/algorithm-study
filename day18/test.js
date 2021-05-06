function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function dfs(root) {
  if (!root) return
  console.log(root.val)
  dfs(root.left)
  dfs(root.right)
}

function bfs(root) {
  const q = []
  q.push(root)
  while (q.length !== 0) {
    const node = q.shift()
    console.log(node.val)
    if (node.left) {
      q.push(node.left)
    }
    if (node.right) {
      q.push(node.right)
    }
  }
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

// dfs(root)
bfs(root)
