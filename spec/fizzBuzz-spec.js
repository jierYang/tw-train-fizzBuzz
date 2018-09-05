var fizzBuzz = require("../src/fizzBuzz");

describe('fizzBuzz test', () => {
    it('fizzBuzz return null when given null', () => {
        var result = fizzBuzz(undefined);

        expect(result).toEqual(null);
    });
});