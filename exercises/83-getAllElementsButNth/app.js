// Write your function here
function getAllElementsButNth(array, num){ 
    let newArray = []; 
    for (let index = 0; index < array.length; index++) {
        if (index != num) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']