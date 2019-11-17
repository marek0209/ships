function information(txtInfo) {
    const informationField = document.getElementById("info");
    console.log(informationField);
    informationField.innerHTML = `<h2>${txtInfo}</h2>`;
}

module.exports = information;