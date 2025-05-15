# Problem: 1929. Concatenation of Array
**Category:** Arrays & Hashing

**Difficulty:** Easy  

**Leetcode Link:** [https://leetcode.com/problems/concatenation-of-array/description/](https://leetcode.com/problems/concatenation-of-array/description/)

**Status:** Finished, open for suggestions.

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

First of all, as the problem clearly states, an array 'ans' has to be returned, so that will be the DS used. 'ans' consists of 'nums' array + 'nums' array, all concatenated based on its order.

Here’s how I approached the problem:

1. Declare the 'ans' array as an empty array
2. Loop the 'nums' array to push it's numbers into the current 'ans' array (copy)
3. Loop the 'nums' array to push it's numbers into the current 'ans' array
4. Return the 'ans' array (copy and concatenate)

There are more elegant, one-liner solutions, but they may be harder to understand and even maintain, and they don't actually improve performance, in terms of Big O. I aim to analyze them anyway, but I'll proceed under the previous steps shown.

No hashing is needed since there's no need to check for previous data or duplicates.

### Strategy Used
- Brute-force
- Array

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
 - This is the first alternative solution:
```javascript
let ans = nums.concat(nums);
return ans;
```
This approach leverages the built-in `concat` method in JavaScript, which concatenates two arrays. It is concise and achieves the same result as the brute-force approach but in a single line of code. The time complexity remains O(n) since the `concat` method iterates through the array elements.
- This is the second alternative but discarded solution:
```javascript
let ans = [];
for (let i = 0; i < 2 * n; i++) {
  ans[i] = nums[i % n];
}
```
This approach uses a `for` loop to manually construct the concatenated array. The loop runs from `0` to `2 * n - 1`, where `n` is the length of the original array `nums`. The modulo operator (`%`) is used to cycle through the indices of `nums`, effectively repeating its elements. While this approach also has a time complexity of O(n), it is less concise and less readable compared to the first solution using the `concat` method.

