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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) return [];
    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
    ]
};

//Iterative solution
var preorderTraversal = function (root) {
    const stack = [root]; // Track nodes
    const result = []; // Store preorder traversal
    //let current = root;

    // While there are unvisited nodes
    while (stack.length > 0) {

        const current = stack.pop(); // Get the last node in the stack
        if (current === null) continue; // Skip null nodes

        result.push(current.val); // Visit the node

        // Push right child first so that left child is processed next
        if (current.right !== null) {
            stack.push(current.right);
        }
        if (current.left !== null) {
            stack.push(current.left);
        }
    }

    return result;
};