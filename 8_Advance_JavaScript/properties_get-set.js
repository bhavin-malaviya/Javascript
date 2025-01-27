function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() { 
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function() { 
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value
        }
    })
}

const ketan = new User('k@gmail.com', '2wwrt');
console.log(ketan.email);
console.log(ketan.password);
