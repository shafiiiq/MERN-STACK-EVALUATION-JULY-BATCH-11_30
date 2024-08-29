var arr = [1, 7, 5, 0, 49, 25]
let smallest = arr[0];
index=0
function findSmallest() {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      index=i
    }
  }
 console.log(index);
}
  findSmallest();
