
var prompt = require('prompt-sync')();
var age = prompt('enter the age : ')
if (age>=65) {
  console.log("old");
} else if (age>=13 && age<=17) {
  console.log('young');
} else if(age>=18){
  console.log('adult');
}
