import React from 'react';
import renderer from 'react-test-renderer';
// npm install --save-dev react-test-renderer
import App from '../App';
import Counter from '../Counter';


describe("Jest Snapshot testing suite", () => {
    test("Matches DOM Snapshot for App component", () => {
        const domTree = renderer.create(<App />).toJSON();
        expect(domTree).toMatchSnapshot();
    });
    // after running the first time,
    // add <h1>COUNTER</h1> to Counter.js render()
    // run tests again -> snapshot broken
    // use "u" option in Jest to update the shapshot

    test("Should render 3 after three increments", () => {
        const component = renderer.create(<Counter />);
        component.getInstance().increment();
        component.getInstance().increment();
        component.getInstance().increment();
        expect(component.toJSON()).toMatchSnapshot();
    });

});

const sum = require('../math/sum');
describe("Testing multiple cases", () => {
    const testValues = [
        //[numA,numB,result]
        [5,6,11],
        [5,-6,-1],
        [-5,6,1],
        [-5,-6,-11],
        [0,0,0]
    ];
    
    // test.each() uses printf formatting (example: %s)
    // https://jestjs.io/docs/api#testeachtablename-fn-timeout
    test.each(testValues)("add %s and %s to equal %s", (numA,numB,result)=> {
        expect(sum(numA,numB)).toBe(result);
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3)
    });
});

describe("Testing error messages", () => {
    const testValuesA = [
        //[numA,errorA]
        ["","Error: sum() value A is not a number"],
        [,"Error: sum() value A is not a number"],
        ["h","Error: sum() value A is not a number"],
        ["2","Error: sum() value A is not a number"],
        ["*","Error: sum() value A is not a number"]
    ];

    test.each(testValuesA)('sum() value A "%s" throws the exception "%s"', (numA,errorA) => {
        expect(()=>new sum(numA,2)).toThrow(errorA);
        //wrapping the sum() in an assertion makes it so we can actually catch the error
        //https://jestjs.io/docs/expect#tothrowerror
    });
});