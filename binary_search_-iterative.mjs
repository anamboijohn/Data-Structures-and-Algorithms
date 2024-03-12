						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHNADUKO**********************/
                        
import { data10, data100 } from "./data.mjs";
export default function binarySearch(list, target){
    let start = 0;
    let end = list.length - 1;
    
    while(start <= end){
      let mid = Math.floor((start+end)/2);
      if(target == list[mid]) return mid;
      else if(list[mid]>target) end = mid-1;
      else start = mid+1;
    }
    return -1
  }

console.log(binarySearch(data10, 7));