const letters = ['A','B','C','D','E','F','G','H','I','J'];

function createNewBoard(parentElementId) {
for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const field = document.createElement('div');
          field.id = `${letters[i]}${j}`;
          field.className = 'board-field';
          const imgInside = document.createElement('img');
          imgInside.id = `${letters[i]}${j}-img`;
          field.appendChild(imgInside);
          document.querySelector(`#${parentElementId}`).appendChild(field);
        }
    }
};

module.exports = createNewBoard;