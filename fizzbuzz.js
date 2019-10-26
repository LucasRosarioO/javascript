
const output = fizzBuzz('d');
console.log(output)

function fizzBuzz(input) {
     if (isNaN(input)===true) return NaN
     if ( (input % 3 === 0) && (input % 5 === 0)  ) return 'FizzBuzz'
     if (input % 5 === 0) return 'Buzz'
     if (input % 3 === 0) return 'Fizz'
     return input
}