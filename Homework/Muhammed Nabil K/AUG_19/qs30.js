function countCharacter(arr){
  let sum=0
var output= arr.map(element =>(element.split('')))
console.log(output);
for(i in output)
{
  sum=sum+output[i].length
}
console.log(sum);
}
var arr1=['mohammad','nabil','k']
countCharacter(arr1)

