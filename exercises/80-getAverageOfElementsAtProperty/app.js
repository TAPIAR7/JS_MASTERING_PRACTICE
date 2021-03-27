// Write your function here
function getAverageOfElementsAtProperty(obj,key){
    if (obj[key].length === 0){return 0;}
    else {
    let sum = 0;
    for(let num in obj[key])
    {
        sum = sum + obj[key][num];
    }
    return sum / (obj[key].length)
    }    
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
