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
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./board.js\");\r\nconst validateInput = __webpack_require__(/*! ./input */ \"./input.js\");\r\nconst shotField = __webpack_require__(/*! ./output */ \"./output.js\");\r\nconst AutomaticOpponent = __webpack_require__(/*! ./automaticOpponent */ \"./automaticOpponent.js\");\r\n\r\n// const input = document.querySelector('#move');\r\nconst gameBoardHTML = document.getElementById(\"board\");\r\nconst aoBoardHTML = document.getElementById(\"board2\");\r\n\r\nconst fieldClicked = document.getElementById(\"board\").childNodes;\r\n\r\n\r\nclass AIGame {        \r\n    constructor() {\r\n        //Board for Player to set ships and AO shoot\r\n        this.playerBoard = new Board();\r\n        this.playerBoard.createRandomBoard();\r\n        //Board for Player to shoot\r\n        this.gameBoard = new Board();\r\n        this.gameBoard.createRandomBoard();\r\n        this.playerHitCounter = 0;\r\n        this.aoHitCounter = 0;\r\n        this.ao = new AutomaticOpponent();\r\n    }\r\n\r\n    aiPlayerGame() {\r\n    const test = (e) =>{\r\n        let element = e.currentTarget;\r\n        let id = element.getAttribute('id');\r\n            if (id[0] != null) {\r\n                this.aiLoop(id);\r\n            }\r\n        }\r\n    Array.from(fieldClicked).forEach(function (element) {\r\n        element.addEventListener('click',  test, {once: true});\r\n    });\r\n    }\r\n\r\n    aiLoop(id) {\r\n        let coordinate = validateInput(id);\r\n        let firedField = shotField(coordinate.row, coordinate.col);        \r\n            this.gameBoard.board[coordinate.row][coordinate.col].isHited = true;\r\n            if (this.gameBoard.board[coordinate.row][coordinate.col].type === 'ship') {\r\n                gameBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");\r\n                this.playerHitCounter++;\r\n                this.isEndOfGame();    \r\n            } else {\r\n                gameBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n                this.aoMove();\r\n            } \r\n        \r\n    };\r\n\r\n    aoMove() {\r\n        let value = this.ao.fire();\r\n        console.log(value);\r\n        if (value) {\r\n            let firedField = shotField(value.row, value.col);\r\n            this.playerBoard.board[value.row][value.col].isHited = true;\r\n            if (this.playerBoard.board[value.row][value.col].type === 'ship') {\r\n                aoBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");\r\n                this.aoHitCounter++;\r\n                this.isEndOfGame();\r\n                this.ao.isHited();\r\n                this.aoMove();   \r\n            } else {\r\n                aoBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n                this.ao.isNotHited();\r\n            } \r\n        };\r\n    }\r\n\r\n    isEndOfGame() {\r\n        if (this.playerHitCounter === 23 || this.aoHitCounter === 23) {\r\n            this.gameBoard.showAllBoard();\r\n            this.playerBoard.showAllBoard();\r\n        }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = AIGame;\n\n//# sourceURL=webpack:///./aiGame.js?");

/***/ }),

/***/ "./aoHelper.js":
/*!*********************!*\
  !*** ./aoHelper.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./aoHelper.js?");

/***/ }),

