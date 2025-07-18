let timer = 240
const tiktak = document.querySelector('#tikTak');
const dindon = new Audio();
dindon.src = 'Din don.mp3';

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    timer--;

    if (timer < 0) {
        stopTimer();
        timer = 0
        tiktak.pause();
        dindon.play();
    }

    function stopTimer() {
        clearInterval(timerId);
    }

}

let timerId = setInterval(calculateTime, 1000);

