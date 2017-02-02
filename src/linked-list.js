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
      let node = new Node(data);
      if (this.headofl === null)
      {
        //node.prev = node;
        //node.next = node;
        this.headofl = node;
        this.tailofl = node;
      } else {
        node.prev = this.tailofl;
        //node.next = this.headofl;
        //this.headofl.prev = node;
        this.tailofl.next = node;
        this.tailofl = node;
      }
      this.length++;
      return this;
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

    deleteAt(index)
    {
     var cNode = this.headofl;
     ln = this.length;
     count = 0;
     if (ln === 0 || index < 1 || index > ln)
       {
           throw new Error("Invalid index or length");
       }
     if (index === 1)
       {
           this.headofl = cNode.next;
           if (!this.headofl)
             {
                 cNode.prev = null;
             } else
             {
                 this.tailofl = null;
             }
       }
       else if (index === this.length)
       {
           this.tailofl = this.tailofl.prev;
           this.tail.next = null;
       }
       else
       {
         while (count < index)
           {
               cNode = cNode.next;
               count++;
           }
         cNode.prev.next = cNode.next;
         cNode.next.prev = cNode.prev;
         cNode = null;
       }

     this.length--;
     return this;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
