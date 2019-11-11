const Board = require('./board');
const validateInput = require('./input');
const shotField = require('./output');

const input = document.querySelector('#move');

class OnePlayerGame {
    constructor() {
        this.gameBoard = new Board();
        this.gameBoard.createRandomBoard();
        this.gameBoardPlayerTwo = new Board();
        this.hitCounter = 0;
        this.moveCounter = 0;
    };

    onePlayerGame() {
        console.log("one Player Game", this.gameBoard);
        input.addEventListener('change', this.onePlayerLoop.bind(this));
    };

    onePlayerLoop() {
    let value = validateInput(input, this.gameBoard);
        if (value) {
            let firedField = shotField(value.row, value.col);
            if (this.gameBoard.board[value.row][value.col].type === 'ship') {
                document.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
                this.hitCounter++;
            this.isEndOfGame();    
            } else {
                document.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");
            } 
            this.gameBoard.board[value.row][value.col].isHited = true;
        };
    };

    isEndOfGame() {
        if (this.hitCounter === 4) {
            this.gameBoard.showAllBoard();
        }
    }
}

module.exports = OnePlayerGame;