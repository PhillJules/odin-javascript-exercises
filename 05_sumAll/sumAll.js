const sumAll = function(lowEnd, highEnd) {
  if (typeof lowEnd !== 'number' || typeof highEnd !== 'number' || lowEnd < 0 || highEnd < 0) {
    return 'ERROR';
  }
// implement a function that takes two numbers and returns the sum of every number between(and including) them
// i need a variable to store the numbers
  const min = Math.min(lowEnd, highEnd);
  const max = Math.max(lowEnd, highEnd);

 let numbers = 0;
// i need a loop to iterate through the numbers
  for (i = min; i <= max; i++) {

    numbers += i;
  }


// i need to add the numbers together
//  let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// i need to return the sum of the numbers
  return numbers;
};

// Do not edit below this line
module.exports = sumAll;
