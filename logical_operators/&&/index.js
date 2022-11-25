// Logical && operator and nested If statements

// Retirement home

const age = 59;
const hasCat = false;

// if (age >= 55) {
//   if (hasCat) {
//     console.log(`you can live here`);
//   } else {
//     console.log(`Sorry, you dont have a cat`);
//   }
// } else {
//   if (hasCat) {
//     console.log(`Sorry, you are not old enough`);
//   } else {
//     console.log(`Sorry, you dont have a cat and you are not old enough`);
//   }
// }

// Both condtions on either side of operand need to be true otherwise it gets skipped and moves on to the next condition.
if (age >= 55 && hasCat) {
  console.log(`You can live here`);
} else {
  if (hasCat === false && age < 55) {
    console.log(`Sorry, you dont have a cat and you are not old enough`);
  } else if (hasCat) {
    console.log(`Sorry, you aren't old enough`);
  } else {
    console.log(`Sorry, you dont have a cat`);
  }
}
