
var arr = [100, 7, 5, 10, 490, 25]
var largest = arr[0]
index=0
function large() {
  for (i = 0; i < arr.length; i++) {
      if(largest<arr[i]){
        largest=arr[i]
        index=i
      }
  }
console.log(index);

}

large();
