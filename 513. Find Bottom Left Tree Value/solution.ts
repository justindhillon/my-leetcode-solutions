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

function findBottomLeftValue(root: TreeNode | null): number {
    let deepest = 0;
    let answer = root.val;

    function dfs(root, depth) {
        if (!root) 
            return;

        if (!root?.left && !root?.right) {
            if (depth > deepest) {
                answer = root.val;
                deepest = depth;
            }
            return;
        }

        depth++;

        dfs(root?.left, depth);
        dfs(root?.right, depth);
    }

    dfs(root, 0);
    return answer;
};