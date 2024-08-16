function smallest(a=[])
{
    var small=a[0];
    var index=0

    for(i=1;i<a.length;i++)
    {
        if(a[i]<small)
        {
            small=a[i]
            index=i;
        }
    }
    console.log(index); 
}
smallest(n=[100,20,30,10,400,50,60,90])