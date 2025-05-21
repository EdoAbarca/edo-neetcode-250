# Problem: 169. Majority Element
**Category:** Array & Hashing

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/majority-element/](https://leetcode.com/problems/majority-element/)

**Status:** Completed, open to suggestions.
---

## Problem Statement
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

- n == nums.length
- 1 <= n <= 5 * 104
- -109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
---
## Approach

### Thought Process
As this problem needed counting, a map hash appears as an option, using the same strategy when approaching the Valid Anagram problem.

That said, we count each number in the array, so we store both the number and it's count. Then the aim goes for the biggest count among the numbers. That's the output.

### Strategy Used
- Hashing
- Array DS
- Partially optimized

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Time execution
- **Time spent:** 10 ms (12.70%)
- **Memory used:** 59.03 mb (16.14%)

---
## Notes / Learnings
- Although brute force wasn't used, my solution didn't achieve good numbers, and the follow-up challenge wasn't succeded (space complexity isn't O(1))
- Discussion says that Boyer-Moore Voting Algorithm is the best way to solve the problem, as it accomplish the follow-up challenge. That's new for me, so I might try it later...
