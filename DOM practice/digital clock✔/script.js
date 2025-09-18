

function dateTime() {
    // Get current date and time
    let date = new Date();
    // Extract hours, minutes, seconds
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    // Convert to 12-hour format
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        // Set session to PM
        session = "PM";
    }
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const time = hours + ":" + minutes + ":" + seconds + " " + session;

    document.querySelector(".clock").textContent = time;

    setTimeout(dateTime, 1000);
}
dateTime();