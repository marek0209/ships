const OnePlayerGame = require('./onePlayerGame');
const TwoPlayersGame = require('./twoPlayersGame');
const AIPlayer = require('./aiGame');

const start = document.getElementById("startpage");
const gameBoard = document.getElementById("board");
const gameBoard2 = document.getElementById("board2");
const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const aiPlayer = document.getElementById("aiPlayer");
const inputMove = document.querySelector('#input-move');
const input2 = document.querySelector('#input2');

window.addEventListener('load', (event) => {
    var gameBoard = document.getElementById("board");
    gameBoard.style.display = "none";
    gameBoard2.style.display = "none";
    inputMove.style.display = "none";
});

onePlayer.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    inputMove.style.display = "inline-block";
    input2.style.display = "none";
    const game = new OnePlayerGame();
    game.onePlayerGame();
});

twoPlayers.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    gameBoard2.style.display = "grid";
    inputMove.style.display = "inline-block";
    input2.style.display = "none";
    const game = new TwoPlayersGame();
    game.twoPlayersGame();
});

aiPlayer.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    gameBoard2.style.display = "grid";
    input.style.display = "inline-block";
    input2.style.display = "none";
    const game = new AIPlayer();
    game.aiPlayerGame();
});
