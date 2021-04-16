/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let start = word[0]
  let startPoints = []
  // 寻找start的坐标
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === start) {
        startPoints.push(new Point(x, y))
      }
    }
  }
  if(startPoints.length===0) return false
}

function Point(x, y) {
  this.x = x
  this.y = y
}

/**
 * 
 * @param {string[][]} board 
 * @param {Point} point 
 * @param {string} char 
 */
function isAround(board,point,char){
  if(point.x)
}

let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ],
  word = 'ABCCED'
let res = exist(board, word)
console.log(res)
