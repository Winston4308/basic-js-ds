const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }   npm run test
 */
class Queue {
  constructor () {
    this.data = [];
    this.len = 0;
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.len === 0) {
      return "Queue is empty";
    }
    return this.data;
  }

  enqueue(value) {
    this.len++;
    if (this.len === 1) {
      this.data.unshift({value: value, next: null});
    }
    else {
      this.data.unshift({value: value, next: this.data});
    }
  }

  dequeue() {
    if (this.len === 0) {
      return "Queue is empty";
    }
    let reult = this.data[this.len-1];
    this.data.slice(this.len-1, 1);
    this.len--;
    return reult.value;
  }
}

module.exports = {
  Queue
};
