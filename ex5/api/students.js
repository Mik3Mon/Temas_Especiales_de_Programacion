const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.send({
        message: "Get all the students"
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    res.send({
        message: "Create a student",
        body
    });
});

module.exports = router;