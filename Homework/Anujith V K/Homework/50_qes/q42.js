// Write a function to find the sum of all odd numbers in an array.
function su(a = []) {
    let sum = 0
    for(i=0;i<a.length;i++)
    {
        if(a[i] % 2 !=0)
        {
            sum=sum+a[i]
        }
    }
    console.log(sum);
}
su([1, 2, 3, 4, 5,7])