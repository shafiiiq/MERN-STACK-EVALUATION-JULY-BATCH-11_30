// 29. Write a function to concatenate all strings in an array into a single string.
let arr1 = ['ram', 'rom', 'rm', 'rim', 'ring']
let string=''
function totalChar(arr1) {
  for(i in arr1){
    string=string+arr1[i]
  }
  console.log(string);
}
totalChar(arr1)
