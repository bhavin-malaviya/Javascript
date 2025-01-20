//  Using class methods


class User {
    constructor(username,email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword(){
        return  `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const chai = new User("Ketan", "j@gmail.com", 123);

console.log(chai.encryptedPassword());
console.log(chai.changeUsername());


// behind the scenes using fucntion methods

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptedPassword = function (){
return  `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "j@gmail.com",345);

console.log(tea.encryptedPassword());
console.log(tea.changeUsername());