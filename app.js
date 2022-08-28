

// all the const we need for the app to run 
const pixelproHeader = document.querySelector('.pixelproHeader'); 

const shakeBtn = document.querySelector('.shakeBtn'); 

const eraserBtn = document.querySelector('.eraserBtn'); 

const blackBtn = document.querySelector('.blackBtn'); 

const rainbowBtn = document.querySelector('.rainbowBtn'); 

const shaderBtn = document.querySelector('.shaderBtn'); 

const highlightBtn = document.querySelector('.highlightBtn'); 

const randomColorBtn = document.querySelector('.randomColorBtn'); 

const blueBtn = document.querySelector('.blueBtn'); 

const yellowBtn = document.querySelector('.yellowBtn'); 

const greenBtn = document.querySelector('.greenBtn'); 

const redBtn = document.querySelector('.redBtn'); 

const pinkBtn = document.querySelector('.pinkBtn'); 

const purpleBtn = document.querySelector('.purpleBtn'); 

const brownBtn = document.querySelector('.brownBtn'); 

const pixelproContainer = document.querySelector('.pixelproContainer'); 


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

let randomR = Math.floor(Math.random() * 200); 
let randomG = Math.floor(Math.random() * 240); 
let randomB = Math.floor(Math.random() * 239); 



const createGrid = () => {
    pixelproContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`
    pixelproContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)`
    const widthAndHeight = 700 / gridSize; 

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div'); 
        gridCell.classList.add('gridCell'); 
        gridCell.style.width = `${widthAndHeight}px`
        gridCell.style.height = `${widthAndHeight}px`
        pixelproContainer.appendChild(gridCell); 

        // gridCell.addEventListener('mouseover', colorCell);
        
        let COLOR = '#000000'

        function randomHex() {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            return '#' + n.slice(0, 6);
          }        
        eraserBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = '#efefef'; 
            })
        })

        blackBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'black'; 
            })
        })

        rainbowBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = `${randomHex()}`
            })
        })

        blueBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = "rgba(0, 0, 255)"
            })
        })

        yellowBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 255, 0)'
            })
        })

        greenBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(0, 255, 0)'
            })
        })

        redBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 0,0)'
            })
        })

        pinkBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 193, 203)'; 
            })
        })

        purpleBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(255, 0, 255)'; 
            })
        })

        brownBtn.addEventListener('click', () => {
            gridCell.addEventListener('mouseover', () => {
                gridCell.style.background = 'rgb(165, 42, 42)'; 
            })
        })

       

        // shaderBtn.addEventListener('click', () => {
        //     gridCell.addEventListener('mouseover', () => {
        //         gridCell.style.background = `rgba(0, 0, 0, 0.3)`; 
        //     })
        // })

        


        
        function colorCell() {
            gridCell.style.backgroundColor = `${COLOR}`; 
        }
        
    }
}


// running functions that need to be constantly running
createGrid(); 


// all the event listeners 

shakeBtn.addEventListener('click', reloadGrid); 