/***/ "./automaticOpponent.js":
/*!******************************!*\
  !*** ./automaticOpponent.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./board.js\");\r\nconst aoHelper = __webpack_require__(/*! ./aoHelper */ \"./aoHelper.js\");\r\n\r\nclass AutomaticOpponent {\r\n    constructor() {\r\n        this.shotArray = new Board();\r\n        this.shipsToShot = {\r\n            masts4: 1,\r\n            masts3: 2,\r\n            masts2: 4,\r\n            masts1: 5,\r\n        },\r\n        this.lastHit = false;\r\n        this.lastCoordinants = false;\r\n        this.aoHelper;\r\n        this.permission = true;\r\n        this.shotCounter = 0;\r\n        this.direction = 0;\r\n    }\r\n\r\n    randomShot() {\r\n        while (true) {\r\n            let row = Math.floor(Math.random() * 10);\r\n            let col = Math.floor(Math.random() * 10);\r\n            if (this.randomShotCondition(row, col)) {\r\n                this.lastCoordinants = {row, col};\r\n                return this.lastCoordinants;\r\n            }\r\n        }\r\n    }\r\n\r\n    randomShotCondition(row, col) {\r\n        if (this.checkUp(row, col) && this.checkDown(row, col) && this.checkLeft(row, col) && this.checkRight(row, col)) {\r\n            return true;\r\n        }\r\n        return false; \r\n    }\r\n\r\n    checkThis(row, col) {\r\n        if (this.shotArray.board[row][col]  === undefined) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    checkUp(row, col) {\r\n        if (row > 0 && (this.shotArray.board[row - 1][col]  === undefined || this.shotArray.board[row - 1][col] === 'mishit')) {\r\n            return true;\r\n        } else if (row === 0) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    checkDown(row, col) {\r\n        if (row < 9 && (this.shotArray.board[row + 1][col]  === undefined || this.shotArray.board[row + 1][col] === 'mishit')) {\r\n            return true;\r\n        } else if (row === 9) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    checkUp(row, col) {\r\n        if (row > 0 && (this.shotArray.board[row - 1][col]  === undefined || this.shotArray.board[row - 1][col] === 'mishit')) {\r\n            return true;\r\n        } else if (row === 0) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    checkLeft(row, col) {\r\n        if (col > 0 && (this.shotArray.board[row][col - 1]  === undefined || this.shotArray.board[row][col - 1] === 'mishit')) {\r\n            return true;\r\n        } else if (col === 0) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    checkRight(row, col) {\r\n        if (col < 9 && (this.shotArray.board[row][col + 1]  === undefined || this.shotArray.board[row][col + 1] === 'mishit')) {\r\n            return true;\r\n        } else if (col === 9) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    markShot(row, col, type) {\r\n        this.shotArray.board[row][col] = type;\r\n    }\r\n\r\n    aimShot() {\r\n        let row;\r\n        let col;\r\n        if (this.lastCoordinants.row != 0 && this.shotArray.board[this.lastCoordinants.row - 1][this.lastCoordinants.col] === undefined) {\r\n            row = this.lastCoordinants.row - 1;\r\n            col = this.lastCoordinants.col;\r\n        } else if (this.lastCoordinants.col != 0 && this.shotArray.board[this.lastCoordinants.row][this.lastCoordinants.col - 1] === undefined) {\r\n            row = this.lastCoordinants.row;\r\n            col = this.lastCoordinants.col - 1;\r\n        } else if (this.lastCoordinants.row != 9 && this.shotArray.board[this.lastCoordinants.row + 1][this.lastCoordinants.col] === undefined) {\r\n            row = this.lastCoordinants.row + 1;\r\n            col = this.lastCoordinants.col\r\n        } else if (this.lastCoordinants.col != 9 && this.shotArray.board[this.lastCoordinants.row][this.lastCoordinants.col + 1] === undefined) {\r\n            row = this.lastCoordinants.row;\r\n            col = this.lastCoordinants.col + 1;\r\n        }\r\n        this.markShot(row, col);\r\n        return {row, col}\r\n    } \r\n\r\n    fire() {\r\n        return this.randomShot();\r\n        /*if (!this.lastHit) {\r\n            return this.randomShot(); \r\n        } else {\r\n            let value = this.aimShot(); \r\n            console.log(value);\r\n            return value;\r\n        }\r\n        */\r\n    }\r\n\r\n    isHited() {\r\n        this.markShot(this.lastCoordinants.row, this.lastCoordinants.col, 'ship');\r\n        if (!this.lastHit) {\r\n            this.lastHit = true;\r\n            this.permission = false;\r\n        } else if (this.lastHit) {\r\n\r\n        }\r\n    } \r\n\r\n    isNotHited() {\r\n        this.markShot(this.lastCoordinants.row, this.lastCoordinants.col, 'mishit');\r\n        if (this.permision) {\r\n            this.lastHit = false;\r\n        }\r\n    }\r\n\r\n\r\n}\r\n\r\nmodule.exports = AutomaticOpponent;\n\n//# sourceURL=webpack:///./automaticOpponent.js?");

