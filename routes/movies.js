const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
    Movie.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const moviename = req.body.moviename;
    const MovieorSeries = req.body.MovieorSeries;
    const category = req.body.category;

    const newMovie = new Movie({
        moviename,
        MovieorSeries,
        category
    });

    newMovie.save()
        .then(() => res.json('Movie/Series added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;