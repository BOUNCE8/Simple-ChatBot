const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    console.log('Server Alert: Recieved request to hello endpoint')
    res.send('hello from the server');
})

module.exports = router;