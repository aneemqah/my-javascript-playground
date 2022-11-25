const currentTemp = 85;
const isRaining = true; // false;
const isWindy = false;

// if (currentTemp >= 60 && currentTemp <= 90 && isRaining === false);
// The ! is not logical operator turns false into true and true into false.
// So because isRaining is false the !isnot will evaluate isRaining to true.

/* 

Example 1 with && operator

if (currentTemp >= 60 && currentTemp <= 90 && !isRaining && !isWindy) { 
    console.log(`Its a great day for a bike ride`)
  };


Example 2 with || operator

First check: is the currentTemp < 59 [no]
Second check: is the currentTemp > 90 [no]
Third check: is it raining [Yes] 
Therefore condition is true and statement in {} runs

if (currentTemp < 59 || currentTemp > 90 || isRaining || isWindy) {
  console.log(`Ugh, its not a good day for a bike ride`);
 };

*/

if (currentTemp < 59 || currentTemp > 90 || isRaining || isWindy) {
  let myMessage = `Ugh, its not a good day for a bike ride.`;

  if (currentTemp < 59) {
    myMessage += ` It's too cold outside`;
  }

  if (currentTemp > 90) {
    myMessage += ` It's too hold outside`;
  }

  if (isWindy) {
    myMessage += ` It's too windy outside`;
  }

  if (isRaining) {
    myMessage += ` It's raining outside`;
  }
  console.log(myMessage);
} else {
  console.log(`It's a great day for a bike ride`);
}
