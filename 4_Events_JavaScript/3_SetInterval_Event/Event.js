let startButton = document.createElement("button");
startButton.textContent = "Start";
let button = document.body.appendChild(startButton);
let stopButton = document.querySelector("#stop");

function generateUniqueFirstName(length = 4) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let uniqueName = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueName += characters[randomIndex];
  }

  return uniqueName;
}
const startEvent = () => {
  let uniqueName = generateUniqueFirstName(4);
  console.log(uniqueName, "Hi");
};

let stopInterval;
button.addEventListener("click", (e) => {
  stopInterval = setInterval(startEvent, 1000);
});

stopButton.addEventListener("click", (e) => {
    clearInterval(stopInterval);
});


