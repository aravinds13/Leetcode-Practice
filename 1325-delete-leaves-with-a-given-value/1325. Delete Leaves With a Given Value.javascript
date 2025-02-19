/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    root = removeNodes(root, target)
    return (root)
};

const removeNodes = (root, target) => {
    if(!root) {
        return null;
    }

    root.left = removeNodes(root.left, target);
    root.right = removeNodes(root.right, target);
    
    if(!root.left && !root.right && root.val == target){
        return null;
    }

    return root;
}