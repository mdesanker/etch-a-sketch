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

// Function that draws specific color
function draw(color) {
    const grids = document.querySelectorAll('#container div'); // Select all divs with a parent node with id='container'
    grids.forEach((grid) => {   // Add eventListener for each item in grids nodelist
        grid.addEventListener('mouseover', () => {
            grid.style.cssText = `background-color: ${color}`;
        })
    })
}

// Function that draws a random color each pixel
function drawRandomColor() {
    const grids = document.querySelectorAll('#container div'); // Select all divs with a parent node with id='container'
    grids.forEach((grid) => {   // Add eventListener for each item in grids nodelist
        grid.addEventListener('mouseover', () => {
            // Generate a new random color for each mouseover event
            let num1 = Math.round(Math.random() * (256));
            let num2 = Math.round(Math.random() * (256));
            let num3 = Math.round(Math.random() * (256));
            let color = `rgb(${num1}, ${num2}, ${num3})`;
            grid.style.backgroundColor = color;
        })
    })
}

function removeGrid() {
    const gridElements = document.getElementsByClassName('grid-item');
    while (gridElements.length > 0) {
        gridElements[0].parentElement.removeChild(gridElements[0]);
    }
}

makeRows(32, 32)

const gridSize = document.querySelector('.slider');
const gridSizeOutput = document.querySelector('.grid-size');
gridSizeOutput.textContent = `${gridSize.value} x ${gridSize.value}`
gridSize.addEventListener('input', () => {
    let size = gridSize.value
    gridSizeOutput.textContent = `${size} x ${size}`;
    removeGrid();
    makeRows(size, size);
    draw('black');
})

// Draw on mouseover
const grids = document.querySelectorAll('#container div'); // Select all divs with a parent node with id='container'
grids.forEach((grid) => {   // Add eventListener for each item in grids nodelist
    grid.addEventListener('mouseover', () => {
        grid.style.cssText = "background-color: black";
    })
})

// Erase on mouseover after eraser button pressed
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    draw('white');
})

// Enable draw after pressing color mode
const colorMode = document.querySelector('#draw');
colorMode.addEventListener('click', () => {
    draw(`black`);
})

// Draw with a random color on each pixel after pressing rainbow mode
const rainbowMode = document.querySelector('#rainbow');
rainbowMode.addEventListener('click', () => {
    drawRandomColor();
})

// Clear the etch-a-sketch when clear button is pressed
const clear = document.getElementById('clear');
clear.addEventListener('click', clearScreen);
