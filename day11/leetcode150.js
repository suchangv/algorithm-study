/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  for (let c of tokens) {
    if (['+', '-', '*', '/'].includes(c)) {
      let num2 = stack.pop()
      let num1 = stack.pop()
      let result = eval(`${num1} ${c} ${num2}`)

      if (c === '/') {
        result = num1 / num2
        if (result > 0) result = Math.floor(result)
        else result = Math.ceil(result)
      }

      stack.push(result)
      continue
    }
    stack.push(c)
  }
  return stack[0]
}

let tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
let res = evalRPN(tokens)
console.log(res)
