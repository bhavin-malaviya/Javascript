class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    return this._password = value;
  }
}
const bhavin = new User("b@gmail.com", "abc");
console.log(bhavin.email);
console.log(bhavin.password);
