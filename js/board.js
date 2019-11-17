const Field = require('./field');
const shotField = require('./output');

class Board {

    constructor() {
        this.board = new Array(10);
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(10);
        }
    };
   
    createRandomBoard() {
        this.setShip(4);
        this.setShip(3);
        this.setShip(3);
        this.setShip(2);
        this.setShip(2);
        this.setShip(2);
        this.setShip(2);
        this.setShip(1);
        this.setShip(1);
        this.setShip(1);
        this.setShip(1);
        this.setShip(1);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] == undefined) {
                    this.board[i][j] = new Field('mishit');
                }
            }
        }
    }

    randomStart(rowStart, rowEnd, colStart, colEnd) {
        const row = Math.floor(Math.random() * rowEnd - rowStart);    
        const col = Math.floor(Math.random() * colEnd - colStart);
        return {
            row,
            col,
        }
    }
    
    checkIfSuitsRows(init, masts) {
        if (init.row >= 1) { if (typeof this.board[init.row-1][init.col] !== 'undefined' && typeof this.board[init.row-1][init.col] === 'ship') { return false; }; }
        if (init.row + masts <= 9) { if (typeof this.board[init.row+masts][init.col] !== 'undefined' && typeof this.board[init.row+masts][init.col] === 'ship') { return false; }; }
        for (let i = init.row; i < init.row + masts; i++) {
            if ( typeof this.board[i][init.col] !== 'undefined') {
                return false;
            }
        }
        return true;
    }
    
    checkIfSuitsCols(init, masts) {
        if (init.col >= 1) { if (typeof this.board[init.row][init.col-1] !== 'undefined' && typeof this.board[init.row][init.col-1] === 'ship') { return false; }; }
        if (init.col + masts <= 9) { if (typeof this.board[init.row][init.col+masts] !== 'undefined' && typeof this.board[init.row][init.col+masts] === 'ship') { return false; }; }
        for (let i = init.col; i < init.col + masts; i++) {
            if ( typeof this.board[init.row][i] !== 'undefined') {
                return false;
            }
        }
        return true;
    }
    
    setShip(masts) {
        const direction = Math.floor(Math.random() * 2);
        const range = {
            rowStart: 0,
            rowEnd: 10,
            colStart: 0,
            colEnd: 10,
        };
            if (direction === 0) {
                range.rowEnd = range.rowEnd - masts + 1;
                do { 
                    var init = this.randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);
                } while (!this.checkIfSuitsRows(init, masts));
    
                if (init.row >= 1) { this.board[init.row-1][init.col] = new Field('mishit'); }
                if (init.row + masts <= 9) { this.board[init.row+masts][init.col] = new Field('mishit'); }    
                for (let i = init.row; i < init.row + masts; i++) {
                    this.board[i][init.col] = new Field('ship');
                    if (init.col-1 >= 0) { this.board[i][init.col-1] = new Field('mishit') };  
                    if (init.col+1 <= 9) { this.board[i][init.col+1] = new Field('mishit') };               
                }
            } else if (direction === 1) {
                range.colEnd = range.colEnd - masts + 1;
                
                do { 
                    var init = this.randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);
                } while (!this.checkIfSuitsCols(init, masts));
    
                if (init.col >= 1) { this.board[init.row][init.col-1] = new Field('mishit'); }
                if (init.col + masts <= 9) { this.board[init.row][init.col+masts] = new Field('mishit'); }     
                for (let i = init.col; i < init.col + masts; i++) {
                    this.board[init.row][i] = new Field('ship');
                    if (init.row-1 >= 0) { this.board[init.row-1][i] = new Field('mishit') };  
                    if (init.row+1 <= 9) { this.board[init.row+1][i] = new Field('mishit') };    
                }
            }
    }

    showAllBoard(boardNbr) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                let firedField = shotField(i, j);
                if (this.board[i][j].type === 'ship') {
                    this.board[i][j].isHited = true;
                    document.querySelector(`#${boardNbr}`).querySelector(firedField).setAttribute("src", "./img/ships/ship.jpg");    
                } else if (this.board[i][j].type === 'mishit') {
                    document.querySelector(`#${boardNbr}`).querySelector(firedField).setAttribute("src", "./img/ships/pudlo.jpg");
                    this.board[i][j].isHited = true;
                } 
            }
        }
    }

}

module.exports = Board;