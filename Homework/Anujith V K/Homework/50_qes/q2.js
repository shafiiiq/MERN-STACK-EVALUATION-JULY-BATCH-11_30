// Write a function to convert all strings in an array to lowercase
function lower(arr = []) {
    const lowerarr = arr.map(Element => Element.toLowerCase())
    console.log(lowerarr);
}
lower(n = ["HAI", "THERE", "ZOOPLE"])