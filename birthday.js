/* 
Задача:

Разработать функцию для валидации возраста пользователя.
Входные данные:

Строка с датой рождения в формате "ГГГГ-ММ-ДД".
Условия:

Функция должна возвращать true, если пользователю больше 14 лет.
Функция должна возвращать false, если пользователю меньше 14 лет.
*/

const date1 = "2006-08-19";
const date2 = "2006-08-18";
const date3 = "2006-07-19";
const date4 = "2005-08-19";

const date5 = "2006-08-20";
const date6 = "2006-09-19";
const date7 = "2007-08-19";

function is18Age(date) {
  const err = "Введите дату в формате год-месяц-день";
  if (!date) {
    return err;
  }

  const dateDate = new Date(date);
  if (isNaN(dateDate.getTime())) {
    return err;
  }

  const now = new Date();
  const age = now.getFullYear() - dateDate.getFullYear();

  if (age > 18) {
    return true;
  }

  if (age === 18) {
    if (
      now.getMonth() > dateDate.getMonth() ||
      (now.getMonth() === dateDate.getMonth() &&
        now.getDate() >= dateDate.getDate())
    ) {
      return true;
    }
  }

  return false;
}

console.log(is18Age(date1));
console.log(is18Age(date2));
console.log(is18Age(date3));
console.log(is18Age(date4));

console.log(is18Age(date5));
console.log(is18Age(date6));
console.log(is18Age(date7));
