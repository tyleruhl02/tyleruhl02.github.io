var canvasWidth = window.innerWidth / 2;
var canvasHeight = window.innerHeight / 2;

var myCanvas;
var ctx;

const BOX_SIZE = 40;
const NUMX = 18;
const NUMY = 14;
const WIDTH = BOX_SIZE*NUMX;
const HEIGHT = BOX_SIZE*(NUMY+2);
const BOMBS = 40;

var board = [];
var displayed = [];
var flags = [];
var bombSet = false;
var flagsRemaining = BOMBS;

var ctrlPressed = false;
window.onkeyup = function(e) {
    if(e.keyCode == 17) {
        ctrlPressed = false;
    }
}

window.onkeydown = function(e) {
    if(e.keyCode == 17) {
        ctrlPressed = true;
    }
}

window.onload = function () {
    myCanvas = document.getElementById('myCanvas');
    ctx = myCanvas.getContext('2d');
    main();
}

function setBackground() {
    ctx.beginPath();
    for(var i = 0; i < NUMX; i++) {
        for(var j = 0; j < NUMY; j++) {
            if((i + j) % 2 == 0) {
                ctx.fillStyle = "#22DD22";
            }
            else {
                ctx.fillStyle = "#90EE90";
            }
            ctx.fillRect(i*BOX_SIZE, BOX_SIZE*2 + j*BOX_SIZE, BOX_SIZE, BOX_SIZE);
        }
    }
    ctx.fillStyle = "#006000";
    ctx.fillRect(0, 0, WIDTH, BOX_SIZE*2);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "50px serif";
    ctx.fillText("Click to start. L-Ctrl to mark flag.", 20, 55);
    ctx.closePath();
}

function displayOne(xPos, yPos) {
    ctx.beginPath();
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (7 / 16)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE / 8), BOX_SIZE / 8, BOX_SIZE * 3 / 4);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (3 / 4)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (5 / 16)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 4)), BOX_SIZE / 4, BOX_SIZE / 8);
    ctx.closePath();
}

function displayTwo(xPos, yPos) {
    ctx.beginPath();
    ctx.fillStyle = "#00A000";
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (6 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (5 / 8)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 8)), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.closePath();
}

function displayThree(xPos, yPos) {
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (6 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (5 / 8)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 8)), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (5 / 8)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.closePath();
}

function displayFour(xPos, yPos) {
    ctx.beginPath();
    ctx.fillStyle = "#A020F0";
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE / 8), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (5 / 8)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE / 8), BOX_SIZE / 8, BOX_SIZE * 3 / 4);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 2, BOX_SIZE / 8)
    ctx.closePath();
}

function displayFive(xPos, yPos) {
    ctx.beginPath();
    ctx.fillStyle = "#FFA500";
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (6 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 8)), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (5 / 8)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.closePath();
}

function displaySix(xPos, yPos) {
    ctx.beginPath();
    ctx.fillStyle = "#9ED7E6";
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (1 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (6 / 8)), BOX_SIZE / 2, BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (5 / 8)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (7 / 16)), BOX_SIZE / 8, BOX_SIZE * 3 / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE / 8), BOX_SIZE / 8, BOX_SIZE * 3 / 4);
    ctx.closePath();
}

function displayFlag(xPos, yPos) {
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 8)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE * (3 / 4)), BOX_SIZE * (3 / 8), BOX_SIZE / 8);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE / 8), BOX_SIZE / 8, BOX_SIZE * 3 / 4);
    ctx.fillRect(BOX_SIZE*xPos + (BOX_SIZE * (1 / 4)), BOX_SIZE*2 + BOX_SIZE*yPos + (BOX_SIZE / 8), BOX_SIZE / 2, BOX_SIZE * (3 / 8));
    ctx.closePath();
}

