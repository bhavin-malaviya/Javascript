//  ------------- IF -------------

// if (condition) {
//   statement;
// }

const isLoggedIn = true;
const temperature = 41;
const score = 200;
const balance = 1000;

if (isLoggedIn) {
  console.log("User Logged In");
}

if (temperature < 50) {
  console.log("Temperature is less than 50");
}

if (score > 100) {
  const power = "high";
  console.log("user power is higher ", power);
}

// console.log("user power is higher ", power);                /* const variable is not valid out of the scope */

if (balance < 200) {
  console.log("balance is less than 200");
} else if (balance < 500) {
  console.log("balance is less than 500");
} else if (balance < 750) {
  console.log("balance is less than 750");
} else {
  console.log("balance is greater than 1200");
}

//  Conditional Operators

const isUserLoggedIn = true;
const debitCard = true;
const emailLoggin = false;

if (isUserLoggedIn && debitCard) {
  console.log("allow user to log in");
}

if (isUserLoggedIn || emailLoggin) {
  console.log("allow user to log in");
}

