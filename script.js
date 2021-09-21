// script.js //
const container = document.getElementById('container');

// Function to generate a grid
function makeRows(rows, cols) {
    // Set the position and size of the container to number of rows and cols
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    // Create a cell for each square unit of container
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        // cell.textContent = (i + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}

// Function that clears the etch-a-sketch screen
function clearScreen() {
    const grids = document.querySelectorAll('#container div');
    grids.forEach((grid) => {
        grid.style.cssText = 'background-color: white';
    })
}

makeRows(32, 32)

const gridSize = document.querySelector('.slider');
const gridSizeOutput = document.querySelectorAll('p.grid-size');
gridSizeOutput.textContent = gridSize.value
// console.log(gridSize)
gridSize.addEventListener('input', () => {
    console.log(gridSize.value)

    makeRows(gridSize.value, gridSize.value)
})


const grids = document.querySelectorAll('#container div'); // Select all divs with a parent node with id='container'
grids.forEach((grid) => {   // Add eventListener for each item in grids nodelist
    grid.addEventListener('mouseover', () => {
        grid.style.cssText = "background-color: black";
    })
})

// Clear the etch-a-sketch when clear button is pressed
const clear = document.getElementById('clear');
clear.addEventListener('click', clearScreen)
