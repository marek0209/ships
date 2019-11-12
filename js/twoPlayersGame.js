const Board = require('./board');
const validateInput = require('./input');
const shotField = require('./output');

const move1 = document.querySelector('#move1');
const move2 = document.querySelector('#move2');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const playerOneBoardHTML = document.getElementById("board");
const playerTwoBoardHTML = document.getElementById("board2");

class twoPlayersGame  {
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
    console.log("PlayerOne Board", this.playerOneBoard);
    console.log("Player Two Board", this.playerTwoBoard);
    move1.addEventListener('change', this.playerOneMove.bind(this));
    move2.addEventListener('change', this.playerTwoMove.bind(this));
    }

    playerOneMove() {
        let value = validateInput(move1, this.playerOneBoard);
        if (value) {
            let firedField = shotField(value.row, value.col);
            this.playerOneBoard.board[value.row][value.col].isHited = true;
            if (this.playerOneBoard.board[value.row][value.col].type === 'ship') {
                playerOneBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
                this.playerOneHitCounter++;
                this.isEndOfGame();    
            } else {
                playerOneBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");
                input1.style.display = "none";
                input2.style.display = "inline-block";
            } 
        };
    };

    playerTwoMove() {
        let value = validateInput(move2, this.playerTwoBoard);
        if (value) {
            let firedField = shotField(value.row, value.col);
            this.playerTwoBoard.board[value.row][value.col].isHited = true;
            if (this.playerTwoBoard.board[value.row][value.col].type === 'ship') {
                playerTwoBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");
                this.playerTwoHitCounter++;
                this.isEndOfGame();    
            } else {
                playerTwoBoardHTML.querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");
                input1.style.display = "block";
                input2.style.display = "none";
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