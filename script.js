let showTime = document.getElementById("show-time");
let lapBtn = document.getElementById("lap-btn");
let resetBtn = document.getElementById("reset-btn");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let lapList = document.getElementById("time-list-container");

let hour = 0;
let min = 0;
let sec = 0;
let milisec = 0;
let statusOfTime = false;
let lapCounter = 1;

resetBtn.style.display = "none";
stopBtn.style.display = "none";

startBtn.addEventListener("click", (e) => {
  startTime(e);
});

stopBtn.addEventListener("click", (e) => {
  stopTime(e);
});

resetBtn.addEventListener("click",(e) => {
    resetTime(e);
})

lapBtn.addEventListener("click",(e) => {
    addTimeToList(e);
})

function startTime(event) {
  console.log(event)
  if (statusOfTime == false) {
    statusOfTime = true;
    timeInterval = setInterval(runTime,10);
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
    lapBtn.style.display = "block";
    resetBtn.style.display = "none";
  }
}

function stopTime(event) {
    statusOfTime = false;
    clearInterval(timeInterval);
    stopBtn.style.display = "none";
    startBtn.style.display = "block";
    lapBtn.style.display = "none";
    resetBtn.style.display = "block";
}

function resetTime(event)
{
    showTime.innerHTML = "00:00:00:00";
    sec = min = hour = milisec = 0;
    resetBtn.style.display = "none";
    lapBtn.style.display = "block";

    lapCounter = 1;
    lapList.innerHTML = "";
}

function addTimeToList(event)
{
    let newList = document.createElement("li");
    newList.classList.add("flex");
    newList.setAttribute("id","show-list");

    let lapText = document.createElement("div");
    lapText.classList.add("lap-div");
    lapText.textContent = `Lap ${lapCounter++}`;

    let lapTime = document.createElement("p");
    lapTime.classList.add("prev-time");
    lapTime.textContent = showTime.innerHTML;   

    newList.appendChild(lapText);
    newList.appendChild(lapTime);
    lapList.appendChild(newList);
}

function runTime() {
  if (statusOfTime == true) {
    milisec = parseInt(milisec);
    sec = parseInt(sec);               //convert string to int(09 to 9)
    min = parseInt(min);
    hour = parseInt(hour);
    milisec = milisec + 1;
    if(milisec >= 100){
      sec = sec + 1;
      milisec = 0;
    }
    if (sec >= 60) {
      min = min + 1;
      sec = 0;
      milisec = 0;
    }

    if(min >= 60){
        hour = hour + 1;
        min = 0;
        sec = 0;
        milisec = 0;
    }
    if(milisec<10)
      milisec = "0"+milisec;
    if(sec<10)
        sec = "0"+sec;
    if(min<10)
        min = "0"+min;
    if(hour<10)
        hour = "0"+hour;    
    showTime.innerHTML = `${hour}:${min}:${sec}:${milisec}`;
  }
}








// while (lapList.firstChild) {
//     lapList.removeChild(lapList.firstChild);
// }

// `<span class='lap-list'>Lap</span><span class='lap-list'>${hours}:${minutes}:${seconds}</span>;`