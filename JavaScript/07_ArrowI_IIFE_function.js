//  global object in browser is window object;

const user = {
        username: "bhavin",
        price: 999,

        welcomeMessage: function() {
            let message = "Welcome to website";
            console.log(`${this.username}, ${message}`);
        }

}

// current context object is in the scope of the object;

user.welcomeMessage();
user.username = "harry";
user.welcomeMessage();


// ----------------------------------------------------Arrow functions ----------------------------------------------------

const addNumbers = (num1, num2) => {
    return num1 + num2;
}

console.log(addNumbers(5, 7));

const addNumbers2 = (num1, num2) => num1 + num2;

console.log(addNumbers2(5, 7));



// ----------------------------------------------------IIFE functions -------------------------------------------------------

(function Iffe(){
    // Named IIFE functions
    console.log("DB CONNECTED");
})();

((name) => {
    console.log("DB CONNECTED TWO and Its name is " + name);
})("MONGO");