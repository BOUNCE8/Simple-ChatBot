const mongoose = require('mongoose');

const chat_db = "chat_db"

const db = mongoose;

// // Object that will contain the connection to the database in the Mongo Shell
db.connect(`mongodb://localhost:27017/${chat_db}`, { useNewUrlParser: true, useUnifiedTopology: true });


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!

// });



module.exports = {db, mongoose};