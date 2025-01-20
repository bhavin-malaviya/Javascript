function SetUserName(username) {
    this.userName = username;
}

function User(username, email, password) {
    SetUserName.call(this, username);

    this.email = email;
    this.password = password;
}

let user1 = new User("ketan", "k@gmail.com", "123");
console.log(user1);
    