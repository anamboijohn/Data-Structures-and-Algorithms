						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHNA DUKO**********************/

//NOTE if you are downloading this alone, download the data.mjs file for testing data, or use ur own data for testing

import { data20, data20Sorted } from "./data.mjs";
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

console.log(arrayVisualizer(data20));
console.log(arrayVisualizer(data20Sorted));