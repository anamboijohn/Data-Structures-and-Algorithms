class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }

}

const a = new Node(1)
const b = new Node(1)
const c = new Node(1)
const d = new Node(1)
const e = new Node(1)

a.left = b;
a.right = c;
b.left = d;
b.right = e;

// const three = new Node(3)
// const elv =   new Node(11)
// const four =  new Node(4)
// const two =   new Node(2)
// const four2 = new Node(4)
// // const one =   new Node(1)

// three.left = elv
// three.right = four2
// elv.left = four
// elv.right = two
// //four2.right = one


//Depth first traversal
//Both time and space complexity is O(n)
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

//console.log(depthFirstValues(a))


//Recursive solution of Depth first Traversal
const depthFirstValuesRecursive = root =>{
    if(root == null) return []
    const leftVal = depthFirstValuesRecursive(root.left)
    const rightVal = depthFirstValuesRecursive(root.right)
    return [root, ...leftVal, ...rightVal]
}

//console.log(depthFirstValuesRecursive(a))


//implementing Breath First using Queue data structure
//Both space and time complexity is O(n)
const breathFirstTrav = root =>{
    if(root == null) return []
    let queue = [root]
    let result = []
    while(queue.length>0){
        let current = queue.pop()
        result.push(current.val)
        current.left?queue.unshift(current.left):null
        current.right?queue.unshift(current.right):null
    }
    return result

}

//console.log(breathFirstTrav(a))


//breath first Search,
//time and space complexity is O(n)
const treeIncludes = (target, root) =>{
    if(root == null) return []
    let queue = [root]
    while(queue.length>0){
        let current = queue.pop()
        if(current.val == target) return true
        current.left?queue.unshift(current.left):null
        current.right?queue.unshift(current.right):null
    }
    return false

}

console.log(treeIncludes(null, a))

//depth first Search using recursion
const treeIncludesRecursive = (target, root) =>{
    if(root === null) return false
    if(root.val === target) return true
    return treeIncludesRecursive(target, root.left)||treeIncludesRecursive(target, root.right)

}

console.log(treeIncludesRecursive(null, a))




//Sum of tree
//Time and space complexity O(n)
const treeSum= (root) =>{
    if(root === null) return 0
    let left = treeIncludesRecursive(root.left)
    let right = depthFirstValuesRecursive(target, root.right)
    return left.val+right.val + root.val

}
