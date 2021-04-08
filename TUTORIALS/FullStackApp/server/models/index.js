const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://localhost:27017/AppDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (error) console.error(error);
  console.log('Connected to DB!!!!')
});

module.exports = mongoose
