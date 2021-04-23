const { createLinkedList, ListNode, printLinkedList } = require('./test')
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let head = new ListNode(0)
  let cur = head

  let curLists = []
  for (let i = 0; i < lists.length; i++) {
    curLists[i] = lists[i]
  }

  while (curLists.some((cur) => cur !== null)) {
    let min = Infinity
    let minIndex
    for (let i = 0; i < curLists.length; i++) {
      if (curLists[i] === null) continue
      if (min > curLists[i].val) {
        min = curLists[i].val
        minIndex = i
      }
    }
    curLists[minIndex] = curLists[minIndex].next
    cur.next = new ListNode(min)
    cur = cur.next
  }

  return head.next
}
let lists = [createLinkedList([1, 4, 5]), createLinkedList([1, 3, 4]), createLinkedList([2, 6])]
const res = mergeKLists(lists)
printLinkedList(res)
