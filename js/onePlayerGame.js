const Board = require('./board');
const validateInput = require('./input');
const shotField = require('./output');

const fieldClicked = document.getElementsByClassName("board-field");

class OnePlayerGame {
    constructor() {
        this.gameBoard = new Board();
        this.gameBoard.createRandomBoard();
        this.hitCounter = 0;
        this.moveCounter = 0;
    };

    onePlayerGame() {
        console.log("one Player Game", this.gameBoard);
        console.log(fieldClicked.length);
        const test = (e) =>{
            let element = e.currentTarget;
            let id = element.getAttribute('id');
                console.log(id[0], id[1]);
                if (id[0] != null) {
                    console.log()
                    this.onePlayerLoop(id);
                }
            }
        Array.from(fieldClicked).forEach(function (element) {
            element.addEventListener('click',  test, {once: true});
        });
       
        };

        // input.addEventListener('change', this.onePlayerLoop.bind(this));
 

    onePlayerLoop(id) {

            let coordinate = validateInput(id);
            console.log("coordinate:", coordinate.row, coordinate.col);
            this.moveCounter++;
            let firedField = shotField(coordinate.row, coordinate.col);
            console.log("OPL test :", this.gameBoard.board);
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
            this.gameBoard.showAllBoard();
            console.log(this.moveCounter);
        }
    }
};




module.exports = OnePlayerGame;