const reverseString = function(word) {
  // word = word.split("");  // split the string into an array
  // word = word.reverse();  // reverse the array
  // word = word.join("");  // join the array back into a string
  return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
