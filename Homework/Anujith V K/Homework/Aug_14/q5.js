function rev(a=[])
{
    reverse=[];
    for(i=a.length-1;i>=0;i--)
    {
        reverse.push(a[i])
    }
    console.log(reverse);
    
}
rev(n=[10,20,30,40,50])