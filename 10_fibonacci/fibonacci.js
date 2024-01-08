const fibonacci = function(count) {
  let i ;
  let fib = [1, 1];
  count = parseInt(count);  // convert string to number

  for (i = 2; i < count; i++) {
    fib[i] = fib[i - 2] + fib[i - 1 ];


  }

  if (count < 1 ) {
    return "OOPS";
  }

  return fib[fib.length - 1];

};

// Do not edit below this line
module.exports = fibonacci;
