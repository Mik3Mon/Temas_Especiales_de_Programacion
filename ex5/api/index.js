const express = require('express');
const router = express.Router();

const studentRouter = require('./students');

router.use('/students', studentRouter);

module.exports = router;