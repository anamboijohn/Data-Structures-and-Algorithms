function merge_sort(list){
    `
    Sorts a list in ascending order 
    Returns a new sorted list
    
    Devide: find the midpoint of the list and divide into sublists
    Conquer: Recursively sort the sublists created in the previous step
    Combine: Merge the sorted sublists created in the previous step
    `
    if(list.length <= 1) return list;
    let left_half, right_half;
    [left_half, right_half] = split(list);
    //console.log(left_half, right_half)
    let left = merge_sort(left_half);
    let right = merge_sort(right_half);

    return merge(left, right);
   
  }

function split(list){
    `
    Divide the unsorted list at midpoint into sublists
    Returns two sublists - left and right
    `
    let mid = Math.floor(list.length / 2);
    let left = list.slice(0, mid);
    let right = list.slice(mid);
    return [left, right];
}

function merge(left, right){
  `
  
  Merges two lists (arrays), sorting them in the process
  returns a new merged list

  `
  let l = [];
  let i=0;
  let j=0;

  while(i < left.length && j<right.length){
    if(left[i]<right[j]) {
       // console.log("i: ", left[i])
      l.push(left[i]);
      i++
    }
    else {
      l.push(right[j]);
     // console.log("j:", right[j])
      j++
    }
}
  while(i<left.length){
    l.push(left[i]);
    i++
  }
  while(j<right.length){
    l.push(right[j]); 
    j++;
  }

 // console.log("L:", l)
  return l;
  }

  function verify_sorted(list){
    let n = list.length;
    if(n==0 || n==1) return true;
    return list[0]<list[1] && verify_sorted(list.slice(1));

  }

let list = [3, 91, 44, 52, 4, 9, 10, 78]
console.log(verify_sorted(list));
console.log(verify_sorted(merge_sort(list)))

function linearSearch(list){
  for(let i = 0; i<list.length; i++){
     
  }
}
















