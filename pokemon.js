"use strict";

//!DZ

/*
получить покемона ditto
получить первую ссылку на описание первой абилки
перейти по ней
достать описание на английском языке ее эффекта
 */

function getPokemon(pokemon) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  request.send();

  request.addEventListener("load", function () {
    const { abilities } = JSON.parse(this.responseText);
    const [firstAbility, ..._] = abilities;
    getEffectEng(firstAbility.ability.url)
  })
}


function getEffectEng(url) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.addEventListener("load", function () {
      const { effect_entries } = JSON.parse(this.responseText);
      const [data] = effect_entries.filter(
        (effect) => effect.language.name === "en"
      );
      console.log(data.effect);
    });
}



getPokemon('ditto')