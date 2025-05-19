# Problem: 705. Design HashSet
**Category:** Arrays & Hashing

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/design-hashset/](https://leetcode.com/problems/design-hashset/)

**Status:** Ongoing, current file needs refinement.
---

## Problem Statement

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
 

Constraints:

- 0 <= key <= 10^6
- At most 10^4 calls will be made to add, remove, and contains.

---

## Approach

### Thought Process
First of all, what's a HashSet?

In simple terms, a HashSet is a hash data structure that can store single values without repetition. It computes a memory address, which will be used to both assign a space in memory for the data to be stored and data mapping purposes.

Based in both knowledge covered and simplicity, an array should be the way to go, meaning I'll deal with O(n) space complexity. Although there will be a hashing function to map data, I don't like the fact that both contains and delete will require O(n) time complexity.

This array will be the hash DS emulated. Every entry will contain an array of data. The hash function will use modulo to map any of these nested arrays, preventing O(n^2) time complexity. 

### Strategy Used
- Matrix DS
- Optimized? Not sure

---

## Results
### Complexity Analysis
- **Time Complexity:** O(n) (worst case)
- **Space Complexity:** O(n + size) (worst case) (size = 769)

### Time execution
- **Time spent:** 23 ms (86.88%)
- **Memory used:** 66.04 mb (94.41%)

---

## Notes / Learnings
- Probably an optimization might be using a single array, but it would be useful only for performance metrics, I don't see any practical use of that (I wouldn't need a hashing function, then would be a hash without hash...)
- Why is O(n+size) space complexity? I don't know, Leetcode outputted that after the submit
