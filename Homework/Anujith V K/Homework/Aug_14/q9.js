function large(a=[])
{
    var largest=a[0];
    var index=0

    for(i=1;i<a.length;i++)
    {
        if(a[i]>largest)
        {
            largest=a[i];
            index=i;
        }
    }
    console.log(index); 
}
large(n=[100,20,30,70,400,50,60,90])