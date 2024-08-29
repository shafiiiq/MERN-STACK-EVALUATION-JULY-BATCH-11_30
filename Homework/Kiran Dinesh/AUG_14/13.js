var arr = [1, 1, 1, 7, 5, 10, 49, 25];

function findDifference() {
  var max = arr[0];
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(max - min);
}

findDifference();