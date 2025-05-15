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
2. Hashing both char counts and then comparing both hashed counts

I tried sorting both input arrays, and, although it's valid and got submitted, I got probably the worst numbers since I've been practicing in Leetcode (check 'Notes / Learnings' for that). So, in order to optimize that, let's try the hashing approach (T.B.A.)...

### Strategy Used
- Brute force (Will redo it ASAP)
- Sorting
- Hashing (Soon)

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
 - What I got from the sorting execution:
    - **Time spent:** 52 ms (5.02%)
    - **Memory used:**  63.27 mb (5.45%)
    - **Time Complexity:** O(n*log(n)) (O(n^2) worst case)
    - **Space Complexity:** O(n)
