const FizzBuzz = require('./Fizzbuzz');

for (let number = 1; number <= 100; number++) {
    const result = FizzBuzz(number);

    console.log(`${number} --> ${result}`);
}