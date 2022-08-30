

// all the const we need for the app to run 
const pixelproHeader = document.querySelector('.pixelproHeader'); //this isn't really needed to run im just in the process of adding some user input for the css styles. 

const shakeBtn = document.querySelector('.shakeBtn'); //shake the screen button 

const eraserBtn = document.querySelector('.eraserBtn'); //eraser mode

const blackBtn = document.querySelector('.blackBtn'); //black paint mode

const rainbowBtn = document.querySelector('.rainbowBtn'); //rainbow mode

const shaderBtn = document.querySelector('.shaderBtn'); //shading feature that i have yet to debug and add to the final product 

const highlightBtn = document.querySelector('.highlightBtn'); //same as the shading feature but the adverse. 

const randomColorBtn = document.querySelector('.randomColorBtn'); //random color feature that was mentioned below (line: 55)

const blueBtn = document.querySelector('.blueBtn'); //blue paint mode

const yellowBtn = document.querySelector('.yellowBtn'); //yellow paint mode

const greenBtn = document.querySelector('.greenBtn'); //green paint mode. 

const redBtn = document.querySelector('.redBtn'); //red paint mode. 

const pinkBtn = document.querySelector('.pinkBtn'); //pink paint mode. 

const purpleBtn = document.querySelector('.purpleBtn'); //purple paint mode. 

const brownBtn = document.querySelector('.brownBtn'); //brown paint mode 

const pixelproContainer = document.querySelector('.pixelproContainer'); //this is the grid container that holds the grid cells 


// This function below creates the grid based off of player input with a condition that its over 0 but under 101 grid cells

const gridSize = prompt('Pick A Number Between 1 - 100'); 

if (gridSize >= 101) {
    alert("OH NO! You picked a number that's too HIGH! PICK LOWER"); 
    location.reload(); 
}else if (gridSize < 1) {
    alert("OH NO! You picked a number that's too LOW! PICK HIGHER")
    location.reload();  
}

// all the functions 

// for the different colors to work we can make a function that always runs that colors the gridcells but when a button is clicked that function is changed to the colored version?

function reloadGrid() {
    location.reload(); 
}

// Below is a feature i have yet to make work where it can provide you with a random color to pain with and it keeps that color instead of having the rainbow 
//paint mode. however i'm currently (08/29/2022) running into an issue where once it picks one color it can't pick another one: 

// let randomR = Math.floor(Math.random() * 200); 
// let randomG = Math.floor(Math.random() * 240); 
// let randomB = Math.floor(Math.random() * 239); 

// this function below is to create the grid. I kept running into issues but this way worked for me:  

const createGrid = () => {
    pixelproContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)` // this sets the css grid columns
    pixelproContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)` // this sets the css grid rows
    const widthAndHeight = 550 / gridSize; // this makes it so that no matter how many grid cells there are it'll always fit inside the container that's 700px

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div'); 
        gridCell.classList.add('gridCell'); 
        gridCell.style.width = `${widthAndHeight}px`
        gridCell.style.height = `${widthAndHeight}px`
        pixelproContainer.appendChild(gridCell); 

        // gridCell.addEventListener('mouseover', colorCell);
        
        let COLOR = '#000000'

        // rainbow paint function

        function randomHex() {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return '#' + n.slice(0, 6);
        }        
        // rainbow paint button that calls the rainbow function above

        rainbowBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = `${randomHex()}`
            })
        })
        //   eraser tool mode 
        eraserBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = '#efefef'; 
            })
        })
        
        // black paint mode 

        blackBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'black'; 
            })
        })

        // blue paint mode 

        blueBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = "rgba(0, 0, 255)"
            })
        })

        // yellow paint mode

        yellowBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 255, 0)'
            })
        })

        // green paint mode

        greenBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(0, 255, 0)'
            })
        })

        // red paint mode

        redBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 0,0)'
            })
        })

        // pink paint mode 

        pinkBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 193, 203)'; 
            })
        })

        // purple paint mode 

        purpleBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 0, 255)'; 
            })
        })

        // brown paint mode 

        brownBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(165, 42, 42)'; 
            })
        })

        function colorCell() {
            gridCell.style.backgroundColor = `${COLOR}`; 
        }
        
    }
}


// running functions that need to be constantly running
createGrid(); 


// event listener for the shake screen button to work

shakeBtn.addEventListener('click', reloadGrid); 

