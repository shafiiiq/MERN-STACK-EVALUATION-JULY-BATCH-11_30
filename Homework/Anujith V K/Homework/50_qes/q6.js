// Write a function to create an array of elements that are common between two arrays.
function comm(a = [], b = []) {
    const newr = b.filter(item => a.includes(item))
    console.log(newr);
}
comm(a = ['a', 'b', 'c', 'd'], b = ['a', 'd', 'o', 'f'])