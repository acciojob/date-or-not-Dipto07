var isDate = function(input) {
  if (Object.prototype.toString.call(input) === '[object Date]') {
    return !isNaN(input.getTime());
  } else if (typeof input === 'string') {
    return !isNaN(Date.parse(input));
  } else {
    return false;
  }
};

// // Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
