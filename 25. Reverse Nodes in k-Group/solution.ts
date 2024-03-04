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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let groups = [];

    while (head) {
        groups.push(head);
        for (let i = 0; i < k && true; i++) {
            head = head?.next;
        }
    }

    let sizeOfLast = 0;
    let copyOfLast = groups[groups.length-1];

    while (copyOfLast) {
        copyOfLast = copyOfLast?.next;
        sizeOfLast++
    }

    if (sizeOfLast < k) {
        let reversed = null;

        while (groups[groups.length-1]) {
            let node = groups[groups.length-1];
            groups[groups.length-1] = groups[groups.length-1].next;
            node.next = reversed;
            reversed = node;
        }

        groups[groups.length-1] = reversed;
    }

    let answer = null;
    for (let i = groups.length-1; 0 <= i; i--) {
        let group = groups[i];
        for (let v = 0; v < k && group; v++) {
            let node = group;
            group = group.next;
            node.next = answer;
            answer = node;
        }
    }

    return answer;
};