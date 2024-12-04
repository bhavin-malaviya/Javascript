//  ----------------- For Loop -------------------------



for (let index = 1; index <= 10; index++) {
    const element = index;
    if(element === 5) {
        // console.log("Number 5 is best");
        
    }
    // console.log("element: " + element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`inner Loop: ${j}`);   
    }  
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(i + " * " + j + " = " + i*j);   
        // console.log(`${i} * ${j} = ${i * j}`);   
    }  
}

let myArray = ["bhavin", "ketan", "jatin"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log("my Array: ",  element);
    
}

for (let i = 1; i <= 20; i++) {

    if(i === 5){
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


myNewArray = ["jk", "kl", "bm"]
let arr = 0;

while (arr < myNewArray.length){
    // console.log(`value of myArray is ${myArray[arr]}`);
    arr++;
}




// ---------------------- Do While Loop ------------------------------


let score = 1

do {
    console.log(`value of score is ${score}`);
    score++;
    
} while (score <= 10);
