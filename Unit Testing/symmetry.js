const expect = require('chai').expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

isSymmetric(['Katrin', 'age', 23])

describe('Checking symmetry', () => {
    // •	Take an array as argument
    // •	Return false for any input that isn’t of the correct type
    // •	Return true if the input array is symmetric
    // •	Otherwise, return false
    describe('false arguments', () => {
        it('test with Object', () => {
            expect(isSymmetric({name: 'Pesho', age: 21})).to.eql(false);
        });
    
        it('test with String', () => {
            expect(isSymmetric('String')).to.eql(false);
        });
        it('test with Boolean', () => {
            expect(isSymmetric(Boolean)).to.eql(false);
        });
        it('test with Number', () => {
            expect(isSymmetric(2)).to.eql(false);
        });
    });
    
    describe('non-symmetric array', () => {
        it ('non-symmetric array', () => {
            expect(isSymmetric(['5', '6'])).to.eql(false);
        });  
        it ('non-symmetric array', () => {
            expect(isSymmetric([true, false])).to.eql(false);
        });  
        it ('non-symmetric array', () => {
            expect(isSymmetric([5, 6])).to.eql(false);
        });  
        it ('non-symmetric array', () => {
            expect(isSymmetric(['5', 5])).to.eql(false);
        });  
    });
     
    describe('correct tests', () => {
        it('test with Array', () => {
            expect(isSymmetric(['6', '6'])).to.eq(true);
        });
        it('test with Array', () => {
            expect(isSymmetric(['Kat', 6, 'Kat'])).to.eq(true);
        });
        it('test with Array', () => {
            expect(isSymmetric([6, 6])).to.eq(true);
        });
    });

});

