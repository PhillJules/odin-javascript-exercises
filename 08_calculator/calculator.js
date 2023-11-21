const add = function(n1, n2) {
	let sum = n1 + n2;
  return sum;
};

const subtract = function(n1, n2) {
 let difference = n1 - n2;
  return difference;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);

};

const multiply = function(array) {
 return array.reduce((product, current) => product * current);
};

const power = function(base, exponent) {

  return base ** exponent
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {

    return n * factorial(n - 1)
  }


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
