const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharactersSchema = new Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: Object,
    location: Object,
    image: String,
    episode: [String],
    url: String,
}, {
    versionKey: false,
    timestamps: true
});

const CharactersModel = mongoose.model('Character', CharactersSchema, 'Characters');

module.exports = CharactersModel;