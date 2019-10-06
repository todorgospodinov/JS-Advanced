let expect = require('chai').expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('add or subtract', () => {
   let cal = createCalculator;
    // •	Return a module (object), containing the functions add(), subtract() 
    // and get() as properties
    // •	Keep an internal sum which can’t be modified from the outside
    // •	The functions add() and subtract() take a parameter that can be parsed 
    // as a number (either a number or a string containing a number) that is added
    //  or subtracted from the internal sum
    // •	The function get() returns the value of the internal sum
    describe('unvalid data', () => {
        it('test with array', () => {
            expect(createCalculator(Array)).to.eq(undefined);
        });

        it('test with number', () => {
            expect(createCalculator(5)).to.eq(undefined);
        });

        it('test with boolean', () => {
            expect(createCalculator(Boolean)).to.eq(undefined);
        });

    });
    describe('valid data', () => {
        it('test with object', () => {
            expect(createCalculator()).to.eq(undefined);
        });

    });
});