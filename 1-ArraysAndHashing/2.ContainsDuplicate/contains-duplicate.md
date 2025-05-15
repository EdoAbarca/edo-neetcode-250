# Problem: 217. Contains Duplicate
**Category:** Arrays & Hashing 
**Difficulty:** Easy
**Leetcode Link:** [https://leetcode.com/problems/contains-duplicate/](https://leetcode.com/problems/contains-duplicate/)

---

## Problem Statement
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109

---

## Approach

### Thought Process

It's a Sufficiency problem, meaning that finding the first duplication is enough to finish the iteration process.

To find that duplication, a loop is needed to check all the array, meaning we already have a O(n) time complexity. An additional DS is needed to check previously seen data, meaning the space time complexity will be at least O(n). Using a second array for that will scale the time complexity to O(n^2), which is not good at all. However, accessing a hash table costs O(1), meaning the program's overall time complexity remains O(n), which is nice.

Now about the algorithm itself: As a sufficient problem, I said that finding a duplicate is enough. How do we achieve that? Check if the current array element is in the hash. If so, means that element was seen before. That's it.

### Strategy Used
- Optimized
- Array DS
- Hashing pattern

---

## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Time execution
- **Time spent**: 13 ms (73.29%)
- **Memory used**: 73.28 mb (39.25%)

---

## Notes / Learnings
- When I first faced the problem, I wasn't really aware of the hash utility in practical scenarios, so brute-forcing the problem with 2 for loops (One to loop all the array and a nested one to check the remaining elements) was the way to go. With O(n^2) time complexity (worst case), it's the most straightforward, but unoptimized solution

```javascript
// Brute-force approach (O(n^2))
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) return true;
  }
}
return false;
```

- You might try sorting the array, but it scales the time complexity to O(n*log(n)) best case, so it's still good, but improveable

```javascript
// Sort then check neighbors (O(n log n))
nums.sort();
for (let i = 1; i < nums.length; i++) {
  if (nums[i] === nums[i - 1]) return true;
}
return false;
```

- Hashing is the most optimized way to solve this problem
