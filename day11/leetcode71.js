/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = []
  const paths = path.split('/')

  for (let p of paths) {
    if (p === '' || p === '.') continue
    else if (p === '..') {
      stack.pop()
      stack.pop()
      continue
    } else {
      stack.push(p)
    }
    stack.push('/')
  }
  stack.pop()
  return '/' + stack.join('')
}
let path = '/home//foo/'
let res = simplifyPath(path)
console.log(res)