function displayBoard() {
    ctx.beginPath();
    for(var i = 0; i < NUMX; i++) {
        // console.log(board[i]);
        // console.log(displayed[i])
        for(var j = 0; j < NUMY; j++) {
            if((i + j) % 2 == 0) {
                ctx.fillStyle = "#22DD22";
            }
            else {
                ctx.fillStyle = "#90EE90";
            }
            ctx.fillRect(i*BOX_SIZE, BOX_SIZE*2 + j*BOX_SIZE, BOX_SIZE, BOX_SIZE);

            if(displayed[i][j]) {
                if(board[i][j] >= 0) {
                    if((i + j) % 2 == 0) {
                        ctx.fillStyle = "#C3B091";
                    }
                    else {
                        ctx.fillStyle = "#F7E7CE";
                    }
                    ctx.fillRect(i*BOX_SIZE, BOX_SIZE*2 + j*BOX_SIZE, BOX_SIZE, BOX_SIZE);
                }
                if(board[i][j] == 1) {
                    displayOne(i, j);
                }
                else if(board[i][j] == 2) {
                    displayTwo(i, j);
                }
                else if(board[i][j] == 3) {
                    displayThree(i, j);
                }
                else if(board[i][j] == 4) {
                    displayFour(i, j);
                }
                else if(board[i][j] == 5) {
                    displayFive(i, j);
                }
                else if(board[i][j] == 6) {
                    displaySix(i, j);
                }
            }
            if(flags[i][j]) {
                displayFlag(i, j);
            }
        }
    }
    ctx.fillStyle = "#006000";
    ctx.fillRect(0, 0, WIDTH, BOX_SIZE*2);
    displayFlag(1, -1.5);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "50px serif";
    ctx.fillText(flagsRemaining, 90, 55);
    ctx.closePath();
}

function expandDisplayed() {
    var queue = [];
    var visited = [];
    for(var i = 0; i < NUMX; i++) {
        for(var j = 0; j < NUMY; j++) {
            if(displayed[i][j]) {
                queue.push(i*14+j);
            }
        }
    }

    while(queue.length > 0) {
        var current = queue[queue.length - 1];
        queue.pop();
        displayed[Math.floor(current / 14)][current % 14] = true;
        // console.log(current);
        // console.log(visited);
        // console.log(queue);
        if(!(visited.includes(current))) {
            visited.push(current);
            if(board[Math.floor(current / 14)][current % 14] == 0) {
                // console.log("ZERO!!!! (" + Math.floor(current / 14) + ", " + (current % 14) + "): " + current);
                if(Math.floor(current / 14) > 0) {
                    if(!(visited.includes(current - 14)) && !(queue.includes(current - 14))) {
                        queue.push(current - 14);
                        // console.log("LEFT!!!!");
                    }
                    if(current % 14 > 0) {
                        if(!(visited.includes(current - 15)) && !(queue.includes(current - 15))) {
                            queue.push(current - 15);
                            // console.log("TOP LEFT!!!!");
                        }
                    }
                }
                if(current % 14 > 0) {
                    if(!(visited.includes(current - 1)) && !(queue.includes(current - 1))) {
                        queue.push(current - 1);
                        // console.log("TOP!!!!");
                    }
                    if(Math.floor(current / 14) < NUMX - 1) {
                        if(!(visited.includes(current + 13)) && !(queue.includes(current + 13))) {
                            queue.push(current + 13);
                            // console.log("TOP RIGHT!!!!");
                        }
                    }
                }
                if(Math.floor(current / 14) < NUMX - 1) {
                    if(!(visited.includes(current + 14)) && !(queue.includes(current + 14))) {
                        queue.push(current + 14);
                        // console.log("RIGHT!!!!")
                    }
                    if(current % 14 < NUMY - 1) {
                        if(!(visited.includes(current + 15)) && !(queue.includes(current + 15))) {
                            queue.push(current + 15);
                            // console.log("BOTTOM RIGHT!!!!");
                        }
                    }
                }
                if(current % 14 < NUMY - 1) {
                    if(!(visited.includes(current + 1)) && !(queue.includes(current + 1))) {
                        queue.push(current + 1);
                        // console.log("BOTTOM!!!!");
                    }
                    if(Math.floor(current / 14) > 0) {
                        if(!(visited.includes(current - 13)) && !(queue.includes(current - 13))) {
                            queue.push(current - 13);
                            // console.log("BOTTOM LEFT!!!!");
                        }
                    }
                }
            }
        }
    }
}

