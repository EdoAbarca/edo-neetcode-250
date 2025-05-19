# 242. Valid Anagram
**Category:** Arrays & Hashing
**Difficulty:** Easy
**Leetcode Link:** [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)

---

## Problem Statement

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

- 1 <= s.length, t.length <= 5 * 104
- s and t consist of lowercase English letters.

---

## Approach

### Thought Process
Don't struggle thinking about "how do I match both strings, in terms of order matching?". It's unnecessary. No one tells you the order matters. Just counting the characters will do.

That being said, there are 2 options:
1. Sorting and checking that both strings are the same
2. Hashing both char counts and then comparing both hashed chars and counts

As I already tried the sorting approach with poor performance results, I tried the hashing approach, getting better results, which goes this way:

1. Count every distinctive char in both string separately
2. Compare both hash's length
3. Compare both hash's char count
4. If 3 and 4 are equal in all cases, the string is an anagram, return true

### Strategy Used
- Optimized
- Hashing

---

## Results
### Complexity Analysis
- **Time Complexity:** 18 ms (43.44%)
- **Space Complexity:** 60.98 mb (12.22%)

### Time execution
- **Time spent:** O(n)
- **Memory used:** O(n)

---

## Notes / Learnings
 - Numbers obtained from the sorting solution submit:
    - **Time spent:** 52 ms (5.02%)
    - **Memory used:**  63.27 mb (5.45%)
    - **Time Complexity:** O(n*log(n)) (O(n^2) worst case)
    - **Space Complexity:** O(n)
 - Map it's better for hashing more complex data structures (for instance and definition, (key, value) data), where Set can only hash single values without repetition
 - Still, space complexity isn't convincing at all, meaning there are better solutions...
