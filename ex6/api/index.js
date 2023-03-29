const express = require('express');
const router = express.Router();

const episodesRouter = require('./episodes');
const charactersRouter = require('./characters');

router.use('/episodes', episodesRouter);
router.use('/characters', charactersRouter);

module.exports = router;