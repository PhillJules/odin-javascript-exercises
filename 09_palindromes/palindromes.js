const palindromes = function (str) {
  // let num = str;
  // if (typeof num !== 'string') {
  //   num = num.toString();
  // }
  // return num.split("").reverse().join("") === num;
  if (typeof str !== 'string') {
    str = str.toString();
  }
  let newStr = str.toLowerCase().replace( /[^\w]/g, '').split("").reverse().join("");

  return str.toLowerCase().replace( /[^\w]/g, '') === newStr;


};


// Do not edit below this line
module.exports = palindromes;
