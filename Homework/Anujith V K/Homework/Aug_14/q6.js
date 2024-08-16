function occ(a=[])
{
    var prompt=require('prompt-sync')();
    var val=prompt("enter the value=")
    var num=parseInt(val,10)
    for(i=0;i<a.length;i++)
    {
        if(a[i]=== num)
        {
         console.log(i); 
         break; 
        }
    }
}
occ(n=[10,20,30,40,50,60,70,80,30])