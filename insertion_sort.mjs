const insertionSort = (arr)=>{
    let n = arr.length;
    for(let i=1; i<n; i++){
        let key = arr[i];
        let j = i;
        for(; arr[j-1]>key;j--){
            arr[j] = arr[j-1];
        }
        arr[j] = key;
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1])); // [1,2,3,4,5]