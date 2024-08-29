// 31. Write a function to find the first element in an array that is greater than a given value.
let arr1 = [1, 2, 5, 45, 20, 25, 40, 1, 40, 40]
value = 5
for (i in arr1) {
  if (arr1[i] > value) {
    first = arr1[i]
    break
  }
}
console.log(first);
