var arr = [1, 1, 1, 7, 5, 10, 49, 25];
var newarr = [];
var prompt = require('prompt-sync')();
var value = parseInt(prompt('Enter a value: '));
function remove() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != value) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
}

remove();