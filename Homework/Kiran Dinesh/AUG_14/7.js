var arr = [1, 1, 1, 7, 5, 10, 49, 25];
var prompt = require('prompt-sync')()
var value = prompt('enter the value : ')
flag = false
function check() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      flag = true
      break
    }
  }
  found()
}
function found() {

  if (flag) {
    console.log(value + ' is present');
  } else {
    console.log(value + ' not is present');
  }
}
check();