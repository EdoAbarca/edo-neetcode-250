# Problem: 14. Longest Common Prefix
**Category:** Arrays & Hashing

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/longest-common-prefix/](https://leetcode.com/problems/longest-common-prefix/)

**Status:** Completed, open to suggestions.
---

## Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters if it is non-empty.

---

## Approach

### Thought Process
First of all, what's a prefix?

In simple terms, a prefix is a substring that was extracted from the beginning of it's parent string.

That said, the only substrings we have to compare are the ones that starts from the beginning of the main strings, starting from the smallest string as the first prefix. If it doesn't match the remaining prefixes, it's last char is discarded and the process continues, until a prefix matches all the others or the prefix is already an empty string.

### Strategy Used
- Brute-forced
- No DS was used, unless a string counts as a DS

---

## Results
### Complexity Analysis
- **Time Complexity:** O(s*n) (s = shortest string length, n = number of strings)
- **Space Complexity:** O(s) (s = shortest string length, smaller than the input size but bigger than constant 1)

### Time execution
- **Time spent:** 0ms (100%)
- **Memory used:** 53.93 mb (64.90%)

---

## Notes / Learnings
- Although the problem has a "Trie" tag attached to the problem, it isn't a constraint to actually solve it
- I admit I asked ChatGPT about optimization (O(n*s) is smaller than O(n^2) but bigger than O(nlog(n)), meaning it isn't really optimal despite the numbers, right?), and there are 2 approachs I might try: Sorting and just comparing string columns, deleting that 2nd loop
