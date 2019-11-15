const Board = require('./board');
const validateInput = require('./input');
const shotField = require('./output');
const playerOneBoardHTML = document.getElementById("board");
const playerTwoBoardHTML = document.getElementById("board2");
const fieldsBoardOne = document.getElementById("board").childNodes;
const fieldsBoardTwo = document.getElementById("board2").childNodes;

class twoPlayersGame {
    constructor() {
        //for Player 1
        this.playerOneBoard = new Board();
        this.playerOneBoard.createRandomBoard();
        //for Player 2
        this.playerTwoBoard = new Board();
        this.playerTwoBoard.createRandomBoard();
        this.playerOneHitCounter = 0;
        this.playerTwoHitCounter = 0;
    }

    twoPlayersGame() {
        const boardOne = (e) => {
            let element = e.currentTarget;
            let moveOne = element.getAttribute('id');
            if (moveOne[0] != null) {
                this.playerOneMove(moveOne);
            }
        }
        Array.from(fieldsBoardOne).forEach(function (element) {
            element.addEventListener('click',  boardOne, {once: true});
        });
        const boardTwo = (e) => {
            let element = e.currentTarget;
            let moveTwo = element.getAttribute('id');
            if (moveTwo[0] != null) {
                this.playerTwoMove(moveTwo);
            }
        }

        Array.from(fieldsBoardTwo).forEach(function (element) {
            element.addEventListener('click',  boardTwo, {once: true});
        });

        
        // move1.addEventListener('change', this.playerOneMove.bind(this));
        // move2.addEventListener('change', this.playerTwoMove.bind(this));
    }

    playerOneMove(moveOne) {
        let value = validateInput(moveOne);
        if (value) {
            let firedField = shotField(value.row, value.col);
            this.playerOneBoard.board[value.row][value.col].isHited = true;
            if (this.playerOneBoard.board[value.row][value.col].type === 'ship') {
                playerOneBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
                this.playerOneHitCounter++;
                this.isEndOfGame();
            } else {
                playerOneBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");

            }
        };
    };

    playerTwoMove(moveTwo) {
        let value = validateInput(moveTwo);
        if (value) {
            let firedField = shotField(value.row, value.col);
            this.playerTwoBoard.board[value.row][value.col].isHited = true;
            if (this.playerTwoBoard.board[value.row][value.col].type === 'ship') {
                playerTwoBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
                this.playerTwoHitCounter++;
                this.isEndOfGame();
            } else {
                playerTwoBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");

            }
        };
    };

    isEndOfGame() {
        if (this.playerOneHitCounter === 23 || this.playerTwoHitCounter === 23) {
            this.playerOneBoard.showAllBoard();
            this.playerTwoBoard.showAllBoard();
        }
    }

}

module.exports = twoPlayersGame;