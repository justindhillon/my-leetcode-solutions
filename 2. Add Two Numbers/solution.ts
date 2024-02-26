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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let answer = null;
    let overflow = false;

    while (l1 || l2) {
        let node = new ListNode();
        node.val = (l1?.val || 0) + (l2?.val || 0);

        if (overflow) {
            node.val++;
            overflow = false;
        }

        if (node.val >= 10) {
            node.val %= 10;
            overflow = true;
        } 

        l1 = l1?.next;
        l2 = l2?.next;

        node.next = answer;
        answer = node;
    }

    if (overflow) {
        let node = new ListNode();
        node.val = 1;
        node.next = answer;
        answer = node;
    }

    let reversed = null;
    while (answer) {
        let node = answer;
        answer = answer.next;
        node.next = reversed;
        reversed = node;
    }

    return reversed;
};
