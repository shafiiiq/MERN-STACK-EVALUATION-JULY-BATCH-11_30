function large(a=[])
{
    large=a[0];
    for(i=1;i<a.length;i++)
    {
        if (a[i]>large)
        {
            large=a[i]
        }
    }
    console.log(large);
    
}
large(ar=[10,20,30,60,50,25]);