/***/ }),

/***/ "./board.js":
/*!******************!*\
  !*** ./board.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Field = __webpack_require__(/*! ./field */ \"./field.js\");\r\nconst shotField = __webpack_require__(/*! ./output */ \"./output.js\");\r\n\r\nclass Board {\r\n\r\n    constructor() {\r\n        this.board = new Array(10);\r\n        for (let i = 0; i < this.board.length; i++) {\r\n            this.board[i] = new Array(10);\r\n        }\r\n    };\r\n   \r\n    createRandomBoard() {\r\n        this.setShip(4);\r\n        this.setShip(3);\r\n        this.setShip(3);\r\n        this.setShip(2);\r\n        this.setShip(2);\r\n        this.setShip(2);\r\n        this.setShip(2);\r\n        this.setShip(1);\r\n        this.setShip(1);\r\n        this.setShip(1);\r\n        this.setShip(1);\r\n        this.setShip(1);\r\n        for (let i = 0; i < 10; i++) {\r\n            for (let j = 0; j < 10; j++) {\r\n                if (this.board[i][j] == undefined) {\r\n                    this.board[i][j] = new Field('mishit');\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    randomStart(rowStart, rowEnd, colStart, colEnd) {\r\n        const row = Math.floor(Math.random() * rowEnd - rowStart);    \r\n        const col = Math.floor(Math.random() * colEnd - colStart);\r\n        return {\r\n            row,\r\n            col,\r\n        }\r\n    }\r\n    \r\n    checkIfSuitsRows(init, masts) {\r\n        if (init.row >= 1) { if (typeof this.board[init.row-1][init.col] !== 'undefined' && typeof this.board[init.row-1][init.col] === 'ship') { return false; }; }\r\n        if (init.row + masts <= 9) { if (typeof this.board[init.row+masts][init.col] !== 'undefined' && typeof this.board[init.row+masts][init.col] === 'ship') { return false; }; }\r\n        for (let i = init.row; i < init.row + masts; i++) {\r\n            if ( typeof this.board[i][init.col] !== 'undefined') {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    \r\n    checkIfSuitsCols(init, masts) {\r\n        if (init.col >= 1) { if (typeof this.board[init.row][init.col-1] !== 'undefined' && typeof this.board[init.row][init.col-1] === 'ship') { return false; }; }\r\n        if (init.col + masts <= 9) { if (typeof this.board[init.row][init.col+masts] !== 'undefined' && typeof this.board[init.row][init.col+masts] === 'ship') { return false; }; }\r\n        for (let i = init.col; i < init.col + masts; i++) {\r\n            if ( typeof this.board[init.row][i] !== 'undefined') {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    \r\n    setShip(masts) {\r\n        const direction = Math.floor(Math.random() * 2);\r\n        const range = {\r\n            rowStart: 0,\r\n            rowEnd: 10,\r\n            colStart: 0,\r\n            colEnd: 10,\r\n        };\r\n            if (direction === 0) {\r\n                range.rowEnd = range.rowEnd - masts + 1;\r\n                do { \r\n                    var init = this.randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);\r\n                } while (!this.checkIfSuitsRows(init, masts));\r\n    \r\n                if (init.row >= 1) { this.board[init.row-1][init.col] = new Field('mishit'); }\r\n                if (init.row + masts <= 9) { this.board[init.row+masts][init.col] = new Field('mishit'); }    \r\n                for (let i = init.row; i < init.row + masts; i++) {\r\n                    this.board[i][init.col] = new Field('ship');\r\n                    if (init.col-1 >= 0) { this.board[i][init.col-1] = new Field('mishit') };  \r\n                    if (init.col+1 <= 9) { this.board[i][init.col+1] = new Field('mishit') };               \r\n                }\r\n            } else if (direction === 1) {\r\n                range.colEnd = range.colEnd - masts + 1;\r\n                \r\n                do { \r\n                    var init = this.randomStart(range.rowStart, range.rowEnd, range.colStart, range.colEnd);\r\n                } while (!this.checkIfSuitsCols(init, masts));\r\n    \r\n                if (init.col >= 1) { this.board[init.row][init.col-1] = new Field('mishit'); }\r\n                if (init.col + masts <= 9) { this.board[init.row][init.col+masts] = new Field('mishit'); }     \r\n                for (let i = init.col; i < init.col + masts; i++) {\r\n                    this.board[init.row][i] = new Field('ship');\r\n                    if (init.row-1 >= 0) { this.board[init.row-1][i] = new Field('mishit') };  \r\n                    if (init.row+1 <= 9) { this.board[init.row+1][i] = new Field('mishit') };    \r\n                }\r\n            }\r\n    }\r\n\r\n    showAllBoard(boardNbr) {\r\n        for (let i = 0; i < this.board.length; i++) {\r\n            for (let j = 0; j < this.board[i].length; j++) {\r\n                let firedField = shotField(i, j);\r\n                if (this.board[i][j].type === 'ship') {\r\n                    this.board[i][j].isHited = true;\r\n                    document.querySelector(`#${boardNbr}`).querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");    \r\n                } else if (this.board[i][j].type === 'mishit') {\r\n                    document.querySelector(`#${boardNbr}`).querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n                    this.board[i][j].isHited = true;\r\n                } \r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./board.js?");

