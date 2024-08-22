// 3. Write a function to count how many elements in an array are greater than a given number.

function countelement(arr,n){
  var num=arr.filter(element=>(
    element>n
  ))
  console.log(num)
  console.log(num.length);
  
}

var ar=[2,3,7,5,4]
countelement(ar,4)