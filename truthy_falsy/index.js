// falsy values -> 0, "", undefined, null, NaN

const num1 = Number('185');
const num2 = String(185);
const num3 = Boolean(185);

console.log(num1); // 185
console.log(num2); // "185"
console.log(num3); // true

console.log(typeof num1); // number
console.log(typeof num2); // string
console.log(typeof num3); // boolean

console.log(Boolean('')); // false
console.log(Boolean(' ')); // true - has a space
console.log(Boolean('I am a string')); // true

// Declare a variable but dont give it a value.
// JS behind the scenes gives this a valueof undefined
let myVar;
let myVar2 = null;
let myVar3 = 7;

console.log(myVar); // undefined
console.log(Boolean(myVar2)); // false because null is falsy
console.log(Boolean(myVar3)); // true

console.log(Boolean(0)); // false
console.log(Boolean('four' - 5)); // false - because NaN

if (5 > 3) {
  console.log(`the condition is true.`); // this will always be true!
} else {
  console.log(`the condition is false.`);
}

if (5 < 3) {
  console.log(`the condition is true.`); // this will always be false!
} else {
  console.log(`the condition is false.`);
}

if ('Hi, i am a string') {
  console.log(`the condition is true.`); // // this will always be true!
} else {
  console.log(`the condition is false.`);
}
