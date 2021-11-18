const Fizzbuzz = require('./Fizzbuzz');

describe('Fizzbuzz', () => {
  it('returns 1 when passing a 1', () => {
    const result = Fizzbuzz(1)

    expect(result).toBe('1');
  });
  
  it('returns Fizz if the number is divisible by 3', () => {
    const result = Fizzbuzz(6);

    expect(result).toBe('Fizz');
  });

  it('returns Buzz if the number is divisible by 5', () => {
    const result = Fizzbuzz(10);
    expect(result).toBe('Buzz');
  });

  it('returns FizzBuzz if the number is divisible by both 3 and 5', () => {
    const result = Fizzbuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('returns the string representation of the number if it is not divisible neither by 3 nor 5', () => {
    const result = Fizzbuzz(8);
    expect(result).toBe('8');
  });

  it.skip('returns Fizz if a number is divisible by 3 or has a 3 in it', () => {
    const result = Fizzbuzz(13);

    expect(result).toBe('Fizz');
  });

  it.skip('returns Buzz if a number is divisible by 5 or has a 5 in it', () => {
    const result = Fizzbuzz(51);

    expect(result).toBe('Buzz');
  });

});
