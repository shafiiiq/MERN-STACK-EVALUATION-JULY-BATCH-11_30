var prompt = require('prompt-sync')();
var char = prompt("enter the character");
if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u" )
{
    console.log("given charcter is vowel");
}
else{
    console.log("given charcter is not vowel");
}