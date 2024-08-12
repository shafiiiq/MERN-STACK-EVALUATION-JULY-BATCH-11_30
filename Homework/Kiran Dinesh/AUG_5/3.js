
var prompt = require('prompt-sync')();
var temp = prompt('enter the temperature : ')
if (temp>=30) {
  console.log("hot");
} else if (temp>=0 && temp<30) {
  console.log('cold');
} else if(temp<0){
  console.log('freezing');
}
