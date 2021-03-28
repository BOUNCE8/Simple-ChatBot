const db = require("../db");

function findAll() {
  return db.msgs;
}

function saveMessage(message) {
  db.msgs.push(message);
}

module.exports = { findAll, saveMessage };
