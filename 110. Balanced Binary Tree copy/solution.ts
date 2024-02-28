/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    const map = new Map();

    let temp = head;
    while (temp) {
        map.set(temp, new Node(temp.val));
        temp = temp.next;
    }

    temp = head;
    while (temp) {
        let copy = map.get(temp);
        copy.next = map.get(temp.next) || null;
        copy.random = map.get(temp.random) || null;
        temp = temp.next;
    }

    return map.get(head);
};