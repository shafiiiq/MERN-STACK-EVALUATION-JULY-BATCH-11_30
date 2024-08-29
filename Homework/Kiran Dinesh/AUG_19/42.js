let arr1 = [23, 2, 6, 5, 5, 7, 9, 0, 1]
let value = 5
function greaterSum(arr1) {
  const output1 = arr1.filter(element => (
    element > value))
  let sum = 0;
  for (i in output1) [
    sum = sum + output1[i]
  ]
  console.log(sum);

}
greaterSum(arr1)

