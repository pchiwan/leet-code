/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function arrayToListNode(nums: number[]): ListNode {
  if (!nums.length) {
    return null;
  }
  return new ListNode(nums[0], arrayToListNode(nums.slice(1)));
}

function listNodeToArray(list: ListNode): number[] {
  const output = [];
  let ref = list;

  while (ref !== null) {
    output.push(ref.val);
    ref = ref.next;
  }

  return output;
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  return l1.val <= l2.val
    ? new ListNode(l1.val, mergeTwoLists(l1.next, l2))
    : new ListNode(l2.val, mergeTwoLists(l1, l2.next));
}

console.log(
  listNodeToArray(
    mergeTwoLists(arrayToListNode([1, 2, 4]), arrayToListNode([1, 3, 4]))
  )
); // [1,1,2,3,4,4]
console.log(
  listNodeToArray(
    mergeTwoLists(
      arrayToListNode([1, 1, 1, 5, 7, 25]),
      arrayToListNode([3, 4, 6, 8])
    )
  )
); // []
console.log(
  listNodeToArray(mergeTwoLists(arrayToListNode([]), arrayToListNode([])))
); // []
console.log(
  listNodeToArray(mergeTwoLists(arrayToListNode([]), arrayToListNode([0])))
); // [0]
