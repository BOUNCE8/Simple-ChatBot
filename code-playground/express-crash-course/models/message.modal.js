const dataBase = require('../dataBase');


function findAll () {
    return dataBase.message;
}

function saveMessage (req, res) {
    dataBase.message.push(message);
}


module.exports = {findAll, saveMessage};