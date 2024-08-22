// Write a function to create a new array with the square of each element from the original array.
function sq(a = []) {
    var newa = a.map(Element => {
        return Element * Element
    }
    )
    console.log(newa);

}
sq(n = [1, 2, 3, 4, 5])