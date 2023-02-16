function sum(a,b) {
    // if (value) {...} evaluates to True if value is not:
    // null, undefined, NaN, empty string, 0, false

    if (typeof a != "number") {
        throw new Error("Error: sum() value A is not a number");
    }
    if (typeof b != "number") {
        throw new Error("Error: sum() value B is not a number");
    }
    
    return a + b;
    
}

module.exports = sum;