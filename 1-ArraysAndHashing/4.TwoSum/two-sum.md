# Problem: 1. Two Sum
**Category:** Arrays & Hashing

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

**Status:** Completed, open to suggestions.
---

## Problem Statement
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
---
## Approach

### Thought Process
Well, as just one pair is meant to be returned, it's a sufficient problem.

The follow-up statements means a brute-forced, straightforward solution uses nested loops: The main loop checks one by one the input data (let's say it's pointer is i), and the nested loop checks, based on the main loop's current number, what number of the remaining array accomplish the target (input[i] + input[j] == target).

However, the nested loop (and, then, the O(n^2) time complexity) is avoidable. Why? Because you don't need to re-compute the sum, and, as the target is always constant, you know the value you're looking for. Doing some math:

> Instead of: input[i] + input[j] == target, you shall try: target - input[i] == input[j]

But it's still not enough:

>What do you need to reduce the time complexity?

Yeah, hash, so you O(1) access data. Map hash, as you need both index and value.

That said, the previous checkpoint becomes:

> Instead of: input[i] + hash == target, you shall try: target - input[i] == hash

As you iterate the array, data and index is saved to the hash.


### Strategy Used

- Array and hash DS
- Optimized

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Time execution
- **Time spent:** 2 ms (70.66%)
- **Memory used:** 54.42 mb (64.88%)

---
## Notes / Learnings
- Nothing else to add.