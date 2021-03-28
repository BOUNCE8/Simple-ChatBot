const MongoClient = require('mongodb').MongoClient;

// Object that will contain the connection to the database in the Mongo Shell
const db = {};

db.MongoClient = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

(async function connect () {
  try {
    const client = await db.MongoClient.connect();
    const database = client.db('sexy-chat-db');
    const collection = database.collection('message_log');
    db.collection = collection;
  } catch (error) {
    console.error(error);
  }
})();

module.exports = db;