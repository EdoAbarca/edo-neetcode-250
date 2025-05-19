# Problem: 706. Design HashMap
**Category:** Arrays & Hashing

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/design-hashmap/](https://leetcode.com/problems/design-hashmap/)

**Status:** Ongoing, current file needs refinement.
---

## Problem Statement

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 

Constraints:

- 0 <= key, value <= 10^6
- At most 10^4 calls will be made to put, get, and remove.

---

## Approach

### Thought Process
First of all, what's a HashMap?

In simple terms, a HashSet is a hash data structure that can store (key, value) data. It computes a memory address, which will be used to both assign a space in memory for the data to be stored and data mapping purposes.

Based in both knowledge covered and simplicity, an array should be the way to go, meaning I'll deal with O(n) space complexity. Although there will be a hashing function to map data, I don't like the fact that both contains and delete will require O(n) time complexity.

This array will be the hash DS emulated. Every entry will contain an array of [key, value] data. The hash function will use modulo to map any of these nested arrays, preventing O(n^2) time complexity.


### Strategy Used
- Matrix DS
- Optimized?

---

## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n+size)

### Time execution
- **Time spent:** 30 ms (63.67%)
- **Memory used:** 67.04 mb (39.32%)

---

## Notes / Learnings
- The main difference between HashSet and HashMap is that the first one stores single, non-updatable values; Instead, HashMap can store (key, value), updatable data

