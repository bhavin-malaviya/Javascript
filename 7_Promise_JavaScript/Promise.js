import fetch from 'node-fetch';
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






const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 3 is completed");
    resolve({ user: "promie", email: "promie@promie.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user.email);
});






const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});


promiseFour.then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either fulfilled or rejected");
  });







const promieFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something Went Wrong In Promise Five");
    }
  }, 1000);
});


const consumePromiseFive = async () => {
  try {
    const response = await promieFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();







// --------------------- Async Await Promise -----------------------------


// const getAllUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);   
//     const data = await response.json();
//     console.log(data);  
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();







// -------------------------- .then .catch promise ----------------------------

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
});