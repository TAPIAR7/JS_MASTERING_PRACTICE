// Write your function here
function addToFrontOfNew(array, num){
    let newArray = [num]; 
    for (let index = 0; index < array.length; index++) {
        newArray.push(array[index]);
    }
    
    return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]