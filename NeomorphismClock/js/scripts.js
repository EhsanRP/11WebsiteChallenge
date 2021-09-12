const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

clock = () => {
    let today = new Date();
    let hourDegree = (today.getHours() % 12) + today.getMinutes() / 59;
    let minute = (today.getMinutes());
    let secondDegree = (today.getSeconds())

    hourDegree *=30;
    minute *= 6;
    secondDegree *=6;

    rotation(hours,hourDegree)
    rotation(minutes,minute)
    rotation(seconds,secondDegree)

    // call every second
    setTimeout(clock, 500);

}

rotation = (target , val) =>{
    target.style.transform = `rotate(${val}deg)`;
}

window.onload = clock();