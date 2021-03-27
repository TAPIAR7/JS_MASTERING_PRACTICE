// Write your function here
function computeAverageOfNumbers(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum / array.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3