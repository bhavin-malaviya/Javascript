let user = {
    userName: "bhavin",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() 
    {
        // console.log("Got user details from Database");
        // console.log(`userName: ${this.userName}`);
        // console.log(this);
     }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);


function User(userName, loginCount, signedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greetings = function(){
        console.log(`greetings: ${this.userName}`);
        
    };

    // return this
}

const userOne = new User("bhavin", 12, true);
const userTwo = new User("Ketan", 13, false);

console.log(userOne);
console.log(userTwo);


