function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function createLinkedList(arr) {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])

  let cur = head
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return head
}

function printLinkedList(head) {
  let print = ''
  let cur = head
  while (cur) {
    print += `${cur.val} -> `
    cur = cur.next
  }
  print += 'null'
  console.log(print)
}

module.exports = {
  ListNode,
  createLinkedList,
  printLinkedList
}
