// Write your function here
function removeElement(array, discarder){
    let filtered = array.filter(function(value){ 
        return value != discarder;
    });
    return filtered;
}
var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]