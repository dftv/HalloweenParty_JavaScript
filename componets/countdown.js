const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//To enter timer end date
//let count_down = new Date('10/31/0000 00:00:00').getTime();

//So that the timer is always 2 days away
let count_down = new Date(Date.now()).getTime() + (day * 2);

let x = setInterval(() => countDown(), second);

function countDown() {
    let now = new Date(Date.now()).getTime();
    let diff = count_down - now;

    for(x = 1; x <= 2; x++) {
        document.getElementById('days-' + x).innerHTML = Math.floor(diff / day);
        document.getElementById('hours-' + x).innerHTML = Math.floor(diff % day / hour);
        document.getElementById('minutes-' + x).innerHTML = Math.floor(diff % hour / minute);
        document.getElementById('seconds-' + x).innerHTML = Math.floor(diff % minute / second);
    }

}
