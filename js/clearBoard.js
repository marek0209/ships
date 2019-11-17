function clearBoard(parentId){
    let elements = document.getElementById(`${parentId}`);
    while(elements.children.length > 1){
        elements.removeChild(elements.children[1]);
    }
}

module.exports = clearBoard;