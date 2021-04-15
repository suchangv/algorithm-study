const { ListNode, createLinkedList, printLinkedList } = require('./test')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (head === null) {
    return head
  }

  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let lastSorted = head,
    cur = head.next
  while(cur){
    
  }
}
let head = createLinkedList([4, 2, 3, 5, 1, 6, 7, 0])
head = insertionSortList(head)
printLinkedList(head)
