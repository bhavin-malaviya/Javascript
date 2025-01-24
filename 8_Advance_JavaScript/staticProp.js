class User {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }

    logMe(){
        console.log(`Username : ${this.username} , Email : ${this.email} , Role: ${this.role}`);
        
    }

    createId(){
        return `${this.username}123`
    }
}

const user1 = new User("samir", "admin");
const user2 = new User("ketan", "superAdmin");
const user3 = new User("jatin", "admin");
console.log(user1.createId());

class Teacher extends User {
    constructor(username,role, email) {
        super(username, role);
        this.email = email;
    }
}

const phone = new Teacher("iphone", "superAdmin", "i@gmail.com");
phone.logMe();
console.log(phone.createId());




