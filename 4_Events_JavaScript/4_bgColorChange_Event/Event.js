let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

function generateUniqueColor() {
    // Generate a random number between 0 and 0xFFFFFF, then convert it to a hex string
    const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    
    // Pad with leading zeros if necessary to ensure 6 digits
    return `#${randomColor.padStart(6, '0')}`;
  }
const changeColor = () => {
    generateUniqueColor()
}

start.addEventListener("click", () => {
    document.body.style.backgroundColor = setInterval(changeColor, 1000);
});

