'use strict'

const wrapper = document.querySelector('.wrapper')
const counter = document.querySelector('.counter')
let lastClickedButton = null

for(let i = 0; i < 5 ; i++) {
  const button = createButton()
  wrapper.append(button)
}

function createButton(){
  const button = document.createElement('button')
  button.innerHTML = 'Нажми на меня'
  button.classList.add('button')
  button.addEventListener('click', handleClickButton)

  return button
}

function handleClickButton(event){
  const clickedButton = event.target
  console.log(event.target);

  if(lastClickedButton && lastClickedButton !== clickedButton){
    lastClickedButton.textContent = 'Нажми на меня'
  }

  clickedButton.textContent = 'Нажата'
  lastClickedButton = clickedButton

  updateCounter()
}


function updateCounter(){
  counter.textContent = Number(counter.textContent) + 1
}

