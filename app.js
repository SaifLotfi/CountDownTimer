const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const giveawayDate = document.querySelector('.giveaway');
const displayedDays = document.querySelector('.days');
const displayedHours = document.querySelector('.hours');
const displayedMinutes = document.querySelector('.minutes');
const displayedSeconds = document.querySelector('.seconds');
const deadline = document.querySelector('.deadline');

const date = new Date(new Date().getTime() + 8.64e8);
//const date = new Date(new Date().getTime() + 5000);

//date.setHours(11);

let day = date.getDate();
let weekDay = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

giveawayDate.textContent = `
\n          giveaway ends on ${weekdays[weekDay]}, ${day} ${
    months[month]
} ${year}, ${hours % 12 === 0 ? 12 : hours % 12}:${minutes}${
    hours >= 12 ? 'pm' : 'am'
}\n        
`;
let daysLeft;
let hoursLeft;
let minutesLeft;
let secondsLeft;
let timeLeft;
const getCurrentTime = () => {
    let currentTime = new Date().getTime();
    let timeLeft = date.getTime() - currentTime;
    daysLeft = parseInt((date.getTime() - currentTime) / 86400000);
    timeLeft = timeLeft - daysLeft * 86400000;
    hoursLeft = parseInt(timeLeft / 3600000);
    timeLeft = timeLeft - hoursLeft * 3600000;
    minutesLeft = parseInt(timeLeft / 60000);
    timeLeft = timeLeft - minutesLeft * 60000;
    secondsLeft = parseInt(timeLeft / 1000);
    if (timeLeft <= 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
    console.log(timeLeft);
};

const updateUI = () => {
    getCurrentTime();
    displayedDays.textContent = daysLeft;
    displayedHours.textContent = hoursLeft;
    displayedMinutes.textContent = minutesLeft;
    displayedSeconds.textContent = secondsLeft;
};
updateUI();
let countdown = setInterval(updateUI, 50);
