# Problem: 121. Best Time to Buy and Sell Stock
**Category:** Sliding window

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

**Status:** Completed, open to suggestions
---

## Problem Statement
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^4
---
## Approach

## Approach

### Thought Process

At first, I considered comparing every pair of days (buy and sell) to find the maximum profit. However, that would have led to a nested loop and a time complexity of O(n²), which isn't efficient for large arrays.

Then I realized that I don’t need to store or check every possible pair. What really matters is:
- Finding the **lowest price so far** (the best day to buy),
- And checking the **profit if I sold today** (current price - lowest price so far).

This gave me the idea of using a **sliding window** approach where I continuously update:
- The minimum price seen so far (buying opportunity),
- The maximum profit I could get if I sold at the current price.

The key is to always **buy before you sell**, so I track the lowest price as I iterate forward, ensuring the sale always happens after the buy.

---

### Strategy Used

- No DS was used
- Optimized?

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Time execution
- **Time spent:** 3 ms (65.33%)
- **Memory used:** 65.62 (19.88%)

---
## Notes / Learnings
