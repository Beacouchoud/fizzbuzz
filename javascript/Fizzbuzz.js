const isFizz = (number) => {
    return number % 3 == 0
}

const isBuzz = (number) => {
    return number % 5 == 0
}

const Fizzbuzz = (number) => {
        // Guard clause to prevent numbers not allowed
        if (number < 1 || number > 100) throw Error('Number not allowed')

        // Empty string to append
        let result = '';

        //If number is divisible by 3
        if (isFizz(number)) result += 'Fizz';
        
        //If number is divisible by 3
        if (isBuzz(number)) result += 'Buzz';

        if(!result) result = number.toString();

        return result;
}



module.exports = Fizzbuzz;