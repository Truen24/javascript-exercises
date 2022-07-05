const repeatString = function(aString, num) {

    if (num < 0) return 'ERROR';

    let myString = "";

    for(let i = 0; i < num; i++) {
    myString += aString; // hey (i = 0) --> heyhey (i == 1) --> heyheyhey (i ==2)
   }

    return myString;


};

// Do not edit below this line
module.exports = repeatString;
