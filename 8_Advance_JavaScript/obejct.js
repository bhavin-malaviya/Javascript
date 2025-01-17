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
