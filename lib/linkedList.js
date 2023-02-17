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
        const newNode = new Node(value); //Create new node
        //if list is empty then, this head points to new node
        if(this.isEmpty()){
            this.head = newNode;
            ++this.size;
        }
        var currentNode = this.head; //Create variable currentNode
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        ++this.size;
    }

    exists (value) {
        var currentNode = this.head;
        while(currentNode != null){
            if(currentNode.getValue() == value){
                return true;
                currentNode = currentNode.next
            }
        }
        return false;
    }

    //TODO. update this method
    toString(){
        return this.head + ' - ' + this.tail + ' - ' + this.size;
    }
}

const myLinkedList = new LinkedList();
//const linkedString = myLinkedList.toString();

//console.log(linkedString)
console.log(myLinkedList.isEmpty()) // true

myLinkedList.appendToStart(3);

//console.log(linkedString);

console.log(myLinkedList.isEmpty()) // false

myLinkedList.appendToEnd(5);
myLinkedList.appendToEnd(1);
myLinkedList.appendToEnd(23);
myLinkedList.appendToEnd(12);

console.log(myLinkedList.exists(5)); // false
console.log(myLinkedList.exists(13)); // true
console.log(myLinkedList.exists(23)); // true
console.log(myLinkedList.exists(2)); // false
console.log(myLinkedList.exists(12)); // true