/***/ }),

/***/ "./clearBoard.js":
/*!***********************!*\
  !*** ./clearBoard.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function clearBoard(parentId){\r\n    let elements = document.getElementById(`${parentId}`);\r\n    while(elements.children.length > 1){\r\n        elements.removeChild(elements.children[1]);\r\n    }\r\n}\r\n\r\nmodule.exports = clearBoard;\n\n//# sourceURL=webpack:///./clearBoard.js?");

/***/ }),

/***/ "./createBoard.js":
/*!************************!*\
  !*** ./createBoard.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const letters = ['A','B','C','D','E','F','G','H','I','J'];\r\n\r\nfunction createNewBoard(parentElementId) {\r\nfor (let i = 0; i < 10; i++) {\r\n        for (let j = 0; j < 10; j++) {\r\n          const field = document.createElement('div');\r\n          field.id = `${letters[i]}${j}`;\r\n          field.className = 'board-field';\r\n          const imgInside = document.createElement('img');\r\n          imgInside.id = `${letters[i]}${j}-img`;\r\n          field.appendChild(imgInside);\r\n          document.querySelector(`#${parentElementId}`).appendChild(field);\r\n        }\r\n    }\r\n};\r\n\r\nmodule.exports = createNewBoard;\n\n//# sourceURL=webpack:///./createBoard.js?");

/***/ }),

/***/ "./field.js":
/*!******************!*\
  !*** ./field.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Field {\r\n    constructor(type) {\r\n        this.type = type;\r\n        this.isHited = false;\r\n    }\r\n}\r\n\r\nmodule.exports = Field;\n\n//# sourceURL=webpack:///./field.js?");

/***/ }),

/***/ "./information.js":
/*!************************!*\
  !*** ./information.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function information(txtInfo) {\r\n    const informationField = document.getElementById(\"info\");\r\n    console.log(informationField);\r\n    informationField.innerHTML = `<h2>${txtInfo}</h2>`;\r\n}\r\n\r\nmodule.exports = information;\n\n//# sourceURL=webpack:///./information.js?");

/***/ }),

