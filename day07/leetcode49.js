/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // let res = []
  // const map = new Map()
  // for (let str of strs) {
  //   const strMap = getMap(str)
  //   if (map.has(strMap)) {
  //     res[map.get(strMap)].push(str)
  //   } else {
  //     map.set(strMap, res.length)
  //     res.push([str])
  //   }
  // }
  // return res
  // const map = {}
  // for (let str of strs) {
  //   let newStr = str.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  //   map[newStr] ? map[newStr].push(str) : (map[newStr] = [str])
  // }
  // return Object.values(map)

  const map = {}
  for (let str of strs) {
    let hash = getHash(str)
    map[hash] ? map[hash].push(str) : (map[hash] = [str])
  }
  return Object.values(map)
}

// function getMap(str) {
//   let arr = new Array(26)
//   arr.fill(0)
//   for (let c of str) {
//     arr[c.charCodeAt() - 97] = arr[c.charCodeAt() - 97] + 1
//   }
//   return arr
// }

function getHash(str) {
  if (str.length <= 0) return 0

  let res = 0
  for (let c of str) {
    let code = c.charCodeAt()
    res += code * 123 + (code * code) / 123 + code * 134
  }
  return res
}

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

let result = groupAnagrams(strs)

console.log(result)
