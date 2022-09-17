const router = require('express').Router();
let Season = require('../models/season.model');

router.route('/').get((req, res) => {
    Season.find()
        .then(seasons => res.json(seasons))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const moviename = req.body.moviename;
    const seasonno = req.body.seasonno;
    const links = req.body.links;

    const newSeason = new Season({
        moviename,
        seasonno,
        links
    });

    newSeason.save()
        .then(() => res.json('Season added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Season.findById(req.params.id)
        .then(season => res.json(season))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { 
    Season.findByIdAndDelete(req.params.id)
        .then(() => res.json('Season deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Season.findById(req.params.id)
        .then(season => {
            season.moviename = req.body.moviename;
            season.seasonno = req.body.seasonno;
            season.links = req.body.links;

            season.save()
                .then(() => res.json('Season updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;