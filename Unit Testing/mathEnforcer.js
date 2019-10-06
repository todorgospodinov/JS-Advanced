const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};



describe('mathEnforcer', () => {
   
    describe('addFive', () => {
        // •	addFive(num) - A function that accepts a single parameter:
        // 	If the parameter is NOT a number, the funtion should return undefined.
        // If the parameter is a number, add 5 to it, and return the result.

        it ('test with 2 params, returns undefined', () => {
            expect(mathEnforcer.addFive('6', 5)).to.eq(undefined);
        });
        it ('test with String, returns undefined', () => {
            expect(mathEnforcer.addFive('Kath')).to.eq(undefined);
        });
        it ('test with Array, returns undefined', () => {
            expect(mathEnforcer.addFive(Array)).to.eq(undefined);
        });
        it ('test with Object, returns undefined', () => {
            expect(mathEnforcer.addFive(Object)).to.eq(undefined);
        });
        // it ('test with negative number', () => {
        //     expect(mathEnforcer.addFive(-10)).to.eq(undefined);
        // });
        // correct test
        it ('test with a number, returns +5', () => {
            expect(mathEnforcer.addFive(5)).to.eq(10);
        });
        it ('test with negative number', () => {
            expect(mathEnforcer.addFive(-10)).to.eq(-5);
        });
        it('test with floating numbers', () => {
            expect(mathEnforcer.addFive(1.5)).to.eq(6.5);
        });

    });
   
    describe('subtractTen', () => {
        // •	subtractTen(num) - A function that accepts a single parameter:
        // 	If the parameter is NOT a number, the function should return undefined.
        // If the parameter is a number, subtract 10 from it, and return the result.
        
        it ('test with 2 params, returns undefined', () => {
            expect(mathEnforcer.subtractTen('6', 5)).to.eq(undefined);
        });
        it ('test with String, returns undefined', () => {
            expect(mathEnforcer.subtractTen('Kath')).to.eq(undefined);
        });
        it ('test with Array, returns undefined', () => {
            expect(mathEnforcer.subtractTen(Array)).to.eq(undefined);
        });
        it ('test with Object, returns undefined', () => {
            expect(mathEnforcer.subtractTen(Object)).to.eq(undefined);
        });
        
        // correct test
        it ('test with a number, returns -10', () => {
            expect(mathEnforcer.subtractTen(20)).to.eq(10);
        });
        
        it ('test with negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.eq(-20);
        });
        it('test with floating numbers', () => {
            expect(mathEnforcer.subtractTen(1.5)).to.eq(-8.5);
        });
    });
    
    describe('sum', () => {
        // •	sum(num1, num2) - A function that accepts two parameters:
        // If any of the 2 parameters is NOT a number, the function should return undefined.
        // If both parameters are numbers, the function should return their sum. 

        it ('test with string, returns undefined', () => {
            expect(mathEnforcer.sum('6', '5')).to.eq(undefined);
        });
        it ('test with 1 params, returns undefined', () => {
            expect(mathEnforcer.sum(6)).to.eq(undefined);
        });
        it ('test with String, returns undefined', () => {
            expect(mathEnforcer.sum('Kath')).to.eq(undefined);
        });
        it ('test with Array, returns undefined', () => {
            expect(mathEnforcer.sum(Array, Array)).to.eq(undefined);
        });
        it ('test with Object, returns undefined', () => {
            expect(mathEnforcer.sum(Object, Object)).to.eq(undefined);
        });
        it ('test with String and number, returns undefined', () => {
            expect(mathEnforcer.sum('Pesho', 6)).to.eq(undefined);
        });
        // correct test
        it ('test with a number, returns -10', () => {
            expect(mathEnforcer.sum(20, 20)).to.eq(40);
        });
        it('test with floating numbers', () => {
            expect(mathEnforcer.sum(1.5, 1.5)).to.eq(3);
        });
    }); 
});