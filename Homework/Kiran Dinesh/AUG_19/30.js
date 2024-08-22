// 30. Write a function to count the total number of characters in an array of strings.
let arr1 = ['ram', 'rom', 'rm', 'rim', 'ring']
output=[]
sum=0
function totalChar(arr1) {
  const output1=arr1.map(element=>(
    element.split('')
  ))
  for(i in output1){
    sum=sum+output1[i].length
  }
  console.log(sum);
}
totalChar(arr1)
