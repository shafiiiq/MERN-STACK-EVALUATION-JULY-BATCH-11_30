// Write a function to create a new array by multiplying corresponding elements of two arrays.
function mul(a = [], b = []) {
    if (a.length != b.length) {
        console.log("cant multiply");
        return;
    }
    const c = a.map((item, index) => item * b[index])
    console.log(c);
}
mul(a = [2, 3, 4, 5], [6, 7, 8, 9])