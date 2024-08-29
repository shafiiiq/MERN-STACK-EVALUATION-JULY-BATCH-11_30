// 40. Write a function to check if an array contains duplicate values.

let arr1 = [20, 25, 35, 9, 45, 40, 40, 2]
flag = 1
for (i = 0; i < arr1.length; i++) {
  for (j = i + 1; j < arr1.length - 1; j++) {
    if (arr1[i] == arr1[j]) {
      flag = 1
    }
    else { flag = 0 }
  }
}
if (flag) {
  console.log("Contain Duplicate");
} else {
  console.log("Doesn't Contain Duplicate");
}