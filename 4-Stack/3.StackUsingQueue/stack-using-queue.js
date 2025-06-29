var MyStack = function() {
    this.queue = [];
};

/** Push element x onto stack
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // Push the new element to the end of the queue
    this.queue.push(x);
    // Rotate the queue to make the new element at the front to make it behave like a stack
    for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());
    }
};

/** Remove the element on the top of the stack and return it
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.shift();
};

/** Read the top element of the stack without removing it
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0];
};

/** Check if the stack is empty
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};