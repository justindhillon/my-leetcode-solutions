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

function isValidBST(root: TreeNode | null, smallLeft=-Infinity, bigRight=Infinity): boolean {
    if (!root)
        return true;
    
    if (bigRight <= root.val || root.val <= smallLeft)
        return false;

    return isValidBST(root.left, smallLeft, root.val) && isValidBST(root.right, root.val, bigRight);
};