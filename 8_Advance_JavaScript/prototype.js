let myName = "bhavin";
let myName2 = "bhavin      ";

console.log(myName.length);
console.log(myName2.trim().length);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getspiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

console.log(heroPower.getspiderPower());


Object.prototype.myPower = function() {
  console.log(`myPower is all accessible`);  
}

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

heroPower.myPower();
myName2.trueLength();


// Inheritance

const User = {
    name: 'user',
    email: 'user@example.com',
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = { 
    makeAssignment: 'is assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// New Syntax (morden)

Object.setPrototypeOf(TeachingSupport, Teacher);







