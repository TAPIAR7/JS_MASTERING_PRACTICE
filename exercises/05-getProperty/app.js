function getProperty(obj, key) {
  // your code here
return obj[key];

}
var car = {
  model: 'Toyota'
};

console.log(car['model']);
console.log(getProperty(car, 'model'));