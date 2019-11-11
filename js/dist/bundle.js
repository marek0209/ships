/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./aiGame.js":
/*!*******************!*\
  !*** ./aiGame.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AIGame {        \r\n    constructor() {         \r\n    };\r\n\r\n    aiPlayerGame() {\r\n    };\r\n\r\n}\r\n\r\nmodule.exports = AIGame;\n\n//# sourceURL=webpack:///./aiGame.js?");

/***/ }),

/***/ "./board.js":
/*!******************!*\
  !*** ./board.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Field = __webpack_require__(/*! ./field */ \"./field.js\");\r\nconst shotField = __webpack_require__(/*! ./output */ \"./output.js\");\r\n\r\nclass Board {\r\n\r\n    constructor() {\r\n        this.board = new Array(10);\r\n        for (let i = 0; i < this.board.length; i++) {\r\n            this.board[i] = new Array(10);\r\n        }\r\n    };\r\n   \r\n    createRandomBoard() {\r\n        this.setShip(4);\r\n    /*    board = setShip(3, board);\r\n        board = setShip(3, board);\r\n        board = setShip(2, board);\r\n        board = setShip(2, board);\r\n        board = setShip(2, board);\r\n        board = setShip(2, board);\r\n        board = setShip(1, board);\r\n        board = setShip(1, board);\r\n        board = setShip(1, board);\r\n        board = setShip(1, board);\r\n        board = setShip(1, board); */\r\n        for (let i = 0; i < 10; i++) {\r\n            for (let j = 0; j < 10; j++) {\r\n                if (this.board[i][j] == undefined) {\r\n                    this.board[i][j] = new Field('mishit');\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    randomStart(rowStart, rowEnd, colStart, colEnd) {\r\n        const row = Math.floor(Math.random() * rowEnd - rowStart);    \r\n        const col = Math.floor(Math.random() * colEnd - colStart);\r\n        return {\r\n            row,\r\n            col,\r\n        }\r\n    }\r\n    \r\n    checkIfSuitsRows(init, masts) {\r\n        if (init.row >= 1) { if (typeof this.board[init.row-1][init.col] !== 'undefined' && typeof this.board[init.row-1][init.col] === 'ship') { return false; }; }\r\n        if (init.row + masts <= 9) { if (typeof this.board[init.row+masts][init.col] !== 'undefined' && typeof this.board[init.row+masts][init.col] === 'ship') { return false; }; }\r\n        for (let i = init.row; i < init.row + masts; i++) {\r\n            if ( typeof this.board[i][init.col] !== 'undefined') {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    \r\n    checkIfSuitsCols(init, masts) {\r\n        if (init.col >= 1) { if (typeof this.board[init.row][init.col-1] !== 'undefined' && typeof this.board[init.row][init.col-1] === 'ship') { return false; }; }\r\n        if (init.col + masts <= 9) { if (typeof this.board[init.row][init.col+masts] !== 'undefined' && typeof this.board[init.row][init.col+masts] === 'ship') { return false; }; }\r\n        for (let i = init.col; i < init.col + masts; i++) {\r\n            if ( typeof this.board[init.row][i] !== 'undefined') {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    \r\n    setShip(masts) {\r\n        const direction = Math.floor(Math.random() * 2);\r\n        const range = {\r\n            rowStart: 0,\r\n            rowEnd: 10,\r\n            colStart: 0,\r\n            colEnd: 10,\r\n        };\r\n            if (direction === 0) {\r\n                range.rowEnd = range.rowEnd - masts + 1;\r\n                do { \r\n                    var init = this.randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);\r\n                } while (!this.checkIfSuitsRows(init, masts));\r\n    \r\n                if (init.row >= 1) { this.board[init.row-1][init.col] = new Field('mishit'); }\r\n                if (init.row + masts <= 9) { this.board[init.row+masts][init.col] = new Field('mishit'); }    \r\n                for (let i = init.row; i < init.row + masts; i++) {\r\n                    this.board[i][init.col] = new Field('ship');\r\n                    if (init.col-1 >= 0) { this.board[i][init.col-1] = new Field('mishit') };  \r\n                    if (init.col+1 <= 9) { this.board[i][init.col+1] = new Field('mishit') };               \r\n                }\r\n            } else if (direction === 1) {\r\n                range.colEnd = range.colEnd - masts + 1;\r\n                \r\n                do { \r\n                    var init = this.randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);\r\n                } while (!this.checkIfSuitsCols(init, masts));\r\n    \r\n                if (init.col >= 1) { this.board[init.row][init.col-1] = new Field('mishit'); }\r\n                if (init.col + masts <= 9) { this.board[init.row][init.col+masts] = new Field('mishit'); }     \r\n                for (let i = init.col; i < init.col + masts; i++) {\r\n                    this.board[init.row][i] = new Field('ship');\r\n                    if (init.row-1 >= 0) { this.board[init.row-1][i] = new Field('mishit') };  \r\n                    if (init.row+1 <= 9) { this.board[init.row+1][i] = new Field('mishit') };    \r\n                }\r\n            }\r\n    }\r\n\r\n    showAllBoard() {\r\n        for (let i = 0; i < this.board.length; i++) {\r\n            for (let j = 0; j < this.board[i].length; j++) {\r\n                let firedField = shotField(i, j);\r\n                if (this.board[i][j].type === 'ship') {\r\n                    this.board[i][j].isHited = true;\r\n                    document.querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");    \r\n                } else if (this.board[i][j].type === 'mishit') {\r\n                    document.querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n                    this.board[i][j].isHited = true;\r\n                } \r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./board.js?");