function getAdjacentBombs(xPos, yPos) {
    var adjacentBombs = 0;

    if(xPos > 0) {
        if(board[xPos-1][yPos] == -1) {
            adjacentBombs++;
        }
        if(yPos > 0) {
            if(board[xPos-1][yPos-1] == -1) {
                adjacentBombs++;
            }
        }
    }
    if(yPos > 0) {
        if(board[xPos][yPos-1] == -1) {
            adjacentBombs++;
        }
        if(xPos < NUMX - 1) {
            if(board[xPos+1][yPos-1] == -1) {
                adjacentBombs++;
            }
        }
    }
    if(xPos < NUMX - 1) {
        if(board[xPos+1][yPos] == -1) {
            adjacentBombs++;
        }
        if(yPos < NUMY - 1) {
            if(board[xPos+1][yPos+1] == -1) {
                adjacentBombs++;
            }
        }
    }
    if(yPos < NUMY - 1) {
        if(board[xPos][yPos+1] == -1) {
            adjacentBombs++;
        }
        if(xPos > 0) {
            if(board[xPos-1][yPos+1] == -1) {
                adjacentBombs++;
            }
        }
    }

    return adjacentBombs;
}

function completeBoard() {
    for(var i = 0; i < NUMX; i++) {
        for(var j = 0; j < NUMY; j++) {
            if(board[i][j] != -1) {
                board[i][j] = getAdjacentBombs(i, j);
            }
        }
    }
}

function setBombs(xPos, yPos) {
    for(var i = 0; i < NUMX; i++) {
        board.push([]);
        displayed.push([]);
        flags.push([]);
        for(var j = 0; j < NUMY; j++) {
            board[i].push(-2);
            displayed[i].push(false);
            flags[i].push(false);
        }
    }
    board[xPos][yPos] = 0;
    displayed[xPos][yPos] = true;
    if(xPos > 0) {
        board[xPos-1][yPos] = 0;
        displayed[xPos-1][yPos] = true;
        if(yPos > 0) {
            board[xPos-1][yPos-1] = 0;
            displayed[xPos-1][yPos-1] = true;
        }
    }
    if(yPos > 0) {
        board[xPos][yPos-1] = 0;
        displayed[xPos][yPos-1] = true;
        if(xPos < NUMX - 1) {
            board[xPos+1][yPos-1] = 0;
            displayed[xPos+1][yPos-1] = true;
        }
    }
    if(xPos < NUMX - 1) {
        board[xPos+1][yPos] = 0;
        displayed[xPos+1][yPos] = true;
        if(yPos < NUMY - 1) {
            board[xPos+1][yPos+1] = 0;
            displayed[xPos+1][yPos+1] = true;
        }
    }
    if(yPos < NUMY - 1) {
        board[xPos][yPos+1] = 0;
        displayed[xPos][yPos+1] = true;
        if(xPos > 0) {
            board[xPos-1][yPos+1] = 0;
            displayed[xPos-1][yPos+1] = true;
        }
    }
    var bombCounter = BOMBS;
    while (bombCounter > 0) {
        var randNum = Math.floor(Math.random() * NUMX * NUMY);
        var randY = randNum % 14;
        var randX = Math.floor(randNum / 14);

        if(board[randX][randY] == -2) {
            board[randX][randY] = -1;
            bombCounter--;
        }
    }
    completeBoard();
    expandDisplayed();
    //displayBoard();
}

function setFlag(xPos, yPos) {
    if(!displayed[xPos][yPos] && flagsRemaining > 0) {
        if(flags[xPos][yPos]) {
            flagsRemaining++;
        }
        else {
            flagsRemaining--;
        }
        flags[xPos][yPos] = !flags[xPos][yPos];
    }
}

function setClick(xPos, yPos) {
    if(!flags[xPos][yPos] && board[xPos][yPos] == -1) {
        console.log("YOU LOSE!");
    }
    else {
        displayed[xPos][yPos] = true;
        expandDisplayed();
    }
}

function onClick(event) {
    var x1 = event.clientX;
    var y1 = event.clientY;

    var x2 = window.innerWidth;
    var y2 = window.innerHeight;

    var realX = x1 - ((x2 - WIDTH) / 2);
    var realY = y1 - 199;

    var xPos = Math.floor(realX / BOX_SIZE);
    var yPos = Math.floor(realY / BOX_SIZE);

    if(!bombSet) {
        setBombs(xPos, yPos);
        bombSet = true;
    }
    else if (ctrlPressed) {
        setFlag(xPos, yPos);
    }
    else {
        setClick(xPos, yPos);
    }
    displayBoard();
}

function main() {
    setBackground();
}


