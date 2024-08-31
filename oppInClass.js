'use strict';

class Hero {
  #_race;
  #_language;
  constructor(race, name, language) {
    this.#_race = race;
    this.name = name;
    this.#_language = language;
  }

  get race() {
    return this.#_race;
  }

  get language() {
    return this.#_language;
  }

  speak() {
    console.log(
      `Ваше имя: ${this.name}  вы говорите на ${this.language} языке`
    );
  }
}

class Orc extends Hero {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  speak() {
    console.log(`АААААРГХХХ! КУРШИТЬ`);
  }

  hit() {
    console.log(`Наносит удар ${this.weapon}`);
  }
}

class Elf extends Hero {
  constructor(race, name, language, typeSpell) {
    super(race, name, language);
    this.typeSpell = typeSpell;
  }

  speak() {
    console.log(`Вы слышите завораживающую, но не понятную вам речь`);
  }

  castSpell() {
    console.log(`Произносит заклинание ${this.typeSpell}`);
  }
}

const orc = new Orc("Orc", "Turgor", "Russian", "Axe");
console.log(orc.race);
console.log(orc.name);
console.log(orc.language);
console.log(orc.weapon);
orc.hit();
orc.speak();

const elf = new Elf("Elf", "Elfo", "Italy", "FireOrb");
console.log(elf.race);
console.log(elf.name);
console.log(elf.language);
console.log(elf.typeSpell);
elf.speak();
elf.castSpell();
