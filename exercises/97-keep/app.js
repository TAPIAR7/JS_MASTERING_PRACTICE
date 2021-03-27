// Write your function here
function keep(array, discarder){
    let filtered = array.filter(function(value){ 
        return value === discarder;
    });
    return filtered;
}
var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]