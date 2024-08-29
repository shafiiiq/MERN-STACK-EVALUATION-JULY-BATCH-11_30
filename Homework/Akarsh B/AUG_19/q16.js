// 16. Write a function to check if an array is sorted in ascending order

let arr1 = [1,3, 2, 1];
let arr2 = [1, 2, 3];
  
function sortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(sortedAscending(arr1)); 
  console.log(sortedAscending(arr2));