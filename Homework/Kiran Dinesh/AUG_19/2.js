// 2. Write a function to check if all elements in an array are positive.
function positive(arr) {
  flag = 0
  arr.forEach(element => {
    if (element <= 0)
      flag = 1
  });
  if (flag == 0) {
    console.log("arr contains all positive");
  } else {
    console.log("arr contains not positive");
  }

}

let arr = [2, 1, 8, 9, 15];
positive(arr)
