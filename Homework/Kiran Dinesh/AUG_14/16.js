var arr = [1, 1, 1, 7, 5, 10, 49, 25,9,8,7,100];
function getEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
getEvenNumbers(arr)