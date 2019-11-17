const OnePlayerGame = require('./onePlayerGame');
const TwoPlayersGame = require('./twoPlayersGame');
const AIPlayer = require('./aiGame');
const createNewBoard = require("./createBoard");
const clearBoard = require("./clearBoard");
const information = require("./information");

const start = document.getElementById("startpage");
const gameBoard = document.getElementById("board");
const gameBoard2 = document.getElementById("board2");
const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const aiPlayer = document.getElementById("aiPlayer");
const goBackBtn = document.getElementById("goBack");
const shipsBox = document.getElementById("ships");



window.addEventListener('load', (event) => {
    goBackBtn.style.display = "none";
    gameBoard.style.display = "none";
    gameBoard2.style.display = "none";
    shipsBox.style.display = "none";
});

goBackBtn.addEventListener('click', () => {
    goBackBtn.style.display = "none";
    gameBoard.style.display = "none";
    gameBoard2.style.display = "none";
    shipsBox.style.display = "none";
    start.style.display = "grid";
    clearBoard('board');
    clearBoard('board2');
    information("");
});

onePlayer.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    goBackBtn.style.display = "block";
    createNewBoard("board");
    information("Postrzelaj sobie!")
    const game = new OnePlayerGame();
    game.onePlayerGame();
});

twoPlayers.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    gameBoard2.style.display = "grid";
    goBackBtn.style.display = "block";
    createNewBoard("board");
    createNewBoard("board2");
    information("Zaczyna Gracz 1")
    const game = new TwoPlayersGame();
    game.twoPlayersGame();
});

aiPlayer.addEventListener('click', () => {
    start.style.display = "none";
    shipsBox.style.display = "flex";
    gameBoard.style.display = "grid";
    goBackBtn.style.display = "block";
    createNewBoard("board");
    information("Ustaw swoje statki");
    const game = new AIPlayer();
    game.aiPlayerGame();
});
