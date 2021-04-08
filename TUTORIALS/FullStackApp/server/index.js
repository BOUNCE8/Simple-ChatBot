const express = require('express');
const router = require('./router');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Coming to you live from: http://localhost:${PORT}`);
})