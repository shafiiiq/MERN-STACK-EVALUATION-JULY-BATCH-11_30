// 25. Write a function to double every element in an array.
let arr1 = [1, 2, 6, 5, 5, 2, 2]
function double(arr1){
  
  const output=arr1.map(element => (
    element*2
  ));
  console.log(output);
}
double(arr1)