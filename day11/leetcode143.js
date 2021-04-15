const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) return head

  let arr = []
  let cur = head
  while (cur) {
    arr.push(cur)
    cur = cur.next
  }

  let i = 0,
    j = arr.length - 1
  while (i < j) {
    arr[i].next = arr[j]
    i++
    if (i === j) break
    arr[j].next = arr[i]
    j--
  }
  arr[i].next = null
}

let head = createLinkedList([1, 2, 3, 4])
reorderList(head)
printLinkedList(head)
