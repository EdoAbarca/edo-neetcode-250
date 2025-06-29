# Problem: 225. Implement Stack using Queues
**Category:** Stack

**Difficulty:** Easy

**Leetcode Link:** [https://leetcode.com/problems/implement-stack-using-queues](https://leetcode.com/problems/implement-stack-using-queues)

**Status:** Finished, open to suggestions.
---

## Problem Statement

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.
 

Follow-up: Can you implement the stack using only one queue?

---

## Approach

### Thought Process

As the problem states, Queues are needed to implement a Stack:
 - Queue: FIFO DS -> First In, First Out
 - Stack: LIFO DS -> Last In, First Out
That said, the real challenge comes when the stack has to be simulated using one queue, which can be done in 2 ways:
1. Using the tail (right end of the DS) as the top stack:
    - This approach expects you to think deep about how you might push a new element, as pop and peek are straightforward O(1) operations
    - That means an O(n) (n = size of queue) should be performed so the elements are rotated and the expected element inserted
2. Using the head (left end of the DS) as the top stack:
    - This approach expects you to think deep about how you might pop an element, as push and peek are straightforward O(1) operations
    - That means an O(n) (n = size of queue) should be performed so the elements are rotated and the expected element deleted


### Strategy Used

1. Push (for the first approach):
    1. Queue the element to be pushed
    2. Dequeue (tail -> last element of the queue) and save
    3. Push it to the queue again
    4. Repeat 2 and 3 until the element queued in step 1 becomes the tail of the queue
2. Pop (for the second approach):
    1. Dequeue (tail) and save
    2. Push it to the queue again
    3. Repeat 1 and 2 until the tail (last element of the queue) holds what once was the head (first element of the queue)
    4. Dequeue

---
## Results
### Complexity Analysis
- **Time Complexity:** O(n) when pushing, O(1) anything else
- **Space Complexity:** O(n)

### Time execution
- **Time spent:** 0ms (100.00%)
- **Memory used:** 53.87 mb (19.59%)

---
## Notes / Learnings
- The first approach (looping over the push operation) was used to answer this exercise
- Although the follow-up was accomplished, there's no idea what might be the 2-queues approach
- Notes for the pop approach shall be added for reference