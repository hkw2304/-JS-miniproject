const clock = document.querySelector(".clock");

function setTime() {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hour}:${min}:${sec}`;
}
setTime();
setInterval(setTime, 1000);
