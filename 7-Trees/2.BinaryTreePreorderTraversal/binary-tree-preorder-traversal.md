# Problem: 144. Binary Tree Preorder Traversal
**Category:** Trees

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/](https://leetcode.com/problems/binary-tree-preorder-traversal/)

**Status:** Ongoing
---

## Problem Statement

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:

Input: root = [1,null,2,3]

Output: [1,2,3]

Explanation:



Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [1,2,4,5,6,7,3,8,9]

Explanation:



Example 3:

Input: root = []

Output: []

Example 4:

Input: root = [1]

Output: [1]

 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?

---
## Approach

### Thought Process
A Tree is a DS which consists of a node, a custom data type that consists of:
1. A value (usually an integer)
2. A pointer to it's left node
3. A pointer to it's right node

Now, what's an preorder traversal? It's a travel-through-tree algorithm, which distinctive core idea is to check the tree using this order: node -> left -> right.

### Strategy Used

2 recursions and a base case is needed:
- If the current node is null, means we've reached a dead end for the current branch, return
- Save the current node value
- Visit the left node of the current one (concat value if base case is hit)
- Visit the right node of the current one (concat value if base case is hit)

Iterative approach, on the other hand, needs a subtle tweak: As you emulate the recursive calls using an stack, the right node of the current call shall be pushed first. Why? Because, then pushing the left node, that one stays at the top, being the one popped later, as the left nodes shall be visited before the right ones.


---
## Results
### Complexity Analysis
- **Time Complexity:** 
- **Space Complexity:** 

### Time execution
- **Time spent:** 
- **Memory used:** 

---
## Notes / Learnings
- Again, test cases were really confusing, I suggest that you ignore them and focus on the core functionality
- Follow-up accomplished, notes about performance and tradeoffs shall be added
- Might queue be useful to emulate the recursive calls? Stack seems confusing at first sight on this one
