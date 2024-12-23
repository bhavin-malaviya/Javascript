const clock = document.querySelector("#clock");

const date = new Date().toLocaleTimeString();

setInterval(() => {
  const date = new Date().toLocaleTimeString();
  clock.innerHTML = date;
}, 1000);
