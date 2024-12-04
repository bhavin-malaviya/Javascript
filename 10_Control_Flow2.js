// ------------- Switch Statement -------------------

let month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;

  default:
    console.log("Invalid month");
    break;
}

// ------------------------- truthy or falsey Value ------------------------------

const userEmail = "user@example.com";

if (userEmail) {
  console.log("user got loggin, Email is : " + userEmail);
}

//  ------------ falsey Value

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// ------------- Truthy Value

// "0", "false", " ", [], {}, function(){}




// ------------Check Empty Array ----------------



const userArray = [];

if (userArray.length === 0) {
  console.log("Empty Array");
}




// ----------- Check Empty Object ----------------



const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Empty Object");
}




//  ---------------- Nullish Coalescing Operators (??) ----------------

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);



//  ------------- Ternairy Operators ----------------



// Codition ? true : false

const clothPrice = 500;

clothPrice <= 250 ? console.log(" less than 250 cloth price") : console.log("more than 250");


