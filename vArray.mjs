						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHNA DUKO**********************/

//NOTE if you are downloading this alone, download the data.mjs file for testing data, or use ur own data for testing

import { data20, data20Sorted, fish } from "./data.mjs";
export default function arrayVisualizer(arr) {
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

// console.log(arrayVisualizer(data20));
// console.log(arrayVisualizer(data20Sorted));

function arrayVisualizer1(arr) {
    let maximum = Math.max(...arr);
	let minimum = Math.min(...arr);
	function visualize(max) {
		if(minimum<0){
			if (max < minimum+1) return;
		}else{
			if (max < 0) return;
		}
		let block = "";
		for (let el of arr) {			
				max > 1? (el >= max )? block += "* " : block += "  ":
				max < 1? (el + 2 <= max) ? block += "* " : block += "  ":block += "* ";
		}
		console.log(block);

		visualize(max - 1);
	}

    visualize(maximum);

    return "Done";
}
// console.log(arrayVisualizer1([4, 4, 4, 4]))

function arrayVisualizer2(arr) {
    let maximum = Math.max(...arr);
	let minimum = Math.min(...arr);
	function visualize(max) {
		if(max == 0) max = -1;
		if(minimum<0){
			if (max < minimum) return;
		}else{
			if (max < 0 ) return;
		}
		let block = "";
		for (let el of arr) {			
				max > 0? (el >= max )? block += "# " : block += "  ":
				max < 0? (el  <= max) ? block += "# " : block += "  ":block += " ";
				
				// console.log(el)
				// console.log(block);
		}
		console.log(block);

		visualize(max - 1);
	}

    visualize(maximum);

    return "Done";
}
console.log(arrayVisualizer2([1, 2, 3, 4, 5, 6, 7, -7, -6, -5, -4, -3, -2, -1]))


console.log(arrayVisualizer2(fish))
//console.log(arrayVisualizer2([1, 2, 3, 4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4, 5,4,3,2,1,2,3,4,3,2,1,2,3,2,1, -1, -2, -3, -4,-5,-6,-7,-6,-5,-4,-3,-2,-1,-2,-3,-4,-5,-6,-5,-4,-3,-2,-1,-2,-3,-4,-5,-4,-3,-2,-1,-2,-3,-4,-3,-2,-1,-2,-3,-2,-1]))