/***/ }),

/***/ "./field.js":
/*!******************!*\
  !*** ./field.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Field {\r\n    constructor(type) {\r\n        this.type = type;\r\n        this.isHited = false;\r\n    }\r\n}\r\n\r\nmodule.exports = Field;\n\n//# sourceURL=webpack:///./field.js?");

/***/ }),

/***/ "./input.js":
/*!******************!*\
  !*** ./input.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function inputValidate(input, gameBoard) {\r\n    input.previousElementSibling.style.display = \"none\";\r\n    const value = validateInput(input.value);\r\n    if (value === false) {\r\n        input.nextElementSibling.style.display = \"block\";\r\n        $('#move').val('');   \r\n    } else {\r\n        input.nextElementSibling.style.display = \"none\";\r\n        if (gameBoard.board[value.row][value.col].isHited) {\r\n            input.previousElementSibling.style.display = \"block\";\r\n            $('#move').val('');\r\n        } else {\r\n            $('#move').val('');\r\n            return value;\r\n        }\r\n    }\r\n    return false;    \r\n}\r\n\r\nfunction validateInput(inputData) {\r\n    let col;\r\n    let row;\r\n    if (inputData.length > 2) {\r\n        return false;\r\n    }\r\n    if (parseInt(inputData[1]) <= 9) {\r\n        switch (inputData[0].toUpperCase()) {\r\n            case 'A':   col = parseInt(inputData[1]);\r\n                        row = 0;\r\n                        break;\r\n            case 'B':   col = parseInt(inputData[1]);\r\n                        row = 1;\r\n                        break;\r\n            case 'C':   col = parseInt(inputData[1]);\r\n                        row = 2;\r\n                        break;\r\n            case 'D':   col = parseInt(inputData[1]);\r\n                        row = 3;\r\n                        break;\r\n            case 'E':   col = parseInt(inputData[1]);\r\n                        row = 4;\r\n                        break;\r\n            case 'F':   col = parseInt(inputData[1]);\r\n                        row = 5;\r\n                        break;\r\n            case 'G':   col = parseInt(inputData[1]);\r\n                        row = 6;\r\n                        break;\r\n            case 'H':   col = parseInt(inputData[1]);\r\n                        row = 7;\r\n                        break;\r\n            case 'I':   col = parseInt(inputData[1]);\r\n                        row = 8;\r\n                        break;\r\n            case 'J':   col = parseInt(inputData[1]);\r\n                        row = 9\r\n                        break; \r\n            default: return false;     \r\n            } \r\n    } else {\r\n        return false;\r\n    }\r\n    return {col, row}\r\n}  \r\n\r\nmodule.exports = inputValidate;\n\n//# sourceURL=webpack:///./input.js?");

/***/ }),

