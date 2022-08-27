

// all the const we need for the app to run 
const pixelproHeader = document.querySelector('.pixelproHeader'); 

const shakeBtn = document.querySelector('.shakeBtn'); 

const eraserBtn = document.querySelector('.eraserBtn'); 

const pixelproContainer = document.querySelector('.pixelproContainer'); 

let random = Math.floor(Math.random() * 255 + 1); 

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

const createGrid = () => {
    pixelproContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${gridSize})`
    pixelproContainer.style.gridTemplateRows = `repeat(${gridSize}, ${gridSize})`

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div'); 
        gridRow.classList.add('gridRow'); 
        pixelproContainer.appendChild(gridRow); 
        for (let j = 0; j < gridSize; j++){
            const gridCell = document.createElement('div'); 
            gridCell.classList.add('gridCell'); 
            gridRow.appendChild(gridCell); 
        }

    }
}

const black = () => {
   
}

// running functions that need to be constantly running



// all the event listeners 

shakeBtn.addEventListener('click', reloadGrid); 
