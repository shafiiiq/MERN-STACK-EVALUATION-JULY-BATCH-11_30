// 34. Write a function to create an array of n numbers, all set to a specific value.
let arr1 = [20, 25, 40, 40, 2]
value = 5
const output = arr1.forEach(element => {
  arr1.fill(value)
});
console.log(arr1);
