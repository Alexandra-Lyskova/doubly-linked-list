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

    at(index)
    {
      var cNode = this.headofl,
      count = 0;

      while (count < index) {
        cNode = cNode.next;
        count++;
      }

      return cNode.data;
    }

    insertAt(index, data)
    {
      var cNode = this.headofl,
    	newcNode = new Node(data),
    	count = 0;

    	if (!cNode) {
    		this.append(data);
    	}
    	else {
    		while (count < index) {
    			cNode = cNode.next;
    			count++;
    		}

    		newcNode.prev = cNode.prev;
    		newcNode.next = cNode;
    		cNode.prev.next = newcNode;
    		cNode.prev = newcNode;

            this.length++;
    	}
    	return this;
    }

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

    reverse()
    {
      var cNode = this.headofl;
      var previous = null;

      while(cNode) {
        // save next or you lose it!!!
        var save = cNode.next;
        // reverse pointer
        cNode.next = previous;
        // increment previous to current node
        previous = cNode;
        // increment node to next node or null at end of list
        cNode = save;
      }
      return previous;
    }

    indexOf(data)
    {
      var cNode = this.headofl;
      index = 0;
      while (cNode.data != data)
      {
          if (!cNode.next) return (index-1);
          else
          {
              cNode = cNode.next;
              index++;
          }
      }
      return index;
    }
}
module.exports = LinkedList;
