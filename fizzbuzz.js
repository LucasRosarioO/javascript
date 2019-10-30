
for (let index = 1; index < 100; index++) {
     document.write(fizzBuzz(index).fontcolor(color(index)).bold())
}

function fizzBuzz(input) {
     if (isNaN(input)===true) return NaN
     if ( (input % 3 === 0) && (input % 5 === 0)  ) return 'FizzBuzz '
     if (input % 5 === 0) return 'Buzz '
     if (input % 3 === 0) return 'Fizz '
     return input + '  '
}

function color(value) {
     if ((value % 3 === 0) && (value % 5 === 0)) return 'blue'
     if (value % 3 === 0) return 'red'
     if (value % 5 === 0) return 'cyan'
     return 'black'
}