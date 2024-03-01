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

function levelOrder(root: TreeNode | null): number[][] {
    let map = new Map();

    function dfs(root, depth) {
        if (!root)
            return;

        if (map.has(depth)) {
            map.get(depth).push(root.val);
        } else {
            map.set(depth, [root.val]);
        }
        
        depth++;

        dfs(root?.left, depth);
        dfs(root?.right, depth);
    }

    dfs(root, 0);

    return [... map.values()];
};