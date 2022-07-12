const grid = document.getElementById("grid");
const container = document.getElementById("container");

// Creates the grid with a specified amount of elements per row
function makeGrid (rows) {
    grid.innerHTML = "";
    grid.style.setProperty('grid-template-rows', `repeat(${rows}, ${(1 / rows) * 600}px)`);
    grid.style.setProperty('grid-template-columns', `repeat(${rows}, ${(1 / rows) * 650}px)`);
    for (let i = 0; i < (rows * rows); i++) {
        let gridCell = document.createElement("div");
        grid.appendChild(gridCell).className = "grid-items";
        grid.appendChild(gridCell).id = i + 1
    }
    const gridCells = document.querySelectorAll('.grid-items');
    // Adds eventListener for each grid that sets the color to black upon clicking the grid
    gridCells.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "black";
        });
    });
}
/*let sizeButton = document.getElementById("grid-size")
sizeButton.addEventListener("click", function() {
    let gridSize
    for (;gridSize > 100;) { // Prevents grid from being larger than 100 x 100
        gridSize = prompt("How big do you want the grid to be? (Grid cannot be larger than 100 by 100 squares");
    }
    makeGrid(gridSize);
});*/

function setGridSize () {
    let gridSize = 0;
    for (;gridSize > 100 || gridSize == 0;) { // Prevents grid from being larger than 100 x 100
        gridSize = prompt("How big do you want the grid to be? (Grid cannot be larger than 100x100 squares");
    }
    makeGrid(gridSize);
}

makeGrid(16);