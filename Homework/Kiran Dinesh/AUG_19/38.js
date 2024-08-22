// 38. Write a function to find the index of the last occurrence of a specific value in an array.
let arr1 = [20, 25, 40, 40, 2]
value = 40
let index
function occur(arr1) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] == value) {
      index = i
    }
  }
  console.log(index);
}
occur(arr1)

