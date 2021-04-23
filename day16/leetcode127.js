/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
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
      if (isOneCharDiff(word, wordList[i])) {
        if (wordList[i] === endWord) return step + 1
        if (!visited[wordList[i]]) {
          q.push([wordList[i], step + 1])
          console.log(q)
          visited[wordList[i]] = true
        }
      }
    }
  }
  return 0
}

function isOneCharDiff(w1, w2) {
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

const res = ladderLength(beginWord, endWord, wordList)
console.log(res)
