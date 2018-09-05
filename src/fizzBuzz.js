function isInValidate(count) {
    if (count === undefined || count === null || !(/(^[1-9]\d*$)/.test(count))) {
        return true;
    }
    return false;
}

function isFizz(number) {
    return number%3 === 0 ? "Fizz" : "";
}

function isBuzz(number) {
    return number%5 === 0 ? "Buzz" : "";
}

function isWhizz(number) {
    return number%7 === 0 ? "Whizz" : "";
}

var getFizzBuzz = function (count) {

    if (isInValidate(count)) {
        return "invalidate input";
    }

    var fizzBuzzResults = new Array();

    for(var number=1;number<=count;number++){

        var numberFizzBuzzResult = isFizz(number) + isBuzz(number) + isWhizz(number);

        fizzBuzzResults.push(numberFizzBuzzResult === "" ? number : numberFizzBuzzResult);
    }
    return fizzBuzzResults;
};

module.exports.getFizzBuzz = getFizzBuzz;

module.exports.isFizz = isFizz;

module.exports.isBuzz = isBuzz;

module.exports.isWhizz = isWhizz;