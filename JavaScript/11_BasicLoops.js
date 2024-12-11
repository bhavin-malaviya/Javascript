//  ----------------- For Loop -------------------------

for (let index = 1; index <= 10; index++) {
  const element = index;
  if (element === 5) {
    // console.log("Number 5 is best");
  }
  // console.log("element: " + element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer Loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner Loop: ${j}`);
  }
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer Loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + " * " + j + " = " + i*j);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["bhavin", "ketan", "jatin"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log("my Array: ",  element);
}

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    // console.log("Number 5 is detected");
    // break;
    continue;
  }
  // console.log(`value of i is ${i}`);
}

// ---------------------- While Loop ------------------------------

let index = 0;

while (index <= 10) {
  // console.log(`value of index is ${index}`);
  index = index + 2;
}

let myNewArray = ["jk", "kl", "bm"];
let arr = 0;

while (arr < myNewArray.length) {
  // console.log(`value of myArray is ${myArray[arr]}`);
  arr++;
}

// ---------------------- Do While Loop ------------------------------

let score = 1;

do {
  // console.log(`value of score is ${score}`);
  score++;
} while (score <= 10);

// let rows = 5; // Number of rows in the pyramid

// for (let i = 1; i <= rows; i++) {
//     let spaces = ' '.repeat(rows - i); // Create leading spaces
//     let stars = '*'.repeat(2 * i - 1); // Create the stars
//     console.log(spaces + stars); // Combine spaces and stars
// }

let lans = 10; // Number of rows in the pyramid

for (let i = 1; i <= lans; i++) {
  let line = ""; // Initialize an empty line for each row

  // Add stars to the line
  for (let k = 1; k <= i; k++) {s
    line += "*";
  }

  // Add spaces to the line
  for (let j = 1; j <= (lans - i) * 2; j++) {
    line += " ";
  }

  for (let l = 1; l <= i; l++) {
    line += "*";
  }

  console.log(line); // Print the line
}

for (let i = 1; i <= lans - 1; i++) {
  let line = ""; // Initialize an empty line for each row

  // Add stars to the line
  for (let k = lans - 1; k >= i; k--) {
    line += "*";
  }

  // Add spaces to the line
  for (let j = 1; j <= i * 2; j++) {
    line += " ";
  }

  for (let l = lans - 1; l >= i; l--) {
    line += "*";
  }

  console.log(line); // Print the line
}

let rows = 10; // Number of rows in the pyramid

for (let i = 1; i <= rows; i++) {
  let line = ""; // Initialize an empty line for each row

  // Add stars to the line
  for (let j = 1; j <= (rows * 2) - i; j++) {
    line += "*";
  }

//   for (let k = 1; k < i; k++) {
//     line += " ";
//   }
  console.log(line); // Print the line
}

for (let i = 1; i <= rows; i++) {
  let line = ""; // Initialize an empty line for each row

  //   Add spaces to the line
  for (let j = 1; j <= rows - i; j++) {
    line += " ";
  }

  // Add stars to the line
  for (let k = 1; k <= 2 * i - 1; k++) {
    line += "*";
  }

  console.log(line); // Print the line
}
