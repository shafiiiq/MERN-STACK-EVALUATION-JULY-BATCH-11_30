function small(a=[]){
    small=a[0]
    for(i=1;i<a.length;i++)
    {
        if(small>a[i])
        {
            small=a[i];
        }
    }
    console.log(small);
    
}
small(n=[30,40,20,10,50,60])