let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreateDate = new Date(2024, 1, 23);
console.log(myCreateDate.toDateString());


let myCreateNewDate = new Date(2024, 1, 23, 5, 3);
console.log(myCreateNewDate.toLocaleString());

let myCreatedDate = new Date("01-15-2024");
let myTimeStamp = Date.now();
console.log(myCreateDate);
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


