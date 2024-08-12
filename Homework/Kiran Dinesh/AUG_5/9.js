var prompt=require('prompt-sync')()
var day=parseInt(prompt('enter the day : ')) 
switch (day) {
  case 1:console.log('mon')
    break;
    case 2:console.log('tue')
    break;
    case 3:console.log('wed')
    break;
    case 4:console.log('thur')
    break;
    case 5:console.log('fri')
    break;
    case 6:console.log('sat')
    break;
    case 7:console.log('sun')
    break;
    default:console.log('not a day')
    break;
}
