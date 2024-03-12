						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHN ADUKO**********************/

import { data5, data100 } from "./data.mjs";
import swap from "./utility_funtions.mjs";
export default function BubbleSort(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j+1, arr);
            }
        }
    }
    return arr;
}

console.log(BubbleSort(data100));
