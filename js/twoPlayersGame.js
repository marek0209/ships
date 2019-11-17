const Board = require('./board');
const validateInput = require('./input');
const shotField = require('./output');
const playerOneBoardHTML = document.getElementById("board");
const playerTwoBoardHTML = document.getElementById("board2");
const fieldsBoardOne = document.getElementById("board").childNodes;
const fieldsBoardTwo = document.getElementById("board2").childNodes;
const information = require("./information");

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
        this.myTurn = false;
    }

    twoPlayersGame() {
        Array.from(fieldsBoardOne).forEach(this.setEventListeners1.bind(this));
        Array.from(fieldsBoardTwo).forEach(this.setEventListeners2.bind(this));
    }

    setEventListeners1(e) {
        e.addEventListener('click',  this.playerOneMove.bind(this), { once: true });
    }

    setEventListeners2(e) {
        e.addEventListener('click',  this.playerTwoMove.bind(this), { once: true });
    }

    playerOneMove(e) {
        if(!this.myTurn) {
            let element = e.currentTarget;
            let moveOne = element.getAttribute('id');
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
                    this.myTurn = true;
                    information("Ruch Gracza 2");
                }
            };
        } else {
            e.srcElement.addEventListener('click',  this.playerOneMove.bind(this), { once: true });
        }
    };

    playerTwoMove(e) {
        console.log(e.srcElement);
        if(this.myTurn) {
            let element = e.currentTarget;
            let moveTwo = element.getAttribute('id');
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
                    this.myTurn = false;
                    information("Ruch Gracza 1");
                }
            };
        } else {
            e.srcElement.addEventListener('click',  this.playerTwoMove.bind(this), { once: true });
        }
    };

    isEndOfGame() {
        if (this.playerOneHitCounter === 23 || this.playerTwoHitCounter === 23) {
            this.playerOneBoard.showAllBoard('board');
            this.playerTwoBoard.showAllBoard('board2');
        }
        if (this.playerOneHitCounter === 23) {
            information("Wygrał Gracz 1");
        } else if (this.playerTwoHitCounter === 23) {
            information("Wygrał Gracz 2");
        }
    }

}

module.exports = twoPlayersGame;