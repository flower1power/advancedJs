"use strict";

//!DZ

/*
  Переписать дз 9-pokemon на promises
*/

function getResponse(url, errText){
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errText} - ${response.status}`);
      }
      return response.json()
    })
}


function getPokemonPromises(pokemon, numberAbilitie) {
  getResponse(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, 'Нет такого покемона')
    .then(({abilities}) => {
      const url = abilities[numberAbilitie].ability.url
      return getResponse(url, 'Нет такой способности')
    })
    .then(({effect_entries}) => {
      const {effect} = effect_entries.find(({language}) => language.name === "en")
      console.log(effect)
    })
    .catch(err => console.log(err.message))
}

getPokemonPromises('ditto', 0)