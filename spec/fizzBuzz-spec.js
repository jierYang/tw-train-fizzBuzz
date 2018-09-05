var fizzBuzz = require("../src/fizzBuzz");

describe('fizzBuzz test', () => {
    describe('getFizzBuzz invalidate test', () => {
        it('getFizzBuzz return invalidate when given undifined', () => {
            var result = fizzBuzz.getFizzBuzz(undefined);

            expect(result).toEqual("invalidate input");
        });

        it('getFizzBuzz return invalidate when given null', () => {
            var result = fizzBuzz.getFizzBuzz(null);

            expect(result).toEqual("invalidate input");
        });

        it('getFizzBuzz return invalidate when given -2', () => {
            var result = fizzBuzz.getFizzBuzz(-2);

            expect(result).toEqual("invalidate input");
        });

        it('getFizzBuzz return invalidate when given 2.5', () => {
            var result = fizzBuzz.getFizzBuzz(2.5);

            expect(result).toEqual("invalidate input");
        });
    });

    describe('Fizz Buzz Whizz test', () => {
        it('Fizz test', () => {

            var result = fizzBuzz.isFizz(9);

            expect(result).toEqual("Fizz");
        });
        it('Buzz test', () => {

            var result = fizzBuzz.isBuzz(10);

            expect(result).toEqual("Buzz");
        });
        it('Fizz test', () => {

            var result = fizzBuzz.isWhizz(14);

            expect(result).toEqual("Whizz");
        });
    });

    describe('getFizzBuzz out array test', () => {
        it('getFizzBuzz return 1 when given 1', () => {
            var result = fizzBuzz.getFizzBuzz(1);

            expect(result.toString()).toEqual("1");
        })
        it('getFizzBuzz return Fizz when given 3', () => {
            var result = fizzBuzz.getFizzBuzz(3);

            expect(result.toString()).toEqual("1,2,Fizz");
        })
        it('getFizzBuzz return Fizz Buzz Whizz when given 10', () => {
            var result = fizzBuzz.getFizzBuzz(10);

            expect(result.toString()).toEqual("1,2,Fizz,4,Buzz,Fizz,Whizz,8,Fizz,Buzz");
        })
        it('getFizzBuzz return Fizz Buzz Whizz when given 15', () => {
            var result = fizzBuzz.getFizzBuzz(15);

            expect(result.toString()).toEqual("1,2,Fizz,4,Buzz,Fizz,Whizz,8,Fizz,Buzz,11,Fizz,13,Whizz,FizzBuzz");
        })
    });
});