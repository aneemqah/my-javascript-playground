const num1 = 11;
const num2 = 11;
console.log(num1 == num2); // true;

const num3 = 11;
const num4 = '11';
console.log(num3 === num4); // false;

const x = 12;
const y = '12';
// const result = x == y;
const result = x != y; // is x not equal to y? (yes, so the answer is false and there is no type coercion)
const result2 = x !== y; // is x not equal to y? (yes, they are not equal because the data types are not the same so the result is true)
console.log(result); // false
console.log(result2); // true
