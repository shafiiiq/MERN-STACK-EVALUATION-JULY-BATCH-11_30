// Write a function to calculate the sum of all elements in an array.

function sum(arr)
{
    let sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    console.log(sum)
}

sum([1,2,3,4,6,7])