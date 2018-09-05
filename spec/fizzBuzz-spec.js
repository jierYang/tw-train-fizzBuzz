var fizzBuzz = require("../src/fizzBuzz");

describe('fizzBuzz test', () => {
    describe('invalidate test', ()=>{
        it('fizzBuzz return invalidate when given undifined', () => {
            var result = fizzBuzz(undefined);

            expect(result).toEqual("invalidate input");
        });

        it('fizzBuzz return invalidate when given null', () => {
            var result = fizzBuzz(null);

            expect(result).toEqual("invalidate input");
        });

        it('fizzBuzz return invalidate when given -2', () => {
            var result = fizzBuzz(-2);

            expect(result).toEqual("invalidate input");
        });

        it('fizzBuzz return invalidate when given 2.5', () => {
            var result = fizzBuzz(2.5);

            expect(result).toEqual("invalidate input");
        });
    });
});