var MyQueue = function() {
    this.stack1 = []; // Main stack for push operations
    this.stack2 = []; // Secondary stack for pop/peek operations
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x); // Always push to stack1
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack2.length === 0) {
        // Transfer all elements from stack1 to stack2 (reversing order)
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop(); // Pop from stack2 (front of queue)
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) {
        // Transfer elements if stack2 is empty
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1]; // Peek at top of stack2
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};

/**

var MyQueue = function() {
    this.stack1 = []; // Main stack for push operations
    this.stack2 = []; // Secondary stack for pop/peek operations
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x); // Always push to stack1
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack2.length === 0) {
        // Transfer all elements from stack1 to stack2 (reversing order)
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop(); // Pop from stack2 (front of queue)
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) {
        // Transfer elements if stack2 is empty
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1]; // Peek at top of stack2
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};
 
