function quicksort(list){
    if(list.length <=1) return list;
    let less_than_pivot = [];
    let greater_than_pivot = [];
    let pivot = list [0];
    
    for(let el of list.slice(1)){
        if(el <= pivot) less_than_pivot.push(el)
        else greater_than_pivot.push(el)
    }
    let sorted_left = quicksort(less_than_pivot)
    let sorted_right = quicksort(greater_than_pivot)
    return [...sorted_left, pivot, ...sorted_right]

}

let usl = [4,2,3,1];
console.log(quicksort(usl))