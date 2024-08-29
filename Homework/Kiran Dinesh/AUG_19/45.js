let arr1 = ['ram', 'rom', 'rm','rim']
let arr2 = ['ram', 'rom', 'rm', 'rim', 'ring']
function intersection(arr1,arr2) {
  const output1 = arr1.filter(element => (
    arr2.includes(element)))
  console.log(output1);
  
}
intersection(arr1,arr2)
