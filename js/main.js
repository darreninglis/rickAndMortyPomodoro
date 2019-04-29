var active = false;
let number = 0;

getDay();

function clicked(id) {
    if (active == false) {
        active = true;
        changeImageToActive(id);
        timer(id);
    }
}

function changeImageToActive(id) {
    var tag = document.getElementById(id);
    tag.src = "./assets/portalActive.png";
    rotate(id);
}

function rotate(id) {
    var tag = document.getElementById(id);
    if (active) {
        tag.classList.remove('animated', 'flip');
        tag.classList.add('rotate');
    } else {
        tag.className = "";
        tag.classList.add('animated', 'flip');
    }
}

function playPortalAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

function updateNumber() {
    number += 1;
    var numberLabel = document.getElementById('number').innerHTML = number;
}

function completed(id) {
    var tag = document.getElementById(id);
    tag.src = "./assets/portalGreen.png";
    document.getElementById("timer").innerHTML = "25:00";
    updateNumber();
    active = false;
    rotate(id);
    playPortalAudio();
}

function getDay() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = Date.now();
    var dayName = days[d.getDay()];
    document.getElementById("heading").innerHTML = " " + dayName;
}

function timer(id) {
    var countDownTime = new Date();
    countDownTime.setMinutes(countDownTime.getMinutes() + 25);

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownTime - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (seconds < 10) {
            seconds = '0' + seconds;
            document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        } else if (minutes < 10) {
            minutes = '0' + minutes
            document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        } else {
            document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        }

        if (distance < 0) {
            clearInterval(x);
            completed(id);
        }
    }, 500);
}