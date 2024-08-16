// 18. Write a function to remove the last element from an array.


function remove(arr)
{
  arr.pop()
  return arr
  
}

num=[0,3,6,4,1,6,9]

console.log(remove(num))