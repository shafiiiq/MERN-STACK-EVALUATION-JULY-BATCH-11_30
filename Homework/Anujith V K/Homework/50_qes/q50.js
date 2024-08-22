// Write a function to find the average of all elements in an array.
function avg(a = []) {
    let sum = 0
    let average = 0
    for (i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }
    average = sum / a.length
    console.log(average);

}
avg([1, 2, 3, 4, 5, 6])