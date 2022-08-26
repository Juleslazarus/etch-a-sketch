// Theme Color Selector Button Variables
const blueThemeBtn = document.querySelector('.blueThemeBtn'); 
const greenThemeBtn = document.querySelector('.greenThemeBtn'); 
const pinkThemeBtn = document.querySelector('.pinkThemeBtn'); 
const bluePinkGradient = document.querySelector('.bluePinkGradient'); 
const bluePurpleGradient = document.querySelector('.bluePurpleGradient'); 
const greenBlueGradient = document.querySelector('.greenBlueGradient'); 
const resetThemeBtn = document.querySelector('.resetThemeBtn'); 
const headerContainer = document.querySelector('.headerContainer'); 
const headerText = document.querySelectorAll('h1');


//body var for the change of theme color 
const body = document.querySelector('body'); 

//logic for Theme color changing 
blueThemeBtn.addEventListener('mouseover', () => {
    body.style.background = '#72A0C1'; 
}); 

greenThemeBtn.addEventListener('mouseover', () => {
    body.style.background = '#87A96B'; 
});

pinkThemeBtn.addEventListener('mouseover', () => {
    body.style.background = '#eec0c8'; 
}); 

bluePinkGradient.addEventListener('mouseover', () => {
    body.style.background = 'linear-gradient(to right,#72A0C1,#eec0c8 )'; 
})

bluePurpleGradient.addEventListener('mouseover', () => {
    body.style.background = 'linear-gradient(to right, #002D62, #720e9e )'; 
})

greenBlueGradient.addEventListener('mouseover', () => {
    body.style.background = 'linear-gradient(to right, #87A96B, #72A0C1)'; 
})

resetThemeBtn.addEventListener('mouseover', () => {
    body.style.background = 'white'; 
})

//grid area 
const gridSizeBtn = document.querySelector('.gridSizeBtn'); 

const gridContainer = document.querySelector('.gridContainer'); 
const resetBtn =document.querySelector('.resetBtn'); 


const size = prompt('1-100'); 

function grid() {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const widthAndHeight = 600 / size; 
        const gridCell = document.createElement('div'); 
        gridCell.classList.add('gridCell'); 
        gridCell.style.width = `${widthAndHeight}px`;
        gridCell.style.height = `${widthAndHeight}px`;
        gridContainer.appendChild(gridCell); 
        gridCell.addEventListener('mouseover', changeColor); 
        // for (let j = 0; j < size; j++) {
        //     const gridCell = document.createElement('div'); 
        //     gridCell.classList.add('gridCell'); 
        //     gridContainer.appendChild(gridCell); 
        // }
      function changeColor() {
  gridCell.style.backgroundColor = 'black'; 
}
      

    }
}



grid(size); 