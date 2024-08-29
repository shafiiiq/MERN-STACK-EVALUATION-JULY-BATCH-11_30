// 15. Write a function to find the mode (most frequent element) in an array.

let arr = [2, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 15]
frequent={}
let index=null
maxFrequent=0
arr.forEach(element => {
  frequent[element]=(frequent[element]||0)+1;
  if(maxFrequent<frequent[element])
  {
    maxFrequent=frequent[element]
    index=element
  }
});

console.log(frequent);
console.log(index);
