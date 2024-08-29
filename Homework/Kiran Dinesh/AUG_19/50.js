var prompt = require('prompt-sync')()
let arrLength = prompt('enter arrLength: ')
let arr = []
for (let i = 0; i < arrLength; i++) {
  arr[i] = prompt()
}

function checkPali(arr) {
  let flag = 1;
  let rev = arr.slice().reverse()
  console.log(rev);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != rev[i]) {
      flag = 0;
      break;
    }
  }
  if (flag === 1) {
    console.log('pali');
  } else {
    console.log('NotPali');
  }
}
checkPali(arr)