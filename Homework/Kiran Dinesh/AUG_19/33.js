// 33. Write a function to create an array of n random numbers.
let arr1 = [20, 25, 40, 40, 2]
  
for(i in arr1)[
  arr1[i]=Math.ceil(Math.random()*10)
]
console.log(arr1);
