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

// Recursive solution
var postorderTraversal = function(root) {
    if (root === null) return [];
    return [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val,
    ]
};

// Iterative solution using a stack
var postorderTraversal = function(root) {
    const stack = [];
    const result = [];
    let current = root;
    let lastVisited = null;

    while (current || stack.length) {
        // Go as left as possible
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // Peek the node on top of the stack
        let peekNode = stack[stack.length - 1];

        // If right child exists and hasn't been visited, go right
        if (peekNode.right && lastVisited !== peekNode.right) {
            current = peekNode.right;
        } else {
            // If no right child or it has been visited, process this node
            result.push(peekNode.val);
            lastVisited = stack.pop();
        }
    }

    return result;
};
