const { CharactersModel } = require('../models')

const BASE_URL = 'https://rickandmortyapi.com/api';
const RESOURCE = 'character';

async function getAll () {
    const charactersSaved = await CharactersModel.find({});

    if (charactersSaved.length) {
        return charactersSaved;
    }

    let next;
    const characters = [];
    do {
        const result = await getByUrl(next);
        next = result.info?.next;
        characters.push(...result.results)
    } while (next !== null);

    if (characters.length) {
        for (const character of characters) {
            const newCharacter = new CharactersModel(character);
            await newCharacter.save();
        }
    }

    return characters;
}

async function getByUrl (next = null) {
    const url = next || `${BASE_URL}/${RESOURCE}`;

    return fetch(url).then(response => response.json());
}

const charactersController = {
    getAll,
    getByUrl
};

module.exports = charactersController;