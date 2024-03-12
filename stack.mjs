class Stack{
    constructor(max){
        this.top = -1;
        this.val = Array(max);
        this.MAX = max;
    }

    push(value){
        if(this.isFull()) {
            console.log("Stack Overflow")
            return;
        }
        this.top++;
        this.val[this.top] = value;
    }
    pop(){
        if(this.isEmpty()) {
            console.log("Stack underflow");
            return;
        }
        let val = this.val[this.top];
        this.top--
        return val;
    }
    isEmpty(){
        return this.top == -1;
    }
    isFull(){
        return this.top == this.MAX-1
    }

    size(){
        return this.val.length()
    }

    print(){
        let content = ""
        for(let i = 0; i<=this.top; i++){
            content += `${this.val[i]}`
            if(i != this.top) content += ', '
        }
        console.log(`Stack: [${content}]`);
    }

}

let stack = new Stack(3)
stack.push(1)
stack.push(2);
//stack.push(3);
console.log("full:", stack.isFull())
// let poped = stack.pop()
// stack.pop()

console.log("empty: ", stack.isEmpty())
stack.print();
