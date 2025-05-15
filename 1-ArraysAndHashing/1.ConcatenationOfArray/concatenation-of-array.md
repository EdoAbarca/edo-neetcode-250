# Problem: 1929. Concatenation of Array
**Category:** Arrays & Hashing

**Difficulty:** Easy  

**Leetcode Link:** [https://leetcode.com/problems/concatenation-of-array/description/](https://leetcode.com/problems/concatenation-of-array/description/)

**Status:** Ongoing
---

## Problem Statement
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

 

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
 

Constraints:

- n == nums.length
- 1 <= n <= 1000
- 1 <= nums[i] <= 1000

---

## Approach

### Thought Process
- _Explain how you approached the problem step-by-step._
- _What did you consider first? Any edge cases you thought about?_

### Strategy Used
- Brute-force? Optimized? 
- Any pattern? (e.g. Hashing, Two Pointers, Sliding Window)

---

## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Time execution
- **Time spent**: 2 ms (31.57%)
- **Memory used**: 59.69 MB (8.57%)

---

## Notes / Learnings
- _What did you learn or reinforce by solving this problem?_  
- _Any mistake you made or something that surprised you?_
