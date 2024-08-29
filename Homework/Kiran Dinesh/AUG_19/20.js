// 20. Write a function to insert a new element at a specific index in an array.
let arr1 = [1, 2, 6, 5, 5, 2, 2];
value=10
index=2
function insert(arr1) {
  arr1.splice(index,0,value)
  console.log(arr1);
}
insert(arr1);
