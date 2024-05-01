const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const day = new Date().getDate().toString().padStart(2, '0');
const month = new Date().toLocaleString('en', { month: 'long' }).slice(0, 3);

const dateDisplay = document.getElementById('date-display');
dateDisplay.textContent = `${day}/${month}/${currentYear}`;

const hoursHand = document.getElementById('hours-hand');
const minutesHand = document.getElementById('minutes-hand');
const secondsHand = document.getElementById('seconds-hand');

updateClock();

function updateClock() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  const hourDegree = (hour / 12) * 360;
  const minuteDegree = (minute / 60) * 360;
  const secondDegree = (second / 60) * 360;

  secondsHand.style.transform = `rotate(${secondDegree}deg)`;
  minutesHand.style.transform = `rotate(${minuteDegree}deg)`;
  hoursHand.style.transform = `rotate(${hourDegree}deg)`;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
