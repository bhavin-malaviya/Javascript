const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submitGuess");
const userInput = document.querySelector("#guessField");
const preGuess = document.querySelector("#previousGuesses");
const reminGuess = document.querySelector("#guessesRemaining");
const lowOrHi = document.querySelector("#lowOrHi");
const result = document.querySelector(".result");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid Number");
  } else if (guess < 1) {
    alert("Please enter a number More than one");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    previousGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage("Game Over");
      endGames();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage("You guessed is right");
    endGames();
  } else if (guess < randomNumber) {
    displayMessage("number is too low");
  } else if (guess > randomNumber) {
    displayMessage("number is too high");
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  preGuess.innerHTML += `${guess} `;
  numGuess++;
  console.log(numGuess);
  if(numGuess > 11){
    reminGuess.innerHTML = 0;
  } else {
      reminGuess.innerHTML = `${11 - numGuess}`;
  }
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGames = () => {
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    result.appendChild(p);
    playGame = false
    newGames();
};

const newGames = () => {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        numGuess = 1;
        reminGuess.innerHTML = '';
        lowOrHi.innerHTML = '';
        preGuess.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        result.removeChild(p);
        playGame = true;
    })
};

