// 36. Write a function to find the index of the first occurrence of the largest element in an array.
let arr1 = [20, 25, 35, 9, 45, 1, 40, 40, 2, 102]
largest = arr1[0]
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    largest = arr1[i]
    index = i
  }
}
console.log(index);
