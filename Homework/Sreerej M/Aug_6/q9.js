// 9.  Write a program to print the following pattern using a loop:
// *
// * * 
// * * *
// * * * *
// * * * * *


// var prompt=require('prompt-sync')();
// var num=prompt("enter the num:");

// for(i=0;i<=num;i++)
// {
//   for(j=0;j<num-i;j++)
//   {
//    process.stdout.write(" ")
//   }
//   for(k=1;k<=2*i-1;k++)
//   {
//     process.stdout.write("*")
//   }

//   console.log()

// }

// for(i=0;i<=num;i++)
//   {

// for(j=0;j<i;j++)
//   {
//    process.stdout.write(" ")
//   }
//   for(k=1;k<(num-i)*2;k++)
//   {
//     process.stdout.write("*")
//   }

//   console.log()

// }


// var prompt=require('prompt-sync')();
// var num=prompt("enter the num:");

// for(i=0;i<=num;i++)
// {
//   for(j=0;j<=i;j++)
//   {
//    process.stdout.write(" ")
//   }
//   for(k=1;k<(num-i)*2;k++)
//   {
//     process.stdout.write("*")
//   }

//   console.log()
  
// }


var prompt=require('prompt-sync')()
var num= prompt("enter the number")

for(i=0;i<num;i++)
{
  for(j=0;j<num-i;j++)
  {
    process.stdout.write(" ")
  }

  for(k=0;k<=i*2;k++)
  {
    process.stdout.write("*")
  }
  
  console.log()
}

for(i=1;i<num;i++)
{
  for(j=0;j<=i;j++)
  {
    process.stdout.write(" ")
  }
  for(k=1;k<(num-i)*2;k++)
  {
    process.stdout.write("*")
  }
  console.log()

}