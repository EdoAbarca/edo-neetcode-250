# 125. Valid Palindrome
**Category:** Two Pointers
**Difficulty:** Easy
**Leetcode Link:** [https://leetcode.com/problems/valid-palindrome/](https://leetcode.com/problems/valid-palindrome/)

---

## Problem Statement

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

- 1 <= s.length <= 2 * 105
- s consists only of printable ASCII characters.

---

## Approach

### Thought Process
Ok so basically you can see a palindrome as a string that, when splitted in half, the string got from the right is the reversed version of the string got from the left.

That said, the most straightforward way to face this problem if looping the strings, checking if the leftmost char of the string is the same as the rightmost char of the string. Only one difference is enough to discard it as a palindrome.

However, that's not enough right now (or might be, but the approach might need some tweaks). The input says "alphanumerical numbers" (A-Z, a-z, 0-9), and, as the examples state, there are commas, two points, spaces and maybe more. A pre-processing over the input string seems to be unavoidable for now. As there's no constraint about space complexity, a new string, without any non-alphanumerical characters should be created (string are inmutable, just in case).

### Strategy Used
- Two pointers
- Brute-force
- String pre-processing

---

## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

### Time execution
- **Time spent:** 14 ms (9.41%)
- **Memory used:** 64.88 mb (5.23%)

---

## Notes / Learnings
- A non-preprocessed, in-place version should be tried -> O(n) to O(1) in space complexity
- Regex is such a nice way to test chars without using nested, hard-to-read logic operations inside a if-else statement