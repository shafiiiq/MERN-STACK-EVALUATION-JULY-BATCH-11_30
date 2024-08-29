function mergeAlternately(arr1, arr2) {
  let mergedArray = [];
  let length = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    if (i < arr1.length) {
      mergedArray.push(arr1[i]);
    }
    if (i < arr2.length) {
      mergedArray.push(arr2[i]);
    }
  }

  return mergedArray;
}

let arr1 = [1, 2];
let arr2 = [3, 4,7,8];
console.log(mergeAlternately(arr1, arr2));
