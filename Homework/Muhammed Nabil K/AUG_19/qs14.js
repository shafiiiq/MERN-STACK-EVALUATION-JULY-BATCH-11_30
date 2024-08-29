function med(arr){
  var s=arr.sort((a,b)=>a-b)
console.log(s);

var len=s.length
var mid=Math.floor(len/2)
let median=0

if(len %2!=0)
{
  median=s[mid]
  
}
else{
  median=(s[mid]+s[mid-1])/2
}
console.log(median)
}
var arr1=[3,1,4,2,9,7,5]
med(arr1)