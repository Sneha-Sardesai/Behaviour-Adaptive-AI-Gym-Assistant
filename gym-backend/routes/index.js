const express = require('express');
const router = express.Router();

router.get('/api/message', (req, res) => {
    res.json( { message : "Hello world from backend!" });
})

module.exports = router;