/*

beforeAll( () => {
    // this chunk of code runs before all tests in this file
    // used to initialize conditions for the tests
    // ex: initialize test database
});

afterAll( () => {
    // this chunk of code runs after all tests in this file
    // used to reset/clean-up conditions after the tests
    // ex: remove test database
});

*/


describe('This is test suite A', () => {
    /*
    beforeEach(() => {
        // this chunk of code runs beofre each test in this describe block
        // used to initialize conditions for this suite of tests
        // ex: you have many test cases to be executed on Chrome 
        //  and the same Chrome instance has to be used across all
    });

    afterEach(...)
    */
    
    test('1st test in suite A', () => {
        expect(true).toBe(true);
    });

    test('2nd test in suite A', () => {
        expect(true).toBe(true);
    });

});

describe('This is test suite B', () => {
    
    test('1st test in suite B', () => {
        expect(true).toBe(true);
    });

    test('2nd test in suite B', () => {
        expect(true).toBe(true);
    });

});
