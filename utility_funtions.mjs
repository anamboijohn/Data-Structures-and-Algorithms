						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHN ADUKO**********************/

export {swap, verify_sorted};

//Swap fuctions
function swap(i,j,arr)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
return arr;
}

//Veryfy if an array is sorted
function verify_sorted(list){
    let n = list.length;
    if(n==0 || n==1) return true;
    return list[0]<list[1] && verify_sorted(list.slice(1));

  }