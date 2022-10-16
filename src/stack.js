const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.data = [];
    this.top = 0;
  }
  
  push(element) {
    this.top++;
    this.data[this.top] = element;
  }

  pop() {
    if(this.top === 0) {
      return "Stack is empty";
    }
    let element = this.data[this.top];
    delete this.data[this.top];
    this.top--;
    return element;
  }

  peek() {
    if (this.top === 0) {
      return "Stack is empty";
    }
    return this.data[this.top];
  }
}

module.exports = {
  Stack
};
