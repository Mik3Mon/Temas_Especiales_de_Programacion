const express = require('express');
const router = express.Router();

const charactersController = require('../controllers/characters');

router.get('/', async (_, res) => {
    const characters = await charactersController.getAll();
    res.send(characters);
});

module.exports = router;