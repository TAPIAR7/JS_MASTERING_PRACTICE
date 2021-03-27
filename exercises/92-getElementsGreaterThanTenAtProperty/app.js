// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    let arr = [];
    if (obj[key].length === 0) {
        return arr;
    }
    function menor(value){return value > 10;}
 
    if (obj[key].filter(menor).length === 0)  {
        return arr;
    }
    if (obj[key].length === 1) {
        return arr;
    }
    if (!obj.hasOwnProperty(key)) {
        return arr;
    }
    obj[key].forEach(element => {
        if (element > 10) {
            arr.push(element);
        }
    });
    return arr;
}
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]

