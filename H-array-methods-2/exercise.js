/*
  Array methods - .join()
  -------------------------
  Complete the capitalize function 
  It should return a string with the first letter in uppercase
  For example, capitalize("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalize(str){
  return str.split("").map(
    (ele,index) => index===0 ? ele.toUpperCase() : ele
  ).join("")
}

//or

// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1)
// }


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let sampleName = 'benyamin';

console.log(capitalize(sampleName));
console.log(capitalize('hello'));

/* 
  EXPECTED RESULT
  ---------------
  Benyamin
  Hello
*/
