// 8. Write a function to remove all instances of a specific value from an array.


function RemoveInstance(arr,value)
{
  return arr.filter(item => item != value)
}

var num=[2,4,6,7,3,2,4];
console.log(RemoveInstance(num,4))