function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

const clock = document.querySelector("#clock");
getClock(); // 즉시 실행
setInterval(getClock, 1000); // 1초마다 업데이트
