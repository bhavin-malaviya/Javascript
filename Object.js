//  Object Create Sigleton its only created by constructor
// Object.create 

//  object Literals

const mySym = Symbol('key1'); /* decalre symbol */

const user = {
    name: "bhavin",
    "fullname": "bhavin malaviya",
    [mySym]: "key2",                            /* decalre symbol in object this way*/
    age: 30,
    email: "bhavin@gmail.com",
    city: "London",
    state: "UK"
}

console.log(user.email);
console.log(user["fullname"]);          /* access symbol to the object key in this way*/
console.log(user[mySym]);
console.log(mySym);

// Object.freeze(user);                     /* after freeze no changes in the above object */
user.email = "bhavin@hotmail.com";

console.log(user.email);


const artoonUser = {};

artoonUser.id = "123abc"
artoonUser.name = "bhavin"
artoonUser.isStudent = true

console.log("artoonUser", artoonUser);

const registerUser = {
    email: "bhavin@gmail.com",
    fullname: {
        userFullName: {
            firstName: "bhavin",
            lastName: "malaviya"
        }
    }
}

console.log(registerUser.fullname.userFullName.firstName);


const obj1 = {a: 1, b:2,};
const obj2 = {c: 3, d:4,};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const users = [
    {
        name: "A",
        email: "bhavin@gmail.com",
    },
    {
        name: "B",
        email: "ketan@gmail.com",
    },
    {
        name: "A",
        email: "bhavin@gmail.com",
    },
    {
        name: "A",
        email: "bhavin@gmail.com",
    },
    {
        name: "A",
        email: "bhavin@gmail.com",
    },
    {
        name: "A",
        email: "bhavin@gmail.com",
    },
    {
        name: "A",
        email: "bhavin@gmail.com",
    },
    {
        name: "A",
        email: "bhavin@gmail.com",
    },
];

console.log(users[1].email);

console.log(Object.keys(artoonUser));        /* access for all users keys */
console.log(Object.values(artoonUser));      /* access for all users values */


// distructuring Object


const course = {
    courseName: "JS",
    price: 899,
    teacher: "ketan"
}

const {teacher: faclty} = course;
console.log(faclty);








