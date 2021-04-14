const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyTasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (error) console.error(error);
  else console.log('Connected to DB!!!!');
})

module.exports = mongoose;