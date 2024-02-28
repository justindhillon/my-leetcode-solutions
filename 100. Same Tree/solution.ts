/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let answer = true;

    function dps(main, copy) {
        if (!main && !copy) return;

        if (main?.val != copy?.val) {
            answer = false;
            return;
        }

        dps(main?.left, copy?.left);
        dps(main?.right, copy?.right);
    }

    dps (p, q);
    return answer;
};