# Problem: 682. Baseball Game
**Category:** Stack

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/baseball-game/](https://leetcode.com/problems/baseball-game/)

**Status:** Completed, open to suggestions.
---

## Problem Statement
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 

Example 1:

Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
Example 2:

Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
Example 3:

Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.
 

Constraints:

- 1 <= operations.length <= 1000
- operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 10^4, 3 * 10^4].
- For operation "+", there will always be at least two previous scores on the record.
- For operations "C" and "D", there will always be at least one previous score on the record.
---
## Approach

### Thought Process
This is the first Stack problem I face. An Stack is a data structure that follows the LIFO standards: Last In, First Out. This means: The last element that was pushed to the Stack will be taken out.

To keep track of the operations' results, an auxiliary Stack needs to be used (let's call it 'record'), let's describe the operations involved:
- "D": Record a new score that is the double of the previous score. --> Pop a record's element, multiply it by 2 and push it back to the same stack
- "C": Invalidate the previous score, removing it from the record. --> Pop a record's element
- "+": Record a new score that is the sum of the previous two scores. --> Pop a record's element, then get the stack's current top element, plus it to the popped element and push it back
- Out of that, an integer is in the operations --> Push it to the record's stack

Finally, to sum all the records, just pop them and keep a sum until the Stack gets empty.


---
## Results
### Complexity Analysis
- **Time Complexity:** O(n^2) (said by Leetcode, I must check that)
- **Space Complexity:** O(n), (doubt that, should be O(k), k = record's stack size, k <= n)

### Time execution
- **Time spent:** 0 ms (100.00%)
- **Memory used:** 53.89 mb (89.59%)

---
## Notes / Learnings
 - Probably the idea is to create a Stack class with it's operations, so these are encapsulated in methods, aiming to follow coding and OOP best practices
 - I still can't understand why Leetcode said that my code it's O(n^2) time complexity, hope it's a mistake
 - It's been around 1 week. Along with the IT employment and this, I started a DevOps bootcamp and I'm trying to catch up with CSS (pure, plain, no Tailwind), so I'm busy
 - This submission was made during a difficult time. In loving memory of my grandfather (1943 - 2025).