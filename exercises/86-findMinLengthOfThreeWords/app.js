// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3){
    let wordLengths = [word1.length, word2.length, word3.length];
    let minLength = wordLengths[0];

    for (let index = 0; index < wordLengths.length; index++) {
        for (let index2 = 0; index2  < wordLengths.length; index2++) {
            if(minLength > wordLengths[index2]) {
                minLength = wordLengths[index2];
            }
            
        }
        
    }
    return minLength;
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1