/***/ "./onePlayerGame.js":
/*!**************************!*\
  !*** ./onePlayerGame.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./board.js\");\r\nconst validateInput = __webpack_require__(/*! ./input */ \"./input.js\");\r\nconst shotField = __webpack_require__(/*! ./output */ \"./output.js\");\r\n\r\nconst input = document.querySelector('#move');\r\n\r\nclass OnePlayerGame {\r\n    constructor() {\r\n        this.gameBoard = new Board();\r\n        this.gameBoard.createRandomBoard();\r\n        this.gameBoardPlayerTwo = new Board();\r\n        this.hitCounter = 0;\r\n        this.moveCounter = 0;\r\n    };\r\n\r\n    onePlayerGame() {\r\n        console.log(\"one Player Game\", this.gameBoard);\r\n        input.addEventListener('change', this.onePlayerLoop.bind(this));\r\n    };\r\n\r\n    onePlayerLoop() {\r\n    let value = validateInput(input, this.gameBoard);\r\n        if (value) {\r\n            let firedField = shotField(value.row, value.col);\r\n            if (this.gameBoard.board[value.row][value.col].type === 'ship') {\r\n                document.querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");\r\n                this.hitCounter++;\r\n            this.isEndOfGame();    \r\n            } else {\r\n                document.querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n            } \r\n            this.gameBoard.board[value.row][value.col].isHited = true;\r\n        };\r\n    };\r\n\r\n    isEndOfGame() {\r\n        if (this.hitCounter === 4) {\r\n            this.gameBoard.showAllBoard();\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = OnePlayerGame;\n\n//# sourceURL=webpack:///./onePlayerGame.js?");

/***/ }),

/***/ "./output.js":
/*!*******************!*\
  !*** ./output.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function shotField(row, column) {\r\n    switch (row) {\r\n        case 0:  return `#A${column}-img`;\r\n        case 1:  return `#B${column}-img`;\r\n        case 2:  return `#C${column}-img`;\r\n        case 3:  return `#D${column}-img`;\r\n        case 4:  return `#E${column}-img`;\r\n        case 5:  return `#F${column}-img`;\r\n        case 6:  return `#G${column}-img`;\r\n        case 7:  return `#H${column}-img`;\r\n        case 8:  return `#I${column}-img`;\r\n        case 9:  return `#J${column}-img`;\r\n        default: return false;\r\n    }     \r\n}\r\n\r\nmodule.exports = shotField;\n\n//# sourceURL=webpack:///./output.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const OnePlayerGame = __webpack_require__(/*! ./onePlayerGame */ \"./onePlayerGame.js\");\r\nconst TwoPlayersGame = __webpack_require__(/*! ./twoPlayersGame */ \"./twoPlayersGame.js\");\r\nconst AIPlayer = __webpack_require__(/*! ./aiGame */ \"./aiGame.js\");\r\n\r\nwindow.addEventListener('load', (event) => {\r\n    var gameBoard = document.getElementById(\"board\");\r\n    gameBoard.style.display = \"none\";\r\n});\r\n\r\nconst start = document.getElementById(\"startpage\");\r\nconst gameBoard = document.getElementById(\"board\");\r\nconst onePlayer = document.getElementById(\"onePlayer\");\r\nconst twoPlayers = document.getElementById(\"twoPlayers\");\r\nconst aiPlayer = document.getElementById(\"aiPlayer\");\r\n\r\nonePlayer.addEventListener('click', () => {\r\n    start.style.display = \"none\";\r\n    gameBoard.style.display = \"grid\";\r\n    const game = new OnePlayerGame();\r\n    game.onePlayerGame();\r\n});\r\n\r\ntwoPlayers.addEventListener('click', () => {\r\n    start.style.display = \"none\";\r\n    gameBoard.style.display = \"grid\";\r\n    const game = new TwoPlayersGame();\r\n    game.twoPlayersGame();\r\n});\r\n\r\naiPlayer.addEventListener('click', () => {\r\n    start.style.display = \"none\";\r\n    gameBoard.style.display = \"grid\";\r\n    const game = new AIPlayer();\r\n    game.aiPlayerGame();\r\n});\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ "./twoPlayersGame.js":
/*!***************************!*\
  !*** ./twoPlayersGame.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class twoPlayersGame  {\r\n        constructor() {\r\n            \r\n        }\r\n\r\n    twoPlayersGame() {\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = twoPlayersGame;\n\n//# sourceURL=webpack:///./twoPlayersGame.js?");

/***/ })

/******/ });