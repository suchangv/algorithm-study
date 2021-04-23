/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0
  const q = []
  q.push([beginWord, 1])
  const visited = {}
  visited[beginWord] = true
  while (q.length !== 0) {
    const word = q[0][0]
    const step = q[0][1]
    q.shift()

    for (let i = 0; i < wordList.length; i++) {
      // 找到差距只有一个字母的那个词
      if (similar(word, wordList[i])) {
        if (wordList[i] === endWord) {
        }
        if (!visited[wordList[i]]) {
          q.push([wordList[i], step + 1])
          console.log(q)
          if (wordList[i] !== endWord) {
            visited[wordList[i]] = true
          }
        }
      }
    }
  }
  return 0
}

function similar(w1, w2) {
  if (w1.length !== w2.length) return false
  let count = 0
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) count++
    if (count > 1) return false
  }
  return true
}

let beginWord = 'hit',
  endWord = 'cog',
  wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']

const res = findLadders(beginWord, endWord, wordList)
console.log(res)
