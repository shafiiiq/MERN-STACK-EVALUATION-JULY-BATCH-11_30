// 23. Write a function to remove all even numbers from an array.
let arr1 = [1, 2, 6, 5, 5, 2, 2]
function even(arr1){
  const output=arr1.filter(element => (
    element%2!=0
  ));
  console.log(output);
}
even(arr1)