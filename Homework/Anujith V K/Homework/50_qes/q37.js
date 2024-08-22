// Write a function to find the median value of an array.
var b = [10, 20, 30, 40]
var a = b.sort((a, b) => a - b)
console.log(a);
if (a.length % 2 != 0) {
    var midpoint = Math.floor(a.length / 2)
    console.log(a[midpoint]);

}
else {
    var midpoint = Math.floor(a.length / 2)
    var value = Math.floor((a[midpoint] + a[midpoint - 1]) / 2)
    console.log(value);

}

