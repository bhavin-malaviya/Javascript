// Three States of promissise
//  1. Pending
//  2. fulfilled
//  3. rejected

// fetch("https://github.com").then().catch().finally();

const promieOne = new Promise((resolve, reject) => {
  // Do an Async Task
  // DB Calls, cryptographi, network

  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promieOne.then(() => {
  console.log("Promie is consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolves");
});


const promieThree = new Promise((resolve, reject) => {
    
});