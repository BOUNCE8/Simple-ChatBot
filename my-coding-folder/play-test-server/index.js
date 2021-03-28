const express = require('express');
const router = require('./router');

const app = express();
const port = 3001;

app.use(router);

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})