const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) console.error(err);
  console.log('Connected to DB!!!!')
});

//finish this