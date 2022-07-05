const reverseString = function(aString) {

   //return aString.split('').reverse().join('');

   let reversed = "";

   for(let i = aString.length - 1; i >= 0; i--) {
    reversed += aString[i];
   }

   return reversed;

};

// Do not edit below this line
module.exports = reverseString;
