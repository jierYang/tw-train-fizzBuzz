var fizzBuzz = require("../src/fizzBuzz");

describe('fizzBuzz test', () => {
    describe('invalidate test', ()=>{
        it('fizzBuzz return invalidate when given undifined', () => {
            var result = fizzBuzz.getFizzBuzz(undefined);

            expect(result).toEqual("invalidate input");
        });

        it('fizzBuzz return invalidate when given null', () => {
            var result = fizzBuzz.getFizzBuzz(null);

            expect(result).toEqual("invalidate input");
        });

        it('fizzBuzz return invalidate when given -2', () => {
            var result = fizzBuzz.getFizzBuzz(-2);

            expect(result).toEqual("invalidate input");
        });

        it('fizzBuzz return invalidate when given 2.5', () => {
            var result = fizzBuzz.getFizzBuzz(2.5);

            expect(result).toEqual("invalidate input");
        });
    });

    describe('Fizz Buzz Whizz test',()=>{
       it('Fizz test',()=>{

           var result = fizzBuzz.isFizz(9);

           expect(result).toEqual("Fizz");
       });
        it('Buzz test',()=>{

            var result = fizzBuzz.isBuzz(10);

            expect(result).toEqual("Buzz");
        });
        it('Fizz test',()=>{

            var result = fizzBuzz.isWhizz(14);

            expect(result).toEqual("Whizz");
        });
    });
});