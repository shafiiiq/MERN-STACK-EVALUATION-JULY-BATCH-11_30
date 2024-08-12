var prompt=require("prompt-sync")();
var s=prompt("enter the String=");
var string="";
for(i=(s.length)-1;i>=0;i--) 
    {
string=string+s[i];
    }
console.log(string);

