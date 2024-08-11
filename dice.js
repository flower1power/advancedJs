//! ДЗ

/* 
Сделать функцию для настольной игры. 
Она принимает тип dice, который надо бросить:
d4, d6, d8, d10, d12, d16, d20
и возвращать случайное целое число на этом интервале
включая границы

*/

function diceRandom(dice) {
  const allDice = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  };

  if (!allDice[dice]) {
    return "Мы не знаем такой кубик, оставьте заявку для добавление вашего кубика в систему";
  }

  return Math.floor(Math.random() * (allDice[dice] - 1 + 1) + 1);
}

function diceRandom2(dice) {
  const allDice = new Map([
    ["d4", 4],
    ["d6", 6],
    ["d8", 8],
    ["d10", 10],
    ["d12", 12],
    ["d16", 16],
    ["d20", 20],
  ]);

  if (!allDice.has(dice)) {
    return "Мы не знаем такой кубик, оставьте заявку для добавление вашего кубика в систему";
  }

  return Math.floor(Math.random() * (allDice.get(dice) - 1 + 1) + 1);
}

console.log(diceRandom("d122"));
console.log(diceRandom("d12"));

console.log(diceRandom2("d122"));
console.log(diceRandom2("d12"));
