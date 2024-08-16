var arr = [1, 1, 1, 7, 5, 10, 49, 25];
var prompt = require('prompt-sync')()
var value = prompt('enter the value : ')
var count = 0;
function check() {
  for (var i = 0; i < arr.length - 1; i++) {
    if (value == arr[i]) {
      count++;
    }
  }
  console.log(count);
}

check();
