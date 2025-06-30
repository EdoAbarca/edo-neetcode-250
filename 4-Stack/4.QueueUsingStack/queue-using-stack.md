# Problem: 232. Implement Queue using Stacks
**Category:** Stack

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/implement-queue-using-stacks/](https://leetcode.com/problems/implement-queue-using-stack)

**Status:** Ongoing.
---

## Problem Statement

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.
 

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

---

## Approach

### Thought Process


The core challenge here is to simulate a queue’s FIFO behavior using stacks, which follows a LIFO order: How can you retrieve the oldest element from a structure that only exposes the newest one? The snap comes from realizing that, if you reverse the order of elements twice, you restore the original sequence.

Imagine stacking plates (stack1). When you need the bottom plate (the first one pushed), you can’t access it directly. But if you move all the plates one by one to a second stack (stack2), the bottom plate becomes the top of the new stack. Now, popping from stack2 gives you the oldest plate, just like a queue. As a follow-up optimization, you do that when stack2 is empty and you need to pop or peek. This lazy approach ensures that each element is moved at most once, keeping operations efficient on average.

### Strategy Used

2 stacks. New elements are always pushed onto, let's say, stack1, preserving the pushing order. When asking for a pop or peek, the algorithm checks if stack2 is empty. If so, all elements from stack1 are transferred to stack2, reversing their order so the oldest becomes accessible. Then, subsequent pop or peek operations work directly from stack2 until it’s exhausted, avoiding repeated transfers.

This design amortizes the cost of the expensive transfers. While a single pop might occasionally take O(n) time (when transferring elements), most operations run in O(1) because each element is only moved once. To check if the queue is empty, we just need to see if both stacks are empty. If so, the queue is empty.


---
## Results
### Complexity Analysis
- **Time Complexity:** O(1) (amortized)
- **Space Complexity:** O(n) for pop / O(1) anything else

### Time execution
- **Time spent:** 0ms (100.00%)
- **Memory used:** 53.83 mb (21.78%)

---
## Notes / Learnings
- You could transfer elements between stacks on every pop or peek to always keep the "queue order" in one stack, but that would make pop/peek O(n) every time, which is worse than our amortized O(1) solution
- The "lazy transfer" (only moving elements when stack2 is empty) is what makes this solution efficient, because it ensures that each element is moved at most once, spreading the cost over many operations
- The non-follow-up solutions means you use stack2 to push all the elements from stack1, so stack1 gets the new data (push), then you pop and push all the data from stack 2 back to stack 1. That would make push always O(n) with 2n + 1 operations
- The last point shall be tested to see how the performance decreases