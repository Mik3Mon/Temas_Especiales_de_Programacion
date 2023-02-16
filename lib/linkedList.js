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

    appendToStart(value){
        const newNode = new Node(value); // Create new node
        newNode.next = this.head; // New node points to head
        this.head = newNode; // Head = new node
        ++this.size;//size
        //if list is empty then, this tail points to new node
        if (this.isEmpty()){
            this.tail = newNode;
        }
    }

    appendToEnd (value) {
        
    }

    exists (value) {

    }

    //TODO. update this method
    toString(){
        return this.head.getValue + ' - ' + this.tail + ' - ' + this.size;
    }
}

const myLinkedList = new LinkedList();
//const linkedString = myLinkedList.toString();

// console.log(linkedString)
console.log(myLinkedList.isEmpty()) // true

myLinkedList.appendToStart(3);

console.log(myLinkedList.isEmpty()) // false

myLinkedList.appendToEnd(7);
myLinkedList.appendToEnd(1);
myLinkedList.appendToEnd(23);
myLinkedList.appendToEnd(12);

console.log(myLinkedList.exists(5)); // false
console.log(myLinkedList.exists(13)); // true
console.log(myLinkedList.exists(23)); // true
console.log(myLinkedList.exists(2)); // false
console.log(myLinkedList.exists(12)); // true
