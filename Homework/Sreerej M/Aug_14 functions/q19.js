// 19. Write a function to double the value of each element in an array.


function double(arr)
{
  return arr.map(Element=>Element*2)
}

num=[2,3,4,5,1]
console.log(double(num))