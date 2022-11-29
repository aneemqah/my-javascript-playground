let student1 = {
  firstName: 'Joe',
  lastName: 'Bloggs',
  student: true,
  score1: 90,
  score2: 70,
  score3: '85',
  score4: 100,
  score5: 0
};

for (let key in student1) {
  console.log(key); // logs out all keys
  console.log(student1[key]); //logs out all values
}

console.log(Object.keys(student1));
console.log(Object.values(student1));

console.log(Object.entries(student1));

// Object.values returns an array.
// Filter allows you to filter out values you dont want into a new array.
// Filter accepts a CB function and this CB acts on every element on the array.
// Each of the elements in the array will be stored in the variable val.
// We can then check if val is a number.
// iNaN will return true if ITS NOT a number.
// We can reverse that so it will return TRUE if it is a number by adding the logical not !isNaN

const getScores = function (obj) {
  return Object.values(obj).filter(
    (val) => !isNaN(val) && typeof val !== 'boolean'
  );
};

let scores = getScores(student1);
console.log(scores); // [ 90, 70, '85', 100, 0 ]
