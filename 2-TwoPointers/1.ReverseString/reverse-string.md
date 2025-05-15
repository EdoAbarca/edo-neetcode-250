# Problem: 344. Reverse String

**Category:** Two Pointers

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/reverse-string/](https://leetcode.com/problems/reverse-string/)

---

## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

- 1 <= s.length <= 105
- s[i] is a printable ascii character.

---

## Approach

### Thought Process
This is a classical DS&A learning problem with extra steps.

As in-place O(1) is a constraint, the input array has to be modified without duplications or another DS, to then prevent increasing the space complexity. As much, single variables shall be used to perform the swapping.

That said, the strategy is using two pointers to keep track of both the leftmost and rightmost characters of the string. Gotta make sure the half index is known, because when it's met by any pointer, the swapping is done. Then, an iteration over the string shall be done, in which, for every loop done, a swap has to be done and both pointers should be moved (leftmost -> 1 step to the right, rightmost -> 1 step to the left). This while the left pointer doesn't meet the half pointer.

There are 2 cases:
 - Odd-lengthed strings: Measuring it's half will need it's remainder, so the leftmost pointer stops when both pointers meet
 - Even-lengthed strings: Measuring it's half won't need it's remainder, as the half pointer should be placed in the rightmost place out of the median

That shall be automatized, hopefully by default numerical operations.

### Strategy Used
- Two Pointers
- Optimized
- In-place algorithm

---

## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Time execution
- **Time spent**: 0 ms (100%)
- **Memory used**: 59.95 mb (84.33%)

---

## ✍️ Notes / Learnings
- I say 'optimized?' because I don't know if there's a better way to approach this
- There are brute-forced solutions, but don't worry about them, as they violate the constraints shown by the problem:
```javascript
return s.reverse(); // JS in-place built-in, but what's the point of a command doing everything for you and the problem?
```
```javascript
return s.slice().reverse(); // Still not valid, creates a copy -> O(n) space complexity
```

- I used division and remainder in a const variable over if-else statements, partly to prevent an spaghetti, hard-to-debug code, but mostly because of performance issues. Why would I need to measure something over and over again, when I can measure it once and use it until the program is done?
