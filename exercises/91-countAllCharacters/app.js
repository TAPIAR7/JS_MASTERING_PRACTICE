// Write your function here
function countAllCharacters(par){
    let counts = {};

    // your code here
    for (let index = 0; index < par.length; index++) {
        if ((counts.hasOwnProperty(par[index].toLowerCase()) === false) && (par[index] != ' ')) {
            counts[par[index].toLowerCase()] = 1;
        }
        else {
            if (counts.hasOwnProperty(par[index].toLowerCase()) === true) {
                counts[par[index].toLowerCase()] += 1;
            }
        }
    }
    return counts;
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
