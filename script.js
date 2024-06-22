setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
// const date = document.querySelector('[date]')
// const day = document.querySelector('[day]')
// const time = document.querySelector('[time]')
const digital = document.getElementById('digital');
const date = document.getElementById('date');
const time = document.getElementById('time');

// let currentDat = new Date();
function setClock() {
  // console.log(currentDate);
  const currentDate = new Date();
  // const check = toLocaleTimeString();
  date.innerHTML = currentDate.toDateString();
  time.innerHTML = currentDate.toTimeString()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()