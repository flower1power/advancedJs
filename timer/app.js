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

function calculateTimeLeft(endDate) {
  const date = new Date().getTime();
  const timeLeft = endDate - date;

  const months = Intl.DateTimeFormat("ru-RU", { month: "numeric" }).format(
    timeLeft
  );
  const days = Intl.DateTimeFormat("ru-RU", { day: "numeric" }).format(
    timeLeft
  );
  const hours = Intl.DateTimeFormat("ru-RU", { hour: "numeric" }).format(
    timeLeft
  );
  const minutes = Intl.DateTimeFormat("ru-RU", { minute: "numeric" }).format(
    timeLeft
  );
  const seconds = Intl.DateTimeFormat("ru-RU", { second: "numeric" }).format(
    timeLeft
  );

  return { months, days, hours, minutes, seconds };
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
  document.querySelector(".second").innerHTML = `${timeLeft.seconds} ${variants(
    timeLeft.seconds,
    "секунд",
    "секунды",
    "секунда"
  )}`;
}

const endDate = new Date(2024, 11, 31).getTime();

setInterval(() => {
  const timeLeft = calculateTimeLeft(endDate);
  render(timeLeft);
}, 1000);
