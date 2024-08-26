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

const Orc = function (race, name, language, weapon) {
  Hero.call(this, race, name, language);
  this.weapon = weapon;
};

Orc.prototype = Object.create(Hero.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function () {
  console.log("Удар");
};

const Elf = function (race, name, language, typeSpell) {
  Hero.call(this, race, name, language);
  this.typeSpell = typeSpell;
};

Elf.prototype = Object.create(Hero.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.castSpell = function () {
  console.log("Произносит заклинание");
};

const Elf = new Elf("Elf", "Elfo", "Italy", "Orb");
const Orc = new Orc("Orc", "Turgor", "ARGHH", "Axe");
Elf.speak();
Orc.speak();
Elf.castSpell();
Orc.hit();
