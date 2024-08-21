// Write a function to remove all instances of a specific value from an array.


function remove_inst(arr,value)
{
  return arr.filter(item => item != value)
}

var num=[2,4,6,7,3,2,4];
console.log(remove_inst(num,4))