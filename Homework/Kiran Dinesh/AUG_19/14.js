// 14. Write a function to find the median value of an array.
function findMedian(arr) {
  arr.sort((a, b) => a - b);

  const len = arr.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}

let arr = [2, 1, 8, 9, 15];
console.log(findMedian(arr));




