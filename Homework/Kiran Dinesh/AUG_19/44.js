let arr1 = [23, 2, 6, 5, 5, 7, 9, 0, 1]
let value = 5
function greater(arr1) {
  const output1 = arr1.filter(element => (
    element > value))
  console.log(output1);

}
greater(arr1)

