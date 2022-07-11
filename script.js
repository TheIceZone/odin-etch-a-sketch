const grid = document.getElementById("grid");
const container = document.getElementById("container");

// Creates the grid with a specified amount of elements per row
function makeGrid (rows) {
    grid.style.setProperty('grid-template-rows', `repeat(${rows}, ${(1 / rows) * 600}px)`);
    grid.style.setProperty('grid-template-columns', `repeat(${rows}, ${(1 / rows) * 650}px)`);
    for (let i = 0; i < (rows * rows); i++) {
        let gridCell = document.createElement("div");
        grid.appendChild(gridCell).className = "grid-items";
        grid.appendChild(gridCell).id = i + 1
    }
}

function setGridSize () {
    let gridSize
    for (;gridSize > 100;) { // Prevents grid from being larger than 100 x 100
        gridSize = prompt("How big do you want the grid to be? (Grid cannot be larger than 100 by 100 squares");
    }
}

makeGrid(16);
const gridCells = document.querySelectorAll('.grid-items');
// Adds eventListener for each grid that sets the color to black upon clicking the grid
gridCells.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "black";
    });
});