const OnePlayerGame = require('./onePlayerGame');
const TwoPlayersGame = require('./twoPlayersGame');
const AIPlayer = require('./aiGame');

window.addEventListener('load', (event) => {
    var gameBoard = document.getElementById("board");
    gameBoard.style.display = "none";
});

const start = document.getElementById("startpage");
const gameBoard = document.getElementById("board");
const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const aiPlayer = document.getElementById("aiPlayer");

onePlayer.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    const game = new OnePlayerGame();
    game.onePlayerGame();
});

twoPlayers.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    const game = new TwoPlayersGame();
    game.twoPlayersGame();
});

aiPlayer.addEventListener('click', () => {
    start.style.display = "none";
    gameBoard.style.display = "grid";
    const game = new AIPlayer();
    game.aiPlayerGame();
});
