let startTime, updatedTime, difference = 0, timerInterval;
let running = false;
let accumulatedTime = 0; // Track time when stopped

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = accumulatedTime + (updatedTime - startTime);

    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);
    let milliSeconds = Math.floor((difference % 1000));

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliSeconds = milliSeconds < 100 ? (milliSeconds < 10 ? "00" + milliSeconds : "0" + milliSeconds) : milliSeconds;

    document.querySelector(".countdown").innerText = `${hours}:${minutes}:${seconds}:${milliSeconds}`;

    timerInterval = setTimeout(updateDisplay, 10);
}

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setTimeout(updateDisplay, 10);
        document.querySelector(".start").innerText = "Stop";
        running = true;
    } else {
        clearTimeout(timerInterval);
        accumulatedTime += new Date().getTime() - startTime; // accumulate elapsed time
        document.querySelector(".start").innerText = "Start";
        running = false;
    }
}
document.querySelector(".start").addEventListener("click", startStop);

function reset() {
    clearTimeout(timerInterval);
    running = false;
    accumulatedTime = 0;
    startTime = null;
    document.querySelector(".countdown").innerText = "00:00:00:000";
    document.querySelector(".start").innerText = "Start";
}
document.querySelector(".reset").addEventListener("click", reset);