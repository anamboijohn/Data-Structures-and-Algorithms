class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }

}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')

a.left = b;
a.right = c;
b.left = d;
b.right = e;

//Depth first traversal
const depthFirstValues = (root) =>{
    if(!(root instanceof Node)) return []
    let result =[]
    const stack = [root]
    while(stack.length>0){
        let current = stack.pop()
        result.push(current.val)

        //add the node children to the stack
        current.right?stack.push(current.right) : null 
        current.left?stack.push(current.left) : null 
    }
    return result
}

console.log(depthFirstValues(a))

