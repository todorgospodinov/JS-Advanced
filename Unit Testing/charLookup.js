const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('has to lookup chars', () => {
    // uncorrect data types
    it ('test with non-string and non number', () => { 
        expect(lookupChar(13, 0)).to.eq(undefined);
    });
    
    it ('test with non-string and non number', () => { 
        expect(lookupChar('Katrin', 'Katrin')).to.eq(undefined);
    });
    it ('test with non-string and non number', () => { 
        expect(lookupChar(13, 'Katrin')).to.eq(undefined);
    });
    it ('test with unvalid data', () => { 
        expect(lookupChar('Katrin')).to.eq(undefined);
    });
    
    
    //If both parameters are of the correct type but the value of the index
    //  is incorrect (bigger than or equal to the string length or a negative number) 
    // - return "Incorrect index". 
    
    it ('floating point index', () => {
        expect(lookupChar('Katrin', 3.5)).to.eq(undefined);
    });

    it ('index bigger', () => {
        expect(lookupChar('Katrin', 10)).to.eq('Incorrect index');
    });

    it ('negative index', () => {
        expect(lookupChar('Katrin', -10)).to.eq('Incorrect index');
    });
    
    it ('equal to the string length', () => {
        expect(lookupChar('Katrin', 6)).to.eq('Incorrect index');
    });


    //If both parameters have correct types and values - return the character at the 
    // specified index in the string.

    it ('correct values', () => {
        expect(lookupChar('Katrin', 1)).to.eq('a');
    });
    
    it ('correct values', () => {
        expect(lookupChar('Katrin', 2)).to.eq('t');
    });
});