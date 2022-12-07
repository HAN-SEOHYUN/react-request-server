const express = require('express');
const router = express.Router();

router.get('/route', (req, res) => {
    res.send("라우팅")
});

module.exports = router;