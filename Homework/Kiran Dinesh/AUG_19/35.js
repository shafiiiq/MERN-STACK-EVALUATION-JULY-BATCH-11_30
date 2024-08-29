// 35. Write a function to calculate the product of all elements in an array.
let arr1 = [1, 5, 3]
function mulSum(arr1) {
  let mul = 1;
  for (i in arr1) [
    mul = mul * arr1[i]
  ]
  console.log(mul);
}
mulSum(arr1)

