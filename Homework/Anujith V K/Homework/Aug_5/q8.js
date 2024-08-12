var prompt=require("prompt-sync")();
var arr=['A' ,'E','I','O','U','a','e','i','o','u'];
var ch=prompt("enter the character=");
var isvowel=false;

for(i=0;i<arr.length;i++)
{
    if(ch===arr[i])
    {
        isvowel=true;
        break;
    }
}
if(isvowel==true)
{
   console.log("is a vowel");   
}
else{
    console.log("not a vowel");
    
}