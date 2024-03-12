function arrayVisualizer(arr) {
    let maximum = Math.max(...arr)-1;
    // console.log(maximum, " Maximum");
	function visualize(max) {
		if (max == -1) return;
		let block = "";
		for (let el of arr) {
			el > max ? (block += "* ") : (block += "  ");
		}
		console.log(block);

		visualize(max - 1);
	}

    visualize(maximum);

    return "Done";
}

const arr = [10, 6, 9, 3, 4, 11, 8, 12];
arrayVisualizer(arr);
console.log();
function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        arrayVisualizer(arr);
        console.log();
    }
    return arr;
}

bubbleSort(arr);