const leapYears = function(year) {

// make a variable to store the result
let isLeapYear = false;
// an if statement to check if the year is divisible by 4  or 400
if ((year % 4 === 0 && year % 100 !== 0 )|| year % 400 === 0) {
  // if it is, set the result to true
  return isLeapYear = true;
}else {
  return isLeapYear = false;
}
// return the result
};

// Do not edit below this line
module.exports = leapYears;
