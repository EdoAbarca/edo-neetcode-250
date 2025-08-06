# Problem: 206. Reverse Linked List
**Category:** Linked List

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)

**Status:** Completed, open to suggestions.

---

## Problem Statement
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

---
## Approach

### Thought Process

Another data structure seen in my college days. At least the single linked list (there are more versions, like double or cyclical) consists of nodes, a custom data type that contains:

- Value: The value hold by the node, usually integer
- Next: Pointer to the next node

Now, about the problem itself: The goal is reversing a singly linked list so that the head becomes the tail and all `next` pointers are flipped. How do we achieve that? Let's take the second example:
1 (head) -> 2 -> null
Should become:
null <- 1 <- 2 (head)

It can be done in 2 ways:

1. Iterative: Traverse the list, flipping each node’s next pointer.
2. Recursive: Dive deep recursively, then reverse the pointers as the stack unwinds.



### Strategy Used

I chose the iterative approach for better step-by-step understanding and debugging. While recursion is elegant, iteration feels more intuitive in this case.

Pointers used:

- prev: keeps track of the reversed list so far
- curr: current node being processed
- next: temporarily stores the next node to avoid losing reference

As a loop through the whole list is needed, O(n) time will be achieved. However, as single variables will be used to traverse the list, O(1) space will be achieved.

Update: I tried the recursive approach too.

It works by traversing to the end of the list first, then rewiring the `next` pointers on the way back up:

- **Base case:** If the node is `null` or `node.next` is `null`, return the node (this will be the new head).
- **Recursive step:** Call the function on `node.next` until reaching the end.
- After the call returns, reverse the link: `node.next.next = node`.
- Set `node.next = null` to break the original link.
- Return the new head node back up the stack.

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:**
    - Iterative: O(1)
    - Recursive: O(n) due to call stack

### Time execution
1. Iterative:
    - **Time spent:** 0ms (100.00%)
    - **Memory used:** 57.58 mb (49.62%)
2. Recursive:
    - **Time spent:** 1ms (9.81%)
    - **Memory used:** 58.22 mb (5.89%)
    
---
## Notes / Learnings
- Follow-up achieved, look at the .js file for both solutions
- Although more elegant and more aligned with the problem's structure, the recursive solution proved to be worser than the iterative one in terms of performance (and I dare say in readability terms too)
