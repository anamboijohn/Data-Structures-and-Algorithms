function BubbleSort(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

function swap(i,j,arr)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
return arr;
}

console.log(BubbleSort([1, 4, 7, 3, 6]));