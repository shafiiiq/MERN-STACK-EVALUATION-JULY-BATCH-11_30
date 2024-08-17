// Write a function to remove all instances of a specific value from an array.


function remove_instance(arr,value)
{
  return arr.filter(item => item != value)
}

var num=[2,4,6,7,3,2,4];
console.log(remove_instance(num,3))