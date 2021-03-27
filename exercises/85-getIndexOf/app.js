// Write your function here
function getIndexOf(letter, phrase){
    let status = -1;
    for (let index = 0; index < phrase.length; index++) {
        if (letter === phrase[index]) {
            status = index;
            break;
        }
    }
    return status;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2