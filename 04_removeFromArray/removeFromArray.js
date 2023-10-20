const removeFromArray = function(array, ...args) {
  // create a new empty array
  const newArray =[];
  // use forEach to go through the array
  array.forEach(element => {
    // need an if statement that checks if the element is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(element)){
      // push every element into the new array
      newArray.push(element)
    }
  });
  // and return that array
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
