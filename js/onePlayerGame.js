const Board = require('./board');
const validateInput = require('./input');
const shotField = require('./output');
const information = require("./information");

const fieldClicked = document.getElementsByClassName("board-field");

class OnePlayerGame {
    constructor() {
        this.gameBoard = new Board();
        this.gameBoard.createRandomBoard();
        this.hitCounter = 0;
        this.moveCounter = 0;
    };

    onePlayerGame() {
        const getId = (e) =>{
            let element = e.currentTarget;
            let id = element.getAttribute('id');
            if (id[0] != null) {
                this.onePlayerLoop(id);
            }
        }
        Array.from(fieldClicked).forEach(function (element) {
            element.addEventListener('click',  getId, {once: true});
        });   
    };

    onePlayerLoop(id) {
        let coordinate = validateInput(id);
        this.moveCounter++;
        let firedField = shotField(coordinate.row, coordinate.col);
        if (this.gameBoard.board[coordinate.row][coordinate.col].type === 'ship') {
            document.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
            this.hitCounter++;
            this.isEndOfGame();
        } else {
            document.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");
        }
        this.gameBoard.board[coordinate.row][coordinate.col].isHited = true;
    };

    isEndOfGame() {
        if (this.hitCounter === 23) {
            this.gameBoard.showAllBoard("board");
            information(`Udało Ci się wygrać w ${this.moveCounter} ruchach.`)
        }
    }
};




module.exports = OnePlayerGame;