/***/ "./input.js":
/*!******************!*\
  !*** ./input.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function validateInput(inputData) {\r\n    let col;\r\n    let row;\r\n    if (inputData.length > 2) {\r\n        return false;\r\n    }\r\n    if (parseInt(inputData[1]) <= 9) {\r\n        switch (inputData[0].toUpperCase()) {\r\n            case 'A':   col = parseInt(inputData[1]);\r\n                        row = 0;\r\n                        break;\r\n            case 'B':   col = parseInt(inputData[1]);\r\n                        row = 1;\r\n                        break;\r\n            case 'C':   col = parseInt(inputData[1]);\r\n                        row = 2;\r\n                        break;\r\n            case 'D':   col = parseInt(inputData[1]);\r\n                        row = 3;\r\n                        break;\r\n            case 'E':   col = parseInt(inputData[1]);\r\n                        row = 4;\r\n                        break;\r\n            case 'F':   col = parseInt(inputData[1]);\r\n                        row = 5;\r\n                        break;\r\n            case 'G':   col = parseInt(inputData[1]);\r\n                        row = 6;\r\n                        break;\r\n            case 'H':   col = parseInt(inputData[1]);\r\n                        row = 7;\r\n                        break;\r\n            case 'I':   col = parseInt(inputData[1]);\r\n                        row = 8;\r\n                        break;\r\n            case 'J':   col = parseInt(inputData[1]);\r\n                        row = 9\r\n                        break; \r\n            default: return false;     \r\n            } \r\n    } else {\r\n        return false;\r\n    }\r\n    return {col, row}\r\n}  \r\n\r\nmodule.exports = validateInput;\n\n//# sourceURL=webpack:///./input.js?");

/***/ }),

