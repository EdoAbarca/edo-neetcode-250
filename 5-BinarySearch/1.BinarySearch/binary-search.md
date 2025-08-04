# Problem: 704. Binary Search
**Category:** Binary Search

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/binary-search/description/](https://leetcode.com/problems/binary-search/description/)

**Status:** Finished, open to suggestions
---

## Problem Statement

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- All the integers in nums are unique.
- nums is sorted in ascending order.

---
## Approach

### Thought Process

A classic one. I recall doing this during my college DS&A days. Good times (well, no. Screw you covid 19).

Anyway, as you can understand from the problem, you are looking for a target (number), but with the constraint of doing a O(log(n)) algorithm, meaning a default, one-by-one search isn't useful here (O(n)). With such situation, the binary search is the way to go.

There are 2 ways of doing this:

1. Using recursion: In this approach, you slice the array depending of the comparision between the target and the number pointed by the current half pointer (array.length/2):
    - If the current half number equals the target, return it's INDEX (not the number)
    - If the target is smaller, it means the left side of the array shall be obtained from the slice for further recursion 
    - Else, means the target is greater, meaning the right side of the array must be the obtained from the slice for further recursion
    - Consider that, if the recursion reaches a case in which the array is empty, the target wasn't in the array, then a -1 shall be returned
2. Using iteration and a 2-pointer approach: In this approach, you use 2 pointers to manually track the array's "slices":
    - If the current half number equals the target, return it's INDEX (not the number)
    - If the target is smaller, it means the left side of the array shall be obtained from the "slice" for further iterations (move the right pointer to the half)
    - Else, means the target is greater, meaning the right side of the array must be the obtained from the "slice" for further iterations (move the left pointer to the half)
    - If the iteration finishes, means the target wasn't in the array, so a -1 shall be returned


### Strategy Used

I'll use the iteration process. Why? Because the recursion approach, as it can't use pointers as function parameters (only the array itself and the target), the space complexity increases due to the need of slicing the array.

---
## Results
### Complexity Analysis
- **Time Complexity:** O(log(n))
- **Space Complexity:** O(1)

### Time execution
- **Time spent:** 0ms (100.00%)
- **Memory used:** 58.17 mb (40.18%)

---
## Notes / Learnings
- Although the problem says itself, it's worth reminding that binary search is only useful when the list is ordered. If not, just a one-by-one (unless cached/hashed/indexed) search will do
- You might think "Oh, but what about sorting?" well, the best sorting algorithm reaches O(n*log(n)), so it might work, but it isn't the best choice
- Recursion results should be added for comparision