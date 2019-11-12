function shotField(row, column) {
    switch (row) {
        case 0:  return `#A${column}-img`;
        case 1:  return `#B${column}-img`;
        case 2:  return `#C${column}-img`;
        case 3:  return `#D${column}-img`;
        case 4:  return `#E${column}-img`;
        case 5:  return `#F${column}-img`;
        case 6:  return `#G${column}-img`;
        case 7:  return `#H${column}-img`;
        case 8:  return `#I${column}-img`;
        case 9:  return `#J${column}-img`;
        default: return false;
    }     
}

module.exports = shotField;