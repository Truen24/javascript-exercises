const ftoc = function(num) {
  let result = ((num - 32) * .5556);
  
  if(result === 0) {
    return result;
  }

// Note to self toFixed returns a string lol...

// Better solution: return Math.round((f-32) * (5/9) * 10) /10; same with Celsius

  return Math.round(result * 10) / 10;
};

const ctof = function(num) {
  let result = ((num * 1.8) + 32);

  if(result === 0 || result === 32) {
    return result;
  }

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
