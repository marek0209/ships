const Board = require('./board');
const validateInput = require('./input');
const shotField = require('./output');
const AutomaticOpponent = require('./automaticOpponent');

const input = document.querySelector('#move');
const gameBoardHTML = document.getElementById("board");
const aoBoardHTML = document.getElementById("board2");


class AIGame {        
    constructor() {
        //Board for Player to set ships and AO shoot
        this.playerBoard = new Board();
        this.playerBoard.createRandomBoard();
        //Board for Player to shoot
        this.gameBoard = new Board();
        this.gameBoard.createRandomBoard();
        this.playerHitCounter = 0;
        this.aoHitCounter = 0;
        this.ao = new AutomaticOpponent();
    }

    aiPlayerGame() {
    console.log("AO Player Game", this.playerBoard);
    input.addEventListener('change', this.aiLoop.bind(this));
    }

    aiLoop() {
        let value = validateInput(input, this.gameBoard);
        if (value) {
            let firedField = shotField(value.row, value.col);
            this.gameBoard.board[value.row][value.col].isHited = true;
            if (this.gameBoard.board[value.row][value.col].type === 'ship') {
                gameBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
                this.playerHitCounter++;
                this.isEndOfGame();    
            } else {
                gameBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");
                input.style.display = "none";
                this.aoMove();
            } 
        };
    };

    aoMove() {
        let value = this.ao.randomShot();
        console.log(value);
        if (value) {
            let firedField = shotField(value.row, value.col);
            this.playerBoard.board[value.row][value.col].isHited = true;
            if (this.playerBoard.board[value.row][value.col].type === 'ship') {
                aoBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
                this.aoHitCounter++;
                this.isEndOfGame();
                this.aoMove();   
            } else {
                aoBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");
                input.style.display = "block";
            } 
        };
    }

    isEndOfGame() {
        if (this.playerHitCounter === 23 || this.aoHitCounter === 23) {
            this.gameBoard.showAllBoard();
            this.playerBoard.showAllBoard();
        }
    }

}

module.exports = AIGame;