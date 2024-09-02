'use strict';

function getGeolocation(){
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve(position.coords)
      }, (err) => {
        reject(new Error(`Ошибка: ${err.message} - Код: ${err.code}`))
      })
  })
}

getGeolocation()
  .then(({latitude, longitude}) => {
    console.log(latitude)
    console.log(longitude)
  })
  .finally(() => console.log('Все окей'))
  .catch(err => console.log(new Error(err.message)))