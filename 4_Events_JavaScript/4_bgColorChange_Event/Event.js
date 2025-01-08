let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let colorInterval;
let stopInterval;

function generateUniqueColor() {
    // Generate a random number between 0 and 0xFFFFFF, then convert it to a hex string
    const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    
    // Pad with leading zeros if necessary to ensure 6 digits
    return `#${randomColor.padStart(6, '0')}`;
  }
const changeColor = () => {
    document.body.style.backgroundColor = generateUniqueColor();
}

start.addEventListener("click", () => {
    if(!colorInterval){
        stopInterval = setInterval(changeColor, 1000);
    }
});

stop.addEventListener("click", () => {
    clearInterval(stopInterval);
    colorInterval = null;
    console.log("Stop Color Change");
});

