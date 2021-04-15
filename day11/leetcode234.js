const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let cur = head
  let middle = head
  while (cur && cur.next) {
    cur = cur.next.next
    middle = middle.next
  }
  middle = reverseList(middle)
  let result = true
  let p1 = head
  let p2 = middle
  while (p1 && p2 && result) {
    if (p1.val !== p2.val) result = false
    p2 = p2.next
    p1 = p1.next
  }
  middle = reverseList(middle)
  return result
}

var reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

let head = createLinkedList([1, 2, 3, 2, 1])
let result = isPalindrome(head)
console.log(result)
printLinkedList(head)
