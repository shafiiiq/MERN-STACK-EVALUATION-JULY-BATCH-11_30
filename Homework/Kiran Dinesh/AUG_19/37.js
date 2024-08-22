// 37. Write a function to find the index of the first occurrence of the smallest element in an array.
let arr1 = [20, 25, 35, 9, 45, 1, 40, 40, 2]
smallest = arr1[0]
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] < smallest) {
    smallest = arr1[i]
    index = i
  }
}
console.log(index);
