// 16. Write a function to create an array of even numbers from an existing array.


function even(arr)
{
  output= arr.filter(item => item%2==0)
  console.log(output)
}

num=[2,3,4,5,,16,50,46,7,9,8]
even(num)