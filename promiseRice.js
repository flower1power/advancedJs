'use strict';


async function getAllProducts(){
  const response = await fetch('https://dummyjson.com/products');
  return response.json()
}

async function getProductId(id){
  const response = await fetch('https://dummyjson.com/products/' + id);
  return response.json()
}

async function getProductIdError(id){
  const response = await fetch('https://dummyjsons.com/products/' + id);
  return response.json()
}

async function race(arrayPromises){
  return new Promise((resolve, reject)=>{
    arrayPromises.map(promise => Promise
      .resolve(promise)
      .then(value => resolve(value), error => reject(error)))
  })
}

race([getProductId(1), getProductId(2), getAllProducts()])
  .then(data => console.log(data))