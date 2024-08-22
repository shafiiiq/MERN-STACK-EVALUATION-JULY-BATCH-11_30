// Write a function to concatenate all strings in an array into a single string.
function con(arr=[]){
   var string=[]
   for(let i in arr)
   {
    string=string+arr[i]
   }
   console.log(string);
   
}
con(c=["hai","there","zoople"])