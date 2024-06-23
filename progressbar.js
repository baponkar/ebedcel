let timer;
let timeLeft = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

var time_blocks =   document.getElementById('time-blocks');
var time_blocks_title =   document.getElementById('time-blocks-title')



function getTotalSecondsToDateTime(year, month, day, hours, minutes, seconds) {
  // Get current time in milliseconds
  let currentTime = new Date().getTime();

  // Create a Date object for the specified date-time
  let specifiedDateTime = new Date(year, month - 1, day, hours, minutes, seconds);

  // Get specified date-time in milliseconds
  let specifiedTime = specifiedDateTime.getTime();

  // Calculate difference in seconds
  let totalSecondsDifference = Math.floor((specifiedTime - currentTime) / 1000);

  return totalSecondsDifference;
}



function startTimer() {
  // Set the countdown time in seconds (e.g., 10 minutes = 600 seconds)
  //const countdownTime = getTotalSecondsToDateTime(2024,6,28,16,0,0);
  const countdownTime = 1;
  timeLeft = countdownTime;
  
  // Update the timer every second
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  
  if (timeLeft > 0) {
    days = Math.floor(timeLeft / 86400)
    hours = Math.floor((timeLeft - (days * 86400)) /3600);
    minutes = Math.floor((timeLeft % 3600) / 60);
    seconds = timeLeft % 60;
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    timeLeft--;
  } else {
    clearInterval(timer);
    time_blocks.style.display = "none";
    time_blocks_title.style.display = "none";
  }
}



document.onload(startTimer());
