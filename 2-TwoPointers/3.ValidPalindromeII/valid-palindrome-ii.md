# Problem: 680. Valid Palindrome II
**Category:** Two Pointers

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/valid-palindrome-ii/](https://leetcode.com/problems/valid-palindrome-ii/)

**Status:** Completed, open to suggestions.
---

## Problem Statement
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
---
## Approach

### Thought Process
So this is again a palindrome problem. However, non-alphanumerical chars are not an issue anymore and one deletion has to be performed... Well, no, there's no need for that. Let's see it this way: Why would you delete a character, then face an unnecessary overhead, when you just can skip it without consequences?

That said, this is what I build inside my mind: The main goal is to check if, after "removing" a char, the string is still a palindrome. Two pointers: Left (leftmost char) and right (rightmost char). Loop the string while left and right pointers don't meet. If there's a mismatch between the chars selected by the pointers, there's where the "deletion" happens, but instead, the procedure is as follows:

> “If I remove the left character, does the remaining substring become a palindrome?”
> “If I remove the right character, does the remaining substring become a palindrome?”

What do I need? Both.

So it's time to check if both substrings gotten are palindrome. Any of them are enough, but both can't fail; Otherwise, the string just isn't a palindrome.

### Strategy Used
- No additional DS was used
- Helper function, in-place algorithm

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Time execution
- **Time spent:** 6 ms (77.20%)
- **Memory used:** 60.95 mb (46.09%)

---
## Notes / Learnings
 - There's an edge case that wasn't actually tested: What if the string is actually a palindrome without deletion? Well, I just go with it until the pointers meet, returning true
 - Based on the description, that shouldn't be actually true. However, no test case failed, so seems that the string will always require to skip a char
 - I realized that time execution and memory usage are different when I upload more than once, where Leetcode servers might be the main reason