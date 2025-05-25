# Problem: 219. Contains Duplicate II
**Category:** Sliding Window

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/contains-duplicate-ii/](https://leetcode.com/problems/contains-duplicate-ii/)

**Status:** Completed, open to suggestions
---

## Problem Statement
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109
- 0 <= k <= 105
---
## Approach

### Thought Process
Ok, so this is the first problem that actually request a sliding window.

By brute force, you might think about creating a side array that represents the window (then, respecting the abs(i-j) <= k constraint), making a O(n*k) time complexity and O(k) space complexity, being k the sliding window size. Space complexity is ok so far, but time complexity can definitely be better. That's why hash will hold the sliding window, so O(1) access data reduces the time complexity to O(n), an optimal solution.

### Strategy Used
- Hash DS
- Optimized

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(k) (k = sliding window size)

### Time execution
- **Time spent:** 23 ms (79.53%)
- **Memory used:** 70.78 mb (83.83%)

---
## Notes / Learnings