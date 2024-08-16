var arr = [1, 1, 1, 7, 5, 10, 49, 25,9,8,7,100];
function sortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  
}

sortAscending(arr)