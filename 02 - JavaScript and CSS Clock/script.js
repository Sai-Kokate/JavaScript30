const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setClock() {
  let today = new Date();
  let seconds = today.getSeconds();
  let minutes = today.getMinutes();
  let hours = today.getHours();

  let secondsRotate = (seconds / 60) * 360 + 90;
  let minutesRotate = (minutes / 60) * 360 + 90;
  let hoursRotate = (hours / 12) * 360 + (minutes / 60) * (360 / 12) + 90;

  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;

  console.log(seconds, minutes, hours);
  console.log(secondsRotate, minutesRotate, hoursRotate);
}

setInterval(setClock, 1000);
