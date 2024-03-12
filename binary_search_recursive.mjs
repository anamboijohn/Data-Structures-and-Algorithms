						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHN ADUKO**********************/

import { data10Sorted } from "./data.mjs";
//Binary Search recursive approac

export default function binarySearchRecursive(list, target){
  function search(start, end){
    let mid = Math.floor((start+end)/2);
    if(list.length==0 || start > end) return -1;
    else if(list[mid] == target) return mid;
    else if(list[mid]>target) return search(start, mid-1);
    else return search(mid+1, end);
  }
  return search(0, list.length-1);
}


  
  console.log(binarySearchRecursive(data10Sorted, 10));

  