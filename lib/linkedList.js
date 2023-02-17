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
        
        ++this.size; // ++this.size
        
        if (this.isEmpty()) { // if list is empty then, this tail points to new Node
            this.tail = newNode; //tail = new node
        }
    }

    appendToEnd (value) {
        const newNode = new Node(value); // 1. Create a new node
        this.tail.next = newNode;// 2. new node points to head
        this.tail = newNode;// 3. tail = new node
        ++this.size;
    }

    exists (value) {
        if(this.isEmpty()) return false; // if list is empty then, return false

        let currentNode = this.head; // currentNode points to head

        while(currentNode != null){ // while currentNode != null
            if(currentNode.value == value){ // if value of currentNode same value then, return true
                return true;
            }
            currentNode = currentNode.next; //currentNode equals currentNode.next
        }
        return false;
    }

    //TODO. update this method
    toString(){
        let str = ""

        if(this.isEmpty()){
            str = "Empty"
            return str;
        }

        let currentNode = this.head;

        while(currentNode.next != null){
            str = str + " -> " + currentNode.value;
            currentNode = currentNode.next;
        }
        
        str = str + " -> " + "null";
        return str;
    }
}

const myLinkedList = new LinkedList();
//const linkedString = myLinkedList.toString();

//console.log(linkedString)
console.log(myLinkedList.isEmpty()) // true

myLinkedList.appendToStart(3);

//console.log(linkedString);

console.log(myLinkedList.isEmpty()) // false

console.log(myLinkedList.exists(3)); // true
console.log(myLinkedList.exists(7)); // false


