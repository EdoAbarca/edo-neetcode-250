
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
//Recursive solutions
//Using consts and concat
var inorderTraversal = function(root) {
    // Base case: if the current node is null, return an empty array
    if (root === null) return [];

    // Recursively traverse the left subtree, visit the current node, and then traverse the right subtree
    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);

    // Concatenate the results: left subtree, current node value, right subtree
    return left.concat([root.val], right);
};
//0ms (100%)/53.76MB (42.08%)
//Time complexity: O(n) - each node is visited once
//Space complexity: O(h) - h is the height of the tree, due to the recursion stack

//Using spread operator
var inorderTraversal = function(root) {
    // Base case: if the current node is null, return an empty array
    if (root === null) return [];
    // Recursively traverse the left subtree, visit the current node, and then traverse the right subtree
    // Spread operator is used to flatten the arrays into a single array
    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ];
};
//0ms (100%)/53.62MB (50.00%)
//Time complexity: O(n) - each node is visited once
//Space complexity: O(h) - h is the height of the tree, due to the recursion stack


//Iterative solution
var inorderTraversal = function(root) {
    const stack = []; // Track nodes
    const result = []; // Store inorder traversal
    let current = root;

    // While there are unvisited nodes
    while (current !== null || stack.length > 0) {
        // Go to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        // Visit the node
        current = stack.pop();
        result.push(current.val);
        // Go to the right node
        current = current.right;
    }

    return result;
};
//0ms (100%)/53.00MB (84.51%)
//Time complexity: O(n) - each node is visited once
//Space complexity: O(n) - in the worst case, the stack can hold all nodes (e.g., a skewed tree)