# Problem: 27. Remove Element
**Category:** Arrays & Hashing

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/remove-element/](https://leetcode.com/problems/remove-element/)

**Status:** Completed, open to suggestions.
---

## Problem Statement
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100
---
## Approach

### Thought Process
As in-place is a constraint, the array's modification mustn't result in another array creation. That said, a straightforward way to solve the problem is just deleting the numbers that are equal to 'val', this using built-in deleting methods that allows deletion based on index.

However, the problem says that there's no need to actually delete numbers, so maybe a sort of swap will do...

### Strategy Used
- In-place array DS solution
- Element deletion
- Optimized?

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

### Time execution
- **Time spent:** 0 ms (100.00%) 
- **Memory used:** 53.09 mb (86.08%)

---
## Notes / Learnings
- "Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums."
- Based on the previous point, maybe deleting elements for the array actually isn't the best answer, probably a specific sort will do
- Why does the problem returns blank array spaces, but the test case doesn't? Based on that, my answer is wrong. Weird...

``` javascript
var removeElement = function(nums, val) {
    let k = 0
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== val){ 
            nums[k] = nums[j] //Why?
            k++
        }
    }
    return k
};
```