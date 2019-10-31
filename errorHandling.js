
const numbers = [1, 2, 3, 4]; 

try {
    const count = countOccurrences(numbers, 1); 

console.log(count); 
    
} catch (error) {
    alert(error)
}


function countOccurrences(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error('Not a array');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}