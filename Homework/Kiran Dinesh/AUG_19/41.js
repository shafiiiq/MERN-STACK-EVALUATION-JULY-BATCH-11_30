let arr1 = [20,25,35,9,45,40,2]
let value = 5
function greaterSum(arr1) {
  const output1 = arr1.filter(element => (
    element % value==0))
  console.log(output1.length);

}
greaterSum(arr1)

