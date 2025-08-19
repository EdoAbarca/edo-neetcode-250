# Problem: 94. Binary Tree Inorder Traversal
**Category:** Trees 

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/](https://leetcode.com/problems/binary-tree-inorder-traversal/)

**Status:** Completed, open to suggestions.
---

## Problem Statement

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Explanation:
![First example tree](ej1.png "First example tree")

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]

Explanation:
![Second example tree](ej2.png "Second example tree")


Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]


Constraints:

- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?

---
## Approach

### Thought Process
A Tree is a DS which consists of a node, a custom data type that consists of:
1. A value (usually an integer)
2. A pointer to it's left node
3. A pointer to it's right node

Now, what's an inorder traversal? It's a travel-through-tree algorithm, which distinctive core idea is to check the tree using this order: left -> node -> right.

### Strategy Used

2 recursions and a base case is needed:
- If the current node is null, means we've reached a dead end for the current branch, return
- Visit the left node of the current one (concat value if base case is hit)
- Visit the right node of the current one (concat value if base case is hit)

Iterative approach simulates that behaviour, but no recursion can't be used. If you read the algorithm properly, you might see that you can emulate the recursive calls using an stack.

---
## Results
1. Recursive approach:
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(h), h = tree's height, 0 <= h <= n

### Time execution
- **Time spent:** 0ms (100%) (Both cases)
- **Memory used:** 53.76MB (42.08%) (concat) / 53.62MB (50.00%) (spread)

2. Iterative approach:
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(h), h = tree's height, 0 <= h <= n

### Time execution
- **Time spent:** 0ms (100%)
- **Memory used:** 53.00MB (84.51%)

---
## Notes / Learnings
- Test cases were really confusing, I suggest focusing on understanding the 'inorder' definition
- Follow-up accomplished
- About the recursive approach, using the spread operator was slighly better than the concat operator in terms of space-complexity performance
- Iterative avoids recursion depth issues, making it less space demanding than recursion
- Edge cases shall be analyzed for complete complexity analysis
