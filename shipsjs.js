class Field {
    constructor(type) {
        this.type = type;
        this.isHited = false;
    }
}

const createEmptyBoard = () => {
    const board = new Array(10);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(10);
    }
    return board;
}

function randomStart(rowStart, rowEnd, colStart, colEnd) {
    const row = Math.floor(Math.random() * rowEnd - rowStart);
    const col = Math.floor(Math.random() * colEnd - colStart);
    return {
        row,
        col,
    }
}

function checkIfSuitsRows(init, board, masts) {
    if (init.row >= 1) {
        if (typeof board[init.row - 1][init.col] !== 'undefined' && typeof board[init.row - 1][init.col] === 'ship') {
            return false;
        };
    }
    if (init.row + masts <= 9) {
        if (typeof board[init.row + masts][init.col] !== 'undefined' && typeof board[init.row + masts][init.col] === 'ship') {
            return false;
        };
    }
    for (let i = init.row; i < init.row + masts; i++) {
        if (typeof board[i][init.col] !== 'undefined') {
            return false;
        }
    }
    return true;
}

function checkIfSuitsCols(init, board, masts) {
    if (init.col >= 1) {
        if (typeof board[init.row][init.col - 1] !== 'undefined' && typeof board[init.row][init.col - 1] === 'ship') {
            return false;
        };
    }
    if (init.col + masts <= 9) {
        if (typeof board[init.row][init.col + masts] !== 'undefined' && typeof board[init.row][init.col + masts] === 'ship') {
            return false;
        };
    }
    for (let i = init.col; i < init.col + masts; i++) {
        if (typeof board[init.row][i] !== 'undefined') {
            return false;
        }
    }
    return true;
}

function setShip(masts, board) {
    const direction = Math.floor(Math.random() * 2);
    const range = {
        rowStart: 0,
        rowEnd: 10,
        colStart: 0,
        colEnd: 10,
    };
    if (direction === 0) {
        range.rowEnd = range.rowEnd - masts + 1;
        do {
            var init = randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);
        } while (!checkIfSuitsRows(init, board, masts));

        if (init.row >= 1) {
            board[init.row - 1][init.col] = new Field('mishit');
        }
        if (init.row + masts <= 9) {
            board[init.row + masts][init.col] = new Field('mishit');
        }
        for (let i = init.row; i < init.row + masts; i++) {
            board[i][init.col] = new Field('ship');
            if (init.col - 1 >= 0) {
                board[i][init.col - 1] = new Field('mishit')
            };
            if (init.col + 1 <= 9) {
                board[i][init.col + 1] = new Field('mishit')
            };
        }
    } else if (direction === 1) {
        range.colEnd = range.colEnd - masts + 1;

        do {
            var init = randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);
        } while (!checkIfSuitsCols(init, board, masts));

        if (init.col >= 1) {
            board[init.row][init.col - 1] = new Field('mishit');
        }
        if (init.col + masts <= 9) {
            board[init.row][init.col + masts] = new Field('mishit');
        }
        for (let i = init.col; i < init.col + masts; i++) {
            board[init.row][i] = new Field('ship');
            if (init.row - 1 >= 0) {
                board[init.row - 1][i] = new Field('mishit')
            };
            if (init.row + 1 <= 9) {
                board[init.row + 1][i] = new Field('mishit')
            };
        }
    }
    return board;
}

function createBoard() {
    let board = createEmptyBoard();
    board = setShip(4, board);
    board = setShip(3, board);
    board = setShip(3, board);
    board = setShip(2, board);
    board = setShip(2, board);
    board = setShip(2, board);
    board = setShip(2, board);
    board = setShip(1, board);
    board = setShip(1, board);
    board = setShip(1, board);
    board = setShip(1, board);
    board = setShip(1, board);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == undefined) {
                board[i][j] = new Field('mishit');
            }
        }
    }
    return board;
}

function showAllBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let firedField = shotField(i, j);
            if (gameBoard[i][j].type === 'ship') {
                gameBoard[i][j].isHited = true;
                document.querySelector(firedField).setAttribute("src", "ships/ship.jpg");
            } else if (gameBoard[i][j].type === 'mishit') {
                document.querySelector(firedField).setAttribute("src", "ships/pudlo.jpg");
                gameBoard[i][j].isHited = true;
            }
        }
    }
}


function validateInput(inputData) {
    let col;
    let row;
    console.log(inputData[0], inputData[1]);
    if (inputData.length > 2) {
        return false;
    }
    if (parseInt(inputData[1]) <= 9) {
        switch (inputData[0].toUpperCase()) {
            case 'A':
                col = parseInt(inputData[1]);
                row = 0;
                break;
            case 'B':
                col = parseInt(inputData[1]);
                row = 1;
                break;
            case 'C':
                col = parseInt(inputData[1]);
                row = 2;
                break;
            case 'D':
                col = parseInt(inputData[1]);
                row = 3;
                break;
            case 'E':
                col = parseInt(inputData[1]);
                row = 4;
                break;
            case 'F':
                col = parseInt(inputData[1]);
                row = 5;
                break;
            case 'G':
                col = parseInt(inputData[1]);
                row = 6;
                break;
            case 'H':
                col = parseInt(inputData[1]);
                row = 7;
                break;
            case 'I':
                col = parseInt(inputData[1]);
                row = 8;
                break;
            case 'J':
                col = parseInt(inputData[1]);
                row = 9
                break;
            default:
                return false;
        }
    } else {
        return false;
    }
    return {
        row,
        col
    }
}

function shotField(row, column) {
    switch (row) {
        case 0:
            return `#A${column}-img`;
        case 1:
            return `#B${column}-img`;
        case 2:
            return `#C${column}-img`;
        case 3:
            return `#D${column}-img`;
        case 4:
            return `#E${column}-img`;
        case 5:
            return `#F${column}-img`;
        case 6:
            return `#G${column}-img`;
        case 7:
            return `#H${column}-img`;
        case 8:
            return `#I${column}-img`;
        case 9:
            return `#J${column}-img`;
        default:
            return false;
    }
}

let counter = 23;
const gameBoard = createBoard();



// var fieldClicked = document.getElementsByClassName("board-field");
// for (i = 0; i < fieldClicked.length; i++) {
//     fieldClicked[i].addEventListener("click", choseField);
//     fieldClicked[i].addEventListener("click", CollectInput);
//     
// }


var fieldClicked = document.getElementsByClassName("board-field");
console.log(fieldClicked.length);
Array.from(fieldClicked).forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element);
        choseField(element);

        function choseField(element) {
            var id = $(element).attr('id');
            console.log(id[0], id[1]);
            if (id[0] != null) {
                CollectInput(id);

            }

        }



    });
});





function CollectInput(id) {
    var value = validateInput(id);
    console.log(value.row);
    console.log(value.col);


    let firedField = shotField(value.row, value.col);
    if (gameBoard[value.row][value.col].type === 'ship') {
        document.querySelector(firedField).setAttribute("src", "ships/ship.jpg");
        counter--;
        isEndOfGame();
    } else {
        document.querySelector(firedField).setAttribute("src", "ships/pudlo.jpg");
    }
    gameBoard[value.row][value.col].isHited = true;
}






function isEndOfGame() {
    if (counter === 0) {
        showAllBoard(gameBoard);
        $("#win").show();

    }
}
