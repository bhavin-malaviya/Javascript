class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }  
}

const bhavin = new User("b@gmail.com", "abc");
console.log(bhavin);
