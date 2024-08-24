const Hero = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
  this.speak = function () {
    console.log(
      `Ваше имя: ${this.name}  вы говорите на ${this.language} языке`
    );
  };
};

Hero.prototype.weapon = null;
Hero.prototype.hit = function () {
  console.log("Удар");
};

const Orc = new Hero("Orc", "Turgor", "Russian");
Orc.weapon = "Axe";
console.log(Orc);
Orc.speak();
Orc.hit();

Hero.prototype.typeSpell = null;
Hero.prototype.castSpell = function () {
  console.log("Произносит заклинание");
};
const Elf = new Hero("Elf", "Elfo", "Itali");

console.log(Elf);
