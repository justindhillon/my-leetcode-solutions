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

function isBalanced(root: TreeNode | null): boolean {
    let isBalanced = true;

    function dfs(root: TreeNode | null): number {
        if (!root)
            return 0;
        
        const left = dfs(root?.left);
        const right = dfs(root?.right);
        const diff = left - right;

        isBalanced = (-1 <= diff && diff <= 1 && isBalanced);
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return isBalanced;
};