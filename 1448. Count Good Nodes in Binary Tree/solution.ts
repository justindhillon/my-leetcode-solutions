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

function goodNodes(root: TreeNode | null): number {
    let answer: number = 0;

    function dfs(root, biggest) {
        if (!root)
            return;

        if (root.val >= biggest) {
            answer++;
            biggest = root.val;
        }

        dfs(root.left, biggest);
        dfs(root.right, biggest);
    }

    dfs(root, -Infinity);

    return answer;
};