//! ДЗ
/*
  12-5 месяцев 4-2 месяца 1 месяц
  31 день 30-25 дней 24-22 дня 21 день 20 дней 19-5 дней 4-2 дня 1 день
  24 - 22 часа 21 час 20-5 часов 4-2 часа 1 час
  60-55 секунд 54-52 секунды 51 секунда
*/

//* Явно есть решение интерестнее, но что-то не придумал
function variants(number, many, xz, one) {
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return one;
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return xz;
  } else {
    return many;
  }
}

function calculateTimeLeft(timeLeft) {
  const second = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor((timeLeft / (1000 * 60 * 60 * 24)) % 30);
  const months = Math.floor((timeLeft / (1000 * 60 * 60 * 24 * 30)) % 12);

  return { months, days, hours, minutes, second };
}

function render(timeLeft) {
  document.querySelector(".month").innerHTML = `${timeLeft.months} ${variants(
    timeLeft.months,
    "месяцев",
    "месяца",
    "месяц"
  )}
    `;
  document.querySelector(".day").innerHTML = `${timeLeft.days} ${variants(
    timeLeft.days,
    "дней",
    "дня",
    "день"
  )}`;
  document.querySelector(".hour").innerHTML = `${timeLeft.hours} ${variants(
    timeLeft.hours,
    "часов",
    "часа",
    "час"
  )}`;
  document.querySelector(".minute").innerHTML = `${timeLeft.minutes} ${variants(
    timeLeft.minutes,
    "минут",
    "минуты",
    "минута"
  )}`;
  document.querySelector(".second").innerHTML = `${timeLeft.second} ${variants(
    timeLeft.seconds,
    "секунд",
    "секунды",
    "секунда"
  )}`;
}

const endDate = new Date(2025, 11, 31).getTime();
let timeLeft = endDate - new Date().getTime();

setInterval(() => {
  timeLeft -= 1000;
  const calc = calculateTimeLeft(timeLeft);
  render(calc);
}, 1000);
