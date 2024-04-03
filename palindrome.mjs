let str = "racecar";
// //Madam
// function palindrome(str){
//     let mid = Math.floor(str.length/2)
//     return str.slice(0, mid).split("").every((alph, indx, arr)=>{
//         if(alph == str[(str.length-1)-indx]) return true
//         else return false
//     })
    
// }
function palindrome1(str){
    let mid = Math.floor(str.length/2)
    let lastIndex = str.length-1;
    let is_pal = true;
    for(let i = 0; i < mid; i++){
        is_pal = str[i] == str[lastIndex-i] //it compares the last index of strings and store the value inside pal
    }
    
    return is_pal;
    
}
function isPalindrome2(str){
    let strArr = str.split('') //converts string to arr
    let mid = Math.floor(strArr.length/2)
    let lastIndex = strArr.length-1;
    let is_pal = true;
    for(let i = 0; i < mid; i++){
        if(strArr[i] != strArr[lastIndex-i]){
            is_pal = false
            break;
        } //it compares the last index of strings and store the value inside pal
    }
    
    return is_pal;
    
}

const palindrome3 = (x) => x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
  

console.time("palindrome3")
    console.log(palindrome3(str))
console.timeEnd("palindrome3") //29.180
  console.time("palindrome1")
      console.log(palindrome1(str))
  console.timeEnd("palindrome1") //24.0002ms
console.time("palindrome2")
    console.log(palindrome2(str))
console.timeEnd("palindrome2") //27.6674
