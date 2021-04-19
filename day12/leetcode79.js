/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let char of word) {
    search(board, char)
  }
}

function search(board, char) {}

let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ],
  word = 'ABCCED'
let res = exist(board, word)
console.log(res)
