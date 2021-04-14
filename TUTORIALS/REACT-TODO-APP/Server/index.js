const express = require('express');
const router = require('./router');
const cors = require('cors');

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Coming to you live from: http://localhost: ${PORT}`);

});