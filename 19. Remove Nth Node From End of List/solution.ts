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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let reversed = null;

    while (head) {
        let node = head;
        head = head.next;
        node.next = reversed;
        reversed = node;
    }

    head = null;
    let i = 0;

    while (reversed) {
        i++;
        let node = reversed;
        reversed = reversed.next;
        if (i == n) continue;
        node.next = head;
        head = node;
    }

    return head;
};