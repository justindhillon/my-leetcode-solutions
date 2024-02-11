/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let reversed: ListNode = null;

    while (head != null) {
        let node = head;
        head = head.next;
        node.next = reversed;
        reversed = node;
    }

    return reversed;
};
