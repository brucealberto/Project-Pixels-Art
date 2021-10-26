let selected = document.querySelector('.selected');
let paletas = document.querySelector('#color-palette');
let pixelGrid = document.querySelector('#pixel-board')
let pixel = document.querySelectorAll('.pixel')
let color = 'black';
console.log(pixel.length);
//event click para cada cor
//console.log(paletas.appendChild(selected));
// Requisito 8
for (index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', (event) => {
    event.target.style.backgroundColor = color
  })
}

let black = document.querySelector('#black');
black.addEventListener('click', (event) => {
  color = 'black';
  black.classList.add('selected')
  red.classList.remove('selected')
  blue.classList.remove('selected')
  green.classList.remove('selected')
  console.log(black,red,green,blue);
})

console.log(black);
let red = document.querySelector('#red');
red.addEventListener('click', (event) => {
  color = 'red';
  red.classList.add('selected')
  black.classList.remove('selected')
  blue.classList.remove('selected')
  green.classList.remove('selected')
  console.log(black,red,green,blue)
})

let blue = document.querySelector('#blue');
blue.addEventListener('click', (event) => {
  color = 'blue';
  blue.classList.add('selected');
  black.classList.remove('selected')
  red.classList.remove('selected')
  green.classList.remove('selected')
  console.log(black,red,green,blue)
})

let green = document.querySelector('#green');
green.addEventListener('click', (event) => {
  color = 'green';
  green.classList.add('selected')
  red.classList.remove('selected')
  black.classList.remove('selected')
  blue.classList.remove('selected')
  console.log(black,red,green,blue)
})
// function criarBotao() {
//   let btnCriar = document.createElement('button')
//   btnCriar.innerText = 'Limpar';
//   btnCriar.id = 'clear-board';
//   btnCriar.style.display = 'block'
//   paletas.appendChild(btnCriar);
// }
// criarBotao();

let btnLimpar = document.querySelector('#clear-board');

function limpar() {
  for (const index of pixel) {
    index.style.backgroundColor = 'white';
  }
}
limpar()

btnLimpar.addEventListener('click', limpar)
