const expect = require('chai').expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgb to hex color', () => {
    // •	Take three integer numbers, representing the red, green and blue values 
    // of an RGB color, each within range [0…255]
    // •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
    // •	Return undefined if any of the input parameters are of invalid 
    // type or not in the expected range

    describe('unvalid data', () => {
        it('test with Array', () => {
            expect(rgbToHexColor(Array)).to.eq(undefined);
        });
        it('test with Boolean', () => {
            expect(rgbToHexColor(Boolean)).to.eq(undefined);
        });
        it('test with negative number', () => {
            expect(rgbToHexColor(-1)).to.eq(undefined);
        });
        it('test with negative number', () => {
            expect(rgbToHexColor(-1, 2, 10)).to.eq(undefined);
        });
        it('test with Object', () => {
            expect(rgbToHexColor(Object)).to.eq(undefined);
        });
        it('bigger range', () => {
            expect(rgbToHexColor(256)).to.eq(undefined);
        });
        it('bigger range', () => {
            expect(rgbToHexColor(255, 2)).to.eq(undefined);
        });
        it('bigger range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.eq(undefined);
        });
        it('test with String', () => {
            expect(rgbToHexColor('256', 2, 5)).to.eq(undefined);
        });
    });

    describe('valid data', () => {
        it('valid data', () => {
            expect(rgbToHexColor(0, 10, 20)).to.eq('#000A14');
        });
        it('valid data', () => {
            expect(rgbToHexColor(255, 255, 255)).to.eq('#FFFFFF');
        });
        it('valid data', () => {
            expect(rgbToHexColor(0, 0, 0)).to.eq('#000000');
        });
    });
});