var arr = [1, 7, 5, 10, 49, 25]
var largest = arr[0]
function large() {
  for (i = 0; i < arr.length; i++) {
      if(largest<arr[i]){
        largest=arr[i]
      }
  }
console.log(largest);

}

large();
