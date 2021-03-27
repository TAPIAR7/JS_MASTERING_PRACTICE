// Write your function here
function average(num1, num2) {
    return (num1 + num2) / 2;
}
function computeAverageLengthOfWords(word1, word2) {
  // your code here
  return average(word1.length, word2.length);
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6