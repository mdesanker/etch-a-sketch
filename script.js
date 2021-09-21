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

makeRows(16, 16)

const grids = document.querySelectorAll('#container div');
console.log(grids)
console.log(grids.length);
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.cssText = "background-color: black"
    })
})
