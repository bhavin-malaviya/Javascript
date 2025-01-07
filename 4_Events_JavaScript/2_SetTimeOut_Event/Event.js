
const sayHello = () => {
    console.log("Hello");   
}
document.querySelector("#stop").addEventListener("click", (e) => {
    console.log("Stop Event Change Name");
    
    clearTimeout(stopChangeName);
})
const changeName = () => {
    document.querySelector("h1").innerHTML = "Hello JavaScript";
}

setTimeout(sayHello, 4000);  
const stopChangeName = setTimeout(changeName, 4000);  
