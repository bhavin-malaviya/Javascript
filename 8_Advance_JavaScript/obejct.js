function createuser(username, score) {
    this.username = username;
    this.score = score;   
}

createuser.prototype.increment = function(){
    this.score++;
}
createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai",25) 
const tea = new createuser("tea",24)

chai.printMe();
chai.increment();
tea.increment();
console.log(chai);
console.log(tea);

/*
NOTE :- 

- Here's what happens behind the scenes when new keywords is used.

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype linked : The newly created object gets linked to the prototype property of the constructor function. This means that it has access to the
    properties and method defined on the constructor's prototype.

- The Constructor is called: The Constructor function is called with the specified arguments ans this is bound to the newly created object.
    if no expicit return value is specified from the constructor, Javascript assumes this, newly created object, to intetnd the return value.

- The new object returned: After the constructor function has been called the newly created object is returned.

*/
