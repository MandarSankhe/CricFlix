const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    moviename: { type: String, required: true },
    seasonno: { type: String, required: true },
    links: { type: String, required: true },
}, {
    timestamps: true,
});

const Season = mongoose.model('Season', seasonSchema);

module.exports = Season;