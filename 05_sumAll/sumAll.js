const sumAll = function(start, end) {
    let sum = 0;

    if(start < 0 || end < 0 || Number.isInteger(start) == false || Number.isInteger(end) == false) {
        return 'ERROR';
    }

    if(start > end) {
        for(let i = end; i <= start; i++) {
            sum += i;
        }
    }else {
        for(let i = start; i <= end; i++) {
            sum += i;
        }
    }

   

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
