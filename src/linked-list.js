const Node = require('./node');

class LinkedList {
    constructor()
    {
      this.headofl = null;
      this.tailofl = null;
      this.length = 0;
    }

    append(data)
    {
      if (this.headofl === null) {
    node.prev = node;
    node.next = node;
    this.headofl = node;
    this.tailofl = node;
  } else {
    node.prev = this.tailofl;
    node.next = this.headofl;
    this.headofl.prev = node;
    this.tailofl.next = node;
    this.tailofl = node;
  }
  this.length++;
    }

    head()
    {
      if (this.headofl) return this.headofl.data;
      else {
        return null;
      }
    }

    tail()
    {
      if (this.tailofl) return this.tailofl.data;
      else {
        return null;
      }
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty()
    {
      if (this.length === 0) return true;
      else {
        return false;
      }
    }

    clear()
    {
      this.headofl = null;
      this.tailofl = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
