function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondAngle = (seconds / 60) * 360;
    const minAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30;
    document.querySelector('.sec-hand').style.transform = `rotate(${secondAngle}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minAngle}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourAngle}deg)`;
    const digitalTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.querySelector('.digital-time').innerText = digitalTime;
}
setInterval(setDate, 1000);
setDate();
