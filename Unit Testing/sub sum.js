const expect = require('chai').expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('sum', () => {
    // •	Take an array of numbers as argument
    // •	Return the sum of the values of all elements inside the array

    // correct tests

    it('with only one number', () => {
        expect(sum([2])).to.eql(2);
    });


    it('with only one number', () => {
        expect(sum([2, 3])).to.eql(5);
    });


    it('with only one number', () => {
        expect(sum([2, 3, 5])).to.eql(10);
    });
});