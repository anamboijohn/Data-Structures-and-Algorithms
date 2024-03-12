						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHN ADUKO**********************/
//implementing linked list in js
export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export class LinkedList {
    constructor(head){
        this.head = head;
    }
    push(value){
        const newNode = new Node(value);
        let current = this.head;
        if(!current) this.head = newNode;
        else{
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
    }
    unshift(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    //inserst at an index

    insert(value, index){
        if(index == 0){
            this.unshift(value);
        }
        else{
            const newNode = new Node(value);
            let current = this.head;
            let previous = null;
            let i = 0;
            while(i < index){
                previous = current;
                current = current.next;
                i++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        }

    //change how this class displays data
    toString(){
        let current = this.head;
        let string = "Head->";
        while(current !== null){
            string += current.value + " ";
            current = current.next;
        }
        return string;
    }

    //calculate length of linked list
    length(){
        if(this.head == null){
            return 0;
        }
        let current = this.head
        let count = 1;
        while(current.next!=null){
            count++;
            current = current.next;
        }
        return count;
    }

    //remove from end of linked list
    pop(){
        let current = this.head;
        let previous = null;
        while(current.next !== null){
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    //remove from beginning of linked list
    shift(){
        this.head = this.head.next;
    }

    //remove buy searching for node
    remove(value){
        let current = this.head;
        let previous = null;
        while(current.value !== value){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }

    node_at_index(index){
        if(index == 0) return this.head
        else{
            let current = this.head
            let position = 0
            while(position<index){
                current = current.next
                position += 1
            }
            return current
        }
    }
}

let list2 = new LinkedList();
let list = new LinkedList(new Node(1));
list.push(2);
list.push(5);
list.push(6);
list.insert(1, 0);
list.unshift(0);
list2.push(3)
list2.push(4)


//console.log(list.toString(), list2.toString());