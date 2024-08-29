var arr = [1, 7, 5, 10, 49, 25,9,8,7,100];
function removeLastElement(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }
  console.log(result);
}
removeLastElement(arr)