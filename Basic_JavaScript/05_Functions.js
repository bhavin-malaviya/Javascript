// Non return function

function sumOfTwoNumbers(number1, number2) {       /* (number1, number2) => this one is fucntion's prameters */

    console.log(number1 + number2);
    
}

sumOfTwoNumbers(5, 7);                   /* (5, 7) => this one is fucntion's arguments */




// Return value fucntion 


function sumOfTwoNumbers(number1, number2) {       /* (number1, number2) => this one is fucntion's prameters */

    let result = number1 + number2;
    return result;
    
}

sumOfTwoNumbers(5, 7);                   /* (5, 7) => this one is fucntion's arguments */


function loginUsernameMessage(username) {
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`;
}

console.log(loginUsernameMessage("bhavin"));


function calculateNumber(...num1){               /* this is called in rest oparator using fucntion */
    return num1;
}

console.log(calculateNumber(100, 200, 400, 600));



user = {
    username: "bhavin",
    price: 200,
}

function objectFile(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
    
}

// objectFile(user);
objectFile({
    username: "bhavin",
    price: 20,
});

const newArray = [100, 200, 400, 600]

function returnSecondVallue(getArray){
    return getArray[1];
}

// console.log(returnSecondVallue(newArray));
console.log(returnSecondVallue([100, 200, 400, 600]));





