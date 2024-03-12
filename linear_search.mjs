						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHN ADUKO**********************/

function linearSeach(target, list){
    for(let i = 0; i<list.length; i++){
      if(list[i] == target) return i;
    }
    return -1;
  }
  
  let arr = [1, 2, 3, 4,5];
  
  console.log(linearSeach(5, arr))