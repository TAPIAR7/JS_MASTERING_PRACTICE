// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    let filtered = obj[key].filter(function(value){ 
        return ((value.length % 2) != 0);
    });
    return filtered;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']