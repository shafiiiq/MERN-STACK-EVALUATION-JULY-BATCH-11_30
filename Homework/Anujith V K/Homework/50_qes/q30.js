// Write a function to split an array into two halves.
function tha(a = []) {
    var midpoint = Math.floor(a.length / 2)
    var firsthalf = a.slice(0, midpoint)
    var secondhalf = a.slice(midpoint)
    console.log(firsthalf, secondhalf);
}
tha(n = [1, 2, 3, 4, 5, 6])