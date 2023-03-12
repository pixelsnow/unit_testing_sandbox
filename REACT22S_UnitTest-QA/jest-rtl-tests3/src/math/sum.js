function sum(a,b) {
    // if (!value) {...} evaluates to True if value is:
    // null, undefined, NaN, empty string, false, 0
    // In this case, we DO NOT want to throw an error if a number is 0 

    if (typeof a != "number") {
        throw new Error("Error: sum() value A is not a number");
    }
    if (typeof b != "number") {
        throw new Error("Error: sum() value B is not a number");
    }
    
    return a + b;
    
}

module.exports = sum;
