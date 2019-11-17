const Board = require('./board');
const aoHelper = require('./aoHelper');

class AutomaticOpponent {
    constructor() {
        this.shotArray = new Board();
        this.shipsToShot = {
            masts4: 1,
            masts3: 2,
            masts2: 4,
            masts1: 5,
        },
        this.lastHit = false;
        this.lastCoordinants = false;
        this.aoHelper;
        this.permission = true;
        this.shotCounter = 0;
        this.direction = 0;
    }

    randomShot() {
        while (true) {
            let row = Math.floor(Math.random() * 10);
            let col = Math.floor(Math.random() * 10);
            if (this.randomShotCondition(row, col)) {
                this.lastCoordinants = {row, col};
                return this.lastCoordinants;
            }
        }
    }

    randomShotCondition(row, col) {
        if (this.checkUp(row, col) && this.checkDown(row, col) && this.checkLeft(row, col) && this.checkRight(row, col)) {
            return true;
        }
        return false; 
    }

    checkThis(row, col) {
        if (this.shotArray.board[row][col]  === undefined) {
            return true;
        }
        return false;
    }

    checkUp(row, col) {
        if (row > 0 && (this.shotArray.board[row - 1][col]  === undefined || this.shotArray.board[row - 1][col] === 'mishit')) {
            return true;
        } else if (row === 0) {
            return true;
        } else {
            return false;
        }
    }

    checkDown(row, col) {
        if (row < 9 && (this.shotArray.board[row + 1][col]  === undefined || this.shotArray.board[row + 1][col] === 'mishit')) {
            return true;
        } else if (row === 9) {
            return true;
        } else {
            return false;
        }
    }

    checkUp(row, col) {
        if (row > 0 && (this.shotArray.board[row - 1][col]  === undefined || this.shotArray.board[row - 1][col] === 'mishit')) {
            return true;
        } else if (row === 0) {
            return true;
        } else {
            return false;
        }
    }

    checkLeft(row, col) {
        if (col > 0 && (this.shotArray.board[row][col - 1]  === undefined || this.shotArray.board[row][col - 1] === 'mishit')) {
            return true;
        } else if (col === 0) {
            return true;
        } else {
            return false;
        }
    }

    checkRight(row, col) {
        if (col < 9 && (this.shotArray.board[row][col + 1]  === undefined || this.shotArray.board[row][col + 1] === 'mishit')) {
            return true;
        } else if (col === 9) {
            return true;
        } else {
            return false;
        }
    }

    markShot(row, col, type) {
        this.shotArray.board[row][col] = type;
    }

    aimShot() {
        let row;
        let col;
        if (this.lastCoordinants.row != 0 && this.shotArray.board[this.lastCoordinants.row - 1][this.lastCoordinants.col] === undefined) {
            row = this.lastCoordinants.row - 1;
            col = this.lastCoordinants.col;
        } else if (this.lastCoordinants.col != 0 && this.shotArray.board[this.lastCoordinants.row][this.lastCoordinants.col - 1] === undefined) {
            row = this.lastCoordinants.row;
            col = this.lastCoordinants.col - 1;
        } else if (this.lastCoordinants.row != 9 && this.shotArray.board[this.lastCoordinants.row + 1][this.lastCoordinants.col] === undefined) {
            row = this.lastCoordinants.row + 1;
            col = this.lastCoordinants.col
        } else if (this.lastCoordinants.col != 9 && this.shotArray.board[this.lastCoordinants.row][this.lastCoordinants.col + 1] === undefined) {
            row = this.lastCoordinants.row;
            col = this.lastCoordinants.col + 1;
        }
        this.markShot(row, col);
        return {row, col}
    } 

    fire() {
        return this.randomShot();
        /*if (!this.lastHit) {
            return this.randomShot(); 
        } else {
            let value = this.aimShot(); 
            console.log(value);
            return value;
        }
        */
    }

    isHited() {
        this.markShot(this.lastCoordinants.row, this.lastCoordinants.col, 'ship');
        if (!this.lastHit) {
            this.lastHit = true;
            this.permission = false;
        } else if (this.lastHit) {

        }
    } 

    isNotHited() {
        this.markShot(this.lastCoordinants.row, this.lastCoordinants.col, 'mishit');
        if (this.permision) {
            this.lastHit = false;
        }
    }


}

module.exports = AutomaticOpponent;