let arr1 = [1, 2, 6, 5, 5, 2, 2];

function half(arr1) {
  let mid = Math.floor(arr1.length / 2);
  let sp1 = arr1.splice(0, mid);
  let sp2 = arr1.splice(0);
  console.log(sp1, sp2);
}
half(arr1);
