var timeCount = 0;

function TimeDisplay() {
    timeCount += 1;
    document.getElementById("timeCount").innerText = timeCount
}

setInterval(TimeDisplay, 1000)

function locationSet() {
    window.location = "Main/student2_main.html";
}

setTimeout(locationSet, 4000);