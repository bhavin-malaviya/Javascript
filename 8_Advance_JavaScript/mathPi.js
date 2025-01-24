let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

const result = {
    name: "ketan",
    total: 500,
    isPassed: true
}

let descriptor1 = Object.getOwnPropertyDescriptor(result, "name");
console.log(descriptor1);


Object.defineProperty(result, "name", {
    enumerable: true,
})

for (let [key, value] of Object.entries(result)) {
    if(typeof value !== 'function'){

        console.log(`${key}: ${value}`);
    }

}