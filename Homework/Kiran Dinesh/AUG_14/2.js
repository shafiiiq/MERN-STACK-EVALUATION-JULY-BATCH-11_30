var arr = [1, 7, 5, 10, 49, 25]
let smallest = arr[0];
function findSmallest() {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
 console.log(smallest);
}
  findSmallest();
