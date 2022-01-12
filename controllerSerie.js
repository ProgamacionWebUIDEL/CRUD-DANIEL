var Serie = require('../models/series'),
    express = require('express'),
    router = express.Router();

router.post('/findSerie', (req, res) => {

    Serie.find({}, (err, docs) => {

        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)

    });
});

router.post('/creaSerie', (req, res) => {
    var body = req.body;
    Serie.insertMany({
        nombre: body.nombre,
        numTemporadas: body.numTemporadas,
        director: body.director,
        idioma: body.idioma,
        descripcion: body.descripcion

    }, (err, rest) => {

        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)

    });
});
router.post('/eliminaSerie', (req, res) => {
    Serie.remove({
        nombre: req.body.nombre,
    }, (err, rest) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});
router.post('/editaSerie', (req, res) => {
    var body = req.body;
    Serie.updateMany({
        nombre: body.nombre
    }, {
        $set: {

            nombre: body.nombre,
            numTemporadas: body.numTemporadas,
            director: body.director,
            idioma: body.idioma,
            descripcion: body.descripcion

        }

    }, (err, rest) => {

        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)

    });

});


module.exports = router;