const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", function () {
    // not string

    it ('test with number parameter, return undefined', function () {
        let expecedResult = isOddOrEven(100);
        expect(expecedResult).to.equal(undefined);
    });

    it ('test with Object, return undefined',  () => {
        let expecedResult = isOddOrEven(Object);
        expect(expecedResult).to.eql(undefined);
    });

    it ('test with Array, return undefined', () => {
        let expecedResult = isOddOrEven(Array);
        expect(expecedResult).to.eq(undefined);
    });

    //String

    it ('test with String, returning even', () => {
        let expecedResult = isOddOrEven('STRING');
        expect(expecedResult).to.eq('even', 'function returned even number');
    });
    it ('test with String, returning odd', () => {
        let expecedResult = isOddOrEven('STRIN');
        expect(expecedResult).to.eq('odd', 'function returned odd number');
    });
});