// ------------------- For Of Loop --------------------------

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
  // console.log("arr: " + num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  // console.log(`each character is ${greet}`);
}

// ------------------- Map ---------------------

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

const myObject = {
  JS: "javascript",
  CPP: "C++",
  TS: "typescript",
};

for (const key in myObject) {
  // console.log(myObject[key]);
  // console.log(`${key} Short name for ${myObject[key]}`);
}

const language = ["JS", "React", "PHP", "Java", "TypeScript", "JavaScript"];

for (const key in language) {
  // console.log(key);
  // console.log(`${key} Short name for ${language[key]}`);
}

//  -------------------------------------- ForEach Loops -------------------------------------

//  Syntexes

language.forEach((key, value, arr) => {
  // console.log(key, value, arr);
});

language.forEach((value) => {
  // console.log(value);
});

const myCoder = [
  {
    name: "bhavin",
    hobby: "cricket",
  },
  {
    name: "ketan",
    hobby: "hoky",
  },
  {
    name: "samir",
    hobby: "football",
  },
  {
    name: "jatin",
    hobby: "kabbadi",
  },
];

myCoder.forEach((item) => {
  // console.log(item.hobby);
  // console.log(item.name);
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];





//  ---------------------------- filter --------------------------------


// let newNums =  myNums.filter( (num) => num > 4)
let newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);

let otherNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    otherNums.push(num);
  }
});

// console.log(otherNums);

const books = [
    { name: "Book One", genre: "History", publish: 1987, edition: 2010 },
    { name: "Book Two", genre: "Science Fiction", publish: 1995, edition: 2003 },
    { name: "Book Three", genre: "Fantasy", publish: 2001, edition: 2015 },
    { name: "Book Four", genre: "Biography", publish: 1980, edition: 1990 },
    { name: "Book Five", genre: "Mystery", publish: 2012, edition: 2018 },
    { name: "Book Six", genre: "History", publish: 2005, edition: 2011 },
    { name: "Book Seven", genre: "Self-Help", publish: 1999, edition: 2007 },
    { name: "Book Eight", genre: "Philosophy", publish: 1978, edition: 1985 },
    { name: "Book Nine", genre: "Mystery", publish: 2010, edition: 2020 },
    { name: "Book Ten", genre: "Philosophy", publish: 1965, edition: 1980 }
];

// const userBooks = books.filter( (bk) => bk.genre === "History")
const userBooks1 = books.filter( (bk) => bk.publish >= 2000 && bk.genre ==="History");
console.log(userBooks1);



const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNumber = myNumbers.map( (num) => num + 10);
console.log(newNumber);


const newCount = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter ( (num) => num >= 40)

                    console.log(newCount);


                






//  ---------------------------------- Reduce ------------------------------------


                    