// Write a program to check if a given character is a vowel (a, e, i, o, u) or not.
var prompt = require('prompt-sync')();
var c=prompt('Enter character? ');
if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||c=='A'||c=='E'||c=='I'||c=='O'||c=='U'){
    console.log("vowel")
}else{
    console.log("not vowel")
}