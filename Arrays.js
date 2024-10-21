//  define the array

const myArray = [1,2,3,4,5];   
const myHeros = ["ABC", "sdfhsgfsk"];
const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);

console.log("myArray", myArray);
console.log("myHeros", myHeros);
console.log("myArray2", myArray2);

//  mehtod of the array

myArray.push(9);                      /*  Add the value in the array in last */
console.log("myArray", myArray);

myArray.pop();
console.log("myArray", myArray);    /*  remove the value in the array from last */

myArray.unshift(10);
console.log("myArray", myArray);    /* add value in the array start */

myArray.shift();
console.log("myArray", myArray);    /* remove value in the array in first */

myArray.includes(5);
console.log("myArray", myArray);    /* Give a boolean value in an array the element is in the array or not. */

myArray.indexOf(1);
console.log("myArray", myArray);    /* Give a value in an array the element is in the array which index, if not find the value it's give a -1 value */

const newArray = myArray.join();
console.log("myArray", myArray);    /* Give a value in an array is string formate*/

myArray.slice(1, 3);
console.log("myArray", myArray);    /* Slice Give a start-to-end index and not change for original */

myArray.splice(1, 3);
console.log("myArray", myArray);    /* In Splice first argument is start index and second argument is count of total index. and it's change to original array */








