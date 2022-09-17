const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    moviename: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    MovieorSeries: { type: String, required: true },
    category: { type: String, required: true },
}, {
    timestamps: true,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;