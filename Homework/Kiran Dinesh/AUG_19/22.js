// 22. Write a function to create a new array with the square of each element from the original array.
let arr1 = [1, 2, 6, 5, 5, 2, 2]
function even(arr1){
  const output=arr1.map(element => (
    element*element
  ));
  console.log(output);
}
even(arr1)