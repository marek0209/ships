const Board = require('./board');

class AutomaticOpponent {
    constructor() {
        this.board = new Board();
        this.shipsToShot = {
            masts4: 1,
            masts3: 2,
            masts2: 4,
            masts1: 5,
        },
        this.lastHit = false;
    }

    randomShot() {
        let row = Math.floor(Math.random() * 10);
        console.log("row", row);
        let col = Math.floor(Math.random() * 10);
        console.log("col", col);
        return {col, row};
    }
}

module.exports = AutomaticOpponent;