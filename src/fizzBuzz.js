var fizzBuzz = function(count){
    if(isInValidate(count)){
        return "invalidate input";
    }
    return count;
};

function isInValidate(count){
    if(count===undefined||count===null||!(/(^[1-9]\d*$)/.test(count))){
        return true;
    }
    return false;
}

module.exports = fizzBuzz;