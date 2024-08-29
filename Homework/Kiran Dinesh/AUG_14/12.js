var arr1 = [1, 7, 5, 0, 49, 25]
var arr2= [22,59,1,26,11,25,3,0]
var newarr=[]
function findSmallest() {
  for (let i = 0; i < arr1.length; i++) {
   newarr.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    newarr.push(arr2[i])
   }
    console.log(newarr);
    
}
  findSmallest();
