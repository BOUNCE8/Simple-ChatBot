const express = require('express');
const path = require('path');
const router = require('./router')


const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(router);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server launched on Port: ${PORT}`));