/***/ "./onePlayerGame.js":
/*!**************************!*\
  !*** ./onePlayerGame.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./board.js\");\r\nconst validateInput = __webpack_require__(/*! ./input */ \"./input.js\");\r\nconst shotField = __webpack_require__(/*! ./output */ \"./output.js\");\r\nconst information = __webpack_require__(/*! ./information */ \"./information.js\");\r\n\r\nconst fieldClicked = document.getElementsByClassName(\"board-field\");\r\n\r\nclass OnePlayerGame {\r\n    constructor() {\r\n        this.gameBoard = new Board();\r\n        this.gameBoard.createRandomBoard();\r\n        this.hitCounter = 0;\r\n        this.moveCounter = 0;\r\n    };\r\n\r\n    onePlayerGame() {\r\n        const getId = (e) =>{\r\n            let element = e.currentTarget;\r\n            let id = element.getAttribute('id');\r\n            if (id[0] != null) {\r\n                this.onePlayerLoop(id);\r\n            }\r\n        }\r\n        Array.from(fieldClicked).forEach(function (element) {\r\n            element.addEventListener('click',  getId, {once: true});\r\n        });   \r\n    };\r\n\r\n    onePlayerLoop(id) {\r\n        let coordinate = validateInput(id);\r\n        this.moveCounter++;\r\n        let firedField = shotField(coordinate.row, coordinate.col);\r\n        if (this.gameBoard.board[coordinate.row][coordinate.col].type === 'ship') {\r\n            document.querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");\r\n            this.hitCounter++;\r\n            this.isEndOfGame();\r\n        } else {\r\n            document.querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n        }\r\n        this.gameBoard.board[coordinate.row][coordinate.col].isHited = true;\r\n    };\r\n\r\n    isEndOfGame() {\r\n        if (this.hitCounter === 23) {\r\n            this.gameBoard.showAllBoard(\"board\");\r\n            information(`Udało Ci się wygrać w ${this.moveCounter} ruchach.`)\r\n        }\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\nmodule.exports = OnePlayerGame;\n\n//# sourceURL=webpack:///./onePlayerGame.js?");

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

eval("const OnePlayerGame = __webpack_require__(/*! ./onePlayerGame */ \"./onePlayerGame.js\");\r\nconst TwoPlayersGame = __webpack_require__(/*! ./twoPlayersGame */ \"./twoPlayersGame.js\");\r\nconst AIPlayer = __webpack_require__(/*! ./aiGame */ \"./aiGame.js\");\r\nconst createNewBoard = __webpack_require__(/*! ./createBoard */ \"./createBoard.js\");\r\nconst clearBoard = __webpack_require__(/*! ./clearBoard */ \"./clearBoard.js\");\r\nconst information = __webpack_require__(/*! ./information */ \"./information.js\");\r\n\r\nconst start = document.getElementById(\"startpage\");\r\nconst gameBoard = document.getElementById(\"board\");\r\nconst gameBoard2 = document.getElementById(\"board2\");\r\nconst onePlayer = document.getElementById(\"onePlayer\");\r\nconst twoPlayers = document.getElementById(\"twoPlayers\");\r\nconst aiPlayer = document.getElementById(\"aiPlayer\");\r\nconst goBackBtn = document.getElementById(\"goBack\");\r\nconst shipsBox = document.getElementById(\"ships\");\r\n\r\n\r\n\r\nwindow.addEventListener('load', (event) => {\r\n    goBackBtn.style.display = \"none\";\r\n    gameBoard.style.display = \"none\";\r\n    gameBoard2.style.display = \"none\";\r\n    shipsBox.style.display = \"none\";\r\n});\r\n\r\ngoBackBtn.addEventListener('click', () => {\r\n    goBackBtn.style.display = \"none\";\r\n    gameBoard.style.display = \"none\";\r\n    gameBoard2.style.display = \"none\";\r\n    shipsBox.style.display = \"none\";\r\n    start.style.display = \"grid\";\r\n    clearBoard('board');\r\n    clearBoard('board2');\r\n    information(\"\");\r\n});\r\n\r\nonePlayer.addEventListener('click', () => {\r\n    start.style.display = \"none\";\r\n    gameBoard.style.display = \"grid\";\r\n    goBackBtn.style.display = \"block\";\r\n    createNewBoard(\"board\");\r\n    information(\"Postrzelaj sobie!\")\r\n    const game = new OnePlayerGame();\r\n    game.onePlayerGame();\r\n});\r\n\r\ntwoPlayers.addEventListener('click', () => {\r\n    start.style.display = \"none\";\r\n    gameBoard.style.display = \"grid\";\r\n    gameBoard2.style.display = \"grid\";\r\n    goBackBtn.style.display = \"block\";\r\n    createNewBoard(\"board\");\r\n    createNewBoard(\"board2\");\r\n    information(\"Zaczyna Gracz 1\")\r\n    const game = new TwoPlayersGame();\r\n    game.twoPlayersGame();\r\n});\r\n\r\naiPlayer.addEventListener('click', () => {\r\n    start.style.display = \"none\";\r\n    shipsBox.style.display = \"flex\";\r\n    gameBoard.style.display = \"grid\";\r\n    goBackBtn.style.display = \"block\";\r\n    createNewBoard(\"board\");\r\n    information(\"Ustaw swoje statki\");\r\n    const game = new AIPlayer();\r\n    game.aiPlayerGame();\r\n});\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ "./twoPlayersGame.js":
/*!***************************!*\
  !*** ./twoPlayersGame.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./board.js\");\r\nconst validateInput = __webpack_require__(/*! ./input */ \"./input.js\");\r\nconst shotField = __webpack_require__(/*! ./output */ \"./output.js\");\r\nconst playerOneBoardHTML = document.getElementById(\"board\");\r\nconst playerTwoBoardHTML = document.getElementById(\"board2\");\r\nconst fieldsBoardOne = document.getElementById(\"board\").childNodes;\r\nconst fieldsBoardTwo = document.getElementById(\"board2\").childNodes;\r\nconst information = __webpack_require__(/*! ./information */ \"./information.js\");\r\n\r\nclass twoPlayersGame {\r\n    constructor() {\r\n        //for Player 1\r\n        this.playerOneBoard = new Board();\r\n        this.playerOneBoard.createRandomBoard();\r\n        //for Player 2\r\n        this.playerTwoBoard = new Board();\r\n        this.playerTwoBoard.createRandomBoard();\r\n        this.playerOneHitCounter = 0;\r\n        this.playerTwoHitCounter = 0;\r\n        this.myTurn = false;\r\n    }\r\n\r\n    twoPlayersGame() {\r\n        Array.from(fieldsBoardOne).forEach(this.setEventListeners1.bind(this));\r\n        Array.from(fieldsBoardTwo).forEach(this.setEventListeners2.bind(this));\r\n    }\r\n\r\n    setEventListeners1(e) {\r\n        e.addEventListener('click',  this.playerOneMove.bind(this), { once: true });\r\n    }\r\n\r\n    setEventListeners2(e) {\r\n        e.addEventListener('click',  this.playerTwoMove.bind(this), { once: true });\r\n    }\r\n\r\n    playerOneMove(e) {\r\n        if(!this.myTurn) {\r\n            let element = e.currentTarget;\r\n            let moveOne = element.getAttribute('id');\r\n            let value = validateInput(moveOne);\r\n            if (value) {\r\n                let firedField = shotField(value.row, value.col);\r\n                this.playerOneBoard.board[value.row][value.col].isHited = true;\r\n                if (this.playerOneBoard.board[value.row][value.col].type === 'ship') {\r\n                    playerOneBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");\r\n                    this.playerOneHitCounter++;\r\n                    this.isEndOfGame();\r\n                } else {\r\n                    playerOneBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n                    this.myTurn = true;\r\n                    information(\"Ruch Gracza 2\");\r\n                }\r\n            };\r\n        } else {\r\n            e.srcElement.addEventListener('click',  this.playerOneMove.bind(this), { once: true });\r\n        }\r\n    };\r\n\r\n    playerTwoMove(e) {\r\n        console.log(e.srcElement);\r\n        if(this.myTurn) {\r\n            let element = e.currentTarget;\r\n            let moveTwo = element.getAttribute('id');\r\n            let value = validateInput(moveTwo);\r\n            if (value) {\r\n                let firedField = shotField(value.row, value.col);\r\n                this.playerTwoBoard.board[value.row][value.col].isHited = true;\r\n                if (this.playerTwoBoard.board[value.row][value.col].type === 'ship') {\r\n                    playerTwoBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/ship.jpg\");\r\n                    this.playerTwoHitCounter++;\r\n                    this.isEndOfGame();\r\n                } else {\r\n                    playerTwoBoardHTML.querySelector(firedField).setAttribute(\"src\", \"./img/ships/pudlo.jpg\");\r\n                    this.myTurn = false;\r\n                    information(\"Ruch Gracza 1\");\r\n                }\r\n            };\r\n        } else {\r\n            e.srcElement.addEventListener('click',  this.playerTwoMove.bind(this), { once: true });\r\n        }\r\n    };\r\n\r\n    isEndOfGame() {\r\n        if (this.playerOneHitCounter === 23 || this.playerTwoHitCounter === 23) {\r\n            this.playerOneBoard.showAllBoard('board');\r\n            this.playerTwoBoard.showAllBoard('board2');\r\n        }\r\n        if (this.playerOneHitCounter === 23) {\r\n            information(\"Wygrał Gracz 1\");\r\n        } else if (this.playerTwoHitCounter === 23) {\r\n            information(\"Wygrał Gracz 2\");\r\n        }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = twoPlayersGame;\n\n//# sourceURL=webpack:///./twoPlayersGame.js?");

/***/ })

/******/ });