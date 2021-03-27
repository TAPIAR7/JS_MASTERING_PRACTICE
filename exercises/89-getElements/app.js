// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    let arr = [];
    if (obj[key].length === 0) {
        return arr;
    }
    if (obj[key].includes(10) === false)  {
        return arr;
    }
    if (obj[key].length === 1) {
       return arr;
    }
    if (!obj.hasOwnProperty(key)) {
        return arr;
    }
    obj[key].forEach(element => {
        if (element === 10) {
            arr.push(element);
        }
    });
    return arr;
}
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]