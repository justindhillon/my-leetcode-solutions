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

function rightSideView(root: TreeNode | null): number[] {
    const map = new Map();

    function dfs(root, depth) {
        if (!root)
            return;
        
        if (!map.has(depth))
            map.set(depth, root.val);
        
        depth++;
        dfs(root.right, depth);
        dfs(root.left, depth);
    }

    dfs(root, 0);

    return Array.from(map.values());
};