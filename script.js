// script.js //
const container = document.getElementById('container');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.textContent = (i + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}

makeRows(16, 16)