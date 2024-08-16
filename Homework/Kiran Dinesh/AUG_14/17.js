var arr = [1, 7, 5, 10, 49, 25,9,8,7,100];
function removeFirstElement(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  console.log(result);
}
removeFirstElement(arr)