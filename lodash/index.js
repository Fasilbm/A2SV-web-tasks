const _ = require('lodash');

// const numbers = [1, 2, 3, 22, 44, 77, 4, 5];

// const sortedNums = _.sortBy(numbers)

// const filteredNums = _.filter(numbers, (num) => num % 2 === 0);

// const maxNum = _.maxBy(numbers)

// const chunk = _.chunk(numbers,3) 

// const deb = _.debounce(numbers)

// console.log(`The sorted list of the numbers is ${sortedNums}`);
// console.log(`The even values in the array is ${filteredNums}`);
// console.log(`The maximum value in the array is ${maxNum}`);
// console.log(chunk);
// console.log(deb)

function myFunction() {
    console.log('Hello World!!');
  }
  
  const debouncedFunction = _.debounce(myFunction, 1000);
  
  debouncedFunction(); // This will log "Function called."
  
  setTimeout(() => {
    debouncedFunction(); // This will not log anything because the function was debounced.
  }, 500);
  
  setTimeout(() => {
    debouncedFunction(); // This will log "Function called." because the debounce time has elapsed.
  }, 1500);




