const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.id === button.id) {
            body.style.backgroundColor = e.target.id;
        }
    })
})
