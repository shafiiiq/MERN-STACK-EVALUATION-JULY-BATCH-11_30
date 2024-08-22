let arr1 = [20, 25, 35, 9, 45, 40, 2]
temp = arr1[0]
arr1[0] = arr1[arr1.length-1]
arr1[arr1.length-1] = temp

console.log(arr1);

