var arr = [1, 7, 5, 10, 49, 25,9,8,7,100];
function doubleElements(arr) {
  let result = [];
  arr.forEach(element => {
    result.push(element*2)
  });
  console.log(result);
}
doubleElements(arr)