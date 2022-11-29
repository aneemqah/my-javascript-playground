// function doctorise(name) {
//   return `Dr ${name}`;
// }

// Anonymous function
// function(name) {
//   return `Dr ${name}`;
// }

// Function expression - store function in a variable
const doctorise = function (name) {
  return `Dr ${name}`;
};

// Implicit return i.e. no return keyword
const inchToCM = (inches) => inches * 2.45;
console.log(inchToCM(3));
