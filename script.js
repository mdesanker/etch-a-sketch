// script.js //
function genGrid(num) {
    const container = document.getElementById('container')
    for (i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        for (j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.style.cssText = ""
            cell.classList.add('grid-item');
            cell.textContent = (i * num) + j;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

}

genGrid(4)
