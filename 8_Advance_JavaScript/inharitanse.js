class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`UserName Is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new Course added by a ${this.username}`);
        
    }
}

const one = new Teacher("jatin", "j@gmail.com", 1234);
console.log(one);
const two = new User("bhavin")
console.log(two);

one.logMe();
two.logMe();
