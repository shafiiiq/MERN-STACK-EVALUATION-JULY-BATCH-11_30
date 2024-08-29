// Write a function to convert all strings in an array to uppercase.
function upper(arr = []) {
    const upparr = arr.map(Element => Element.toUpperCase())
    console.log(upparr);
}
upper(n = ['hai', 'there', 'zoople'])