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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function dfs(root: TreeNode | null): number {
        if (!root)
            return 0;

        const left = dfs(root?.left);
        const right = dfs(root?.right);

        diameter = Math.max(left+right, diameter);
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return diameter;
};