// Write a function to calculate the product of all elements in an array.
function prod(arr = []) {
    var product = 1;
    for (i = 0; i < arr.length; i++) {
        product = product * arr[i]
    }
    console.log(product);

}
prod(n = [4, 5, 3, 2, 1])