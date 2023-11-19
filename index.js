"use strict";
const BOARD_ROWS = 64;
const BOARD_COLS = 64;
const board = [];
for (let r = 0; r < BOARD_ROWS; r++) {
    board.push(new Array(BOARD_COLS).fill("dead"));
}
console.log(board);
const canvasId = "app";
const app = document.getElementById("app");
if (app == null) {
    throw new Error('could not find canvas {canvasId}');
}
app.width = 800;
app.height = 800;
const ctx = app.getContext("2d");
if (ctx == null) {
    throw new Error("could not initialize 2d context");
}
ctx.fillStyle = "#181818";
ctx.fillRect(0, 0, app.width, app.height);
const CELL_WIDTH = app.width / BOARD_COLS;
const CELL_HEIGHT = app.height / BOARD_ROWS;
function render() {
    ctx.fillStyle = "#FF5050";
    for (let r = 0; r < BOARD_ROWS; r++) {
        for (let c = 0; c < BOARD_COLS; c++) {
            if (board[r][c] == "alive") {
                const x = c * CELL_WIDTH;
                const y = r * CELL_HEIGHT;
                ctx.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT);
            }
        }
    }
}
app.addEventListener("click", (e) => {
    const col = Math.floor(e.offsetX / CELL_WIDTH);
    const row = Math.floor(e.offsetY / CELL_HEIGHT);
    board[row][col] = "alive";
    render();
});
render();
