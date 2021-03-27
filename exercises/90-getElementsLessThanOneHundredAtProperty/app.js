// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    let arr = [];
    if (obj[key].length === 0) {
        return arr;
    }
    function menor(value){return value < 100;}
 
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
        if (element < 100) {
            arr.push(element);
        }
    });
    return arr;
}
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]