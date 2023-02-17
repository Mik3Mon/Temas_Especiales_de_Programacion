const Node = require('./node');

/**
 * +----------------+
 * |   LinkedList   |
 * +----------------+
 * | head           |
 * | tail           |
 * | size           |
 * +----------------+
 * |                |
 * +----------------+
 */

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        /*if (!this.size){
            return true;
        } else{
            return false;
        }*/
        return !this.size ? true : false;
    }

    /**
    * appendToStart
    * @param {number} value The new node value 
    */
    appendToStart (value) {
        const newNode = new Node(value); // Create a new node
        newNode.next = this.head // new node points to head
        this.head = newNode // head = new node
        
        if (this.isEmpty()) { // if list is empty then, this tail points to new Node
            this.tail = newNode; //tail = new node
        }

        ++this.size; // ++this.size

    }

    appendToEnd (value) {
        // 1. Create a new node
        const newNode = new Node(value);
    
        if (this.isEmpty()) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          // 2. tail points to new node
          this.tail.next = newNode;
          // tail = new node
          this.tail = newNode;
        }
    
        ++this.size
    }

    exists (value) {
        if(this.isEmpty()) return false; // if list is empty then, return false

        let currentNode = this.head; // currentNode points to head

        while(currentNode !== null){ // while currentNode != null
            if(currentNode.value === value){ // if value of currentNode same value then, return true
                return true;
            }
            currentNode = currentNode.next; //currentNode equals currentNode.next
        }

        return false;
    }

    //TODO. update this method
    toString(){
        if(this.isEmpty()) return "List is empty";

        let str = " ";
        let currentNode = this.head;

        while(currentNode !== null){
            str += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        
        str += 'null';
        return str;
    }
}

const myLinkedList = new LinkedList();
// const linkedString = myLinkedList.toString();

// console.log(linkedString)
console.log(myLinkedList.isEmpty()) // true

console.log(myLinkedList.toString()); // 'this list is empty'

myLinkedList.appendToStart(3); 

console.log(myLinkedList.isEmpty()) // false

console.log(myLinkedList.exists(3)); // true
console.log(myLinkedList.exists(5)); // false
console.log(myLinkedList.exists(7)); // false

console.log(myLinkedList.toString()); // 3 -> null

myLinkedList.appendToEnd(7);
myLinkedList.appendToEnd(1);
myLinkedList.appendToEnd(23);
myLinkedList.appendToEnd(12);

console.log(myLinkedList.toString()); // 3 - 7- 1- 23- 12 -> null


console.log(myLinkedList.exists(13)); // false
console.log(myLinkedList.exists(23)); // true
console.log(myLinkedList.exists(2)); // false
console.log(myLinkedList.exists(12)); // true