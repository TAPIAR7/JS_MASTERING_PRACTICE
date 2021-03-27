function isOldEnoughToDrive(age) {
  // your code here
  if (age >= 16){
        return true;
    }
    else{
        return false;
    }
}

function isOldEnoughToDrink(age){
    // your code here
    if (age >= 21){
        return true;
    }
    else{
        return false;
    }
}


function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  if (isOldEnoughToDrink(age) || isOldEnoughToDrive(age)){
        return false;
    }
    else{
        return false;
    }

}

console.log(isOldEnoughToDrinkAndDrive(10));