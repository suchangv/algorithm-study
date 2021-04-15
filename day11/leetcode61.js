const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return head
  let len = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    len++
  }
  cur.next = head

  cur = head
  for (let i = 0; i < len - (k % len) - 1; i++) {
    cur = cur.next
  }
  let next = cur.next
  cur.next = null
  return next
}
let head = createLinkedList([0, 1, 2])
let k = 1
head = rotateRight(head, k)
printLinkedList(head)
