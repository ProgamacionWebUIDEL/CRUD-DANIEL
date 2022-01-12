var Pelicula = require('../models/peliculas'),
    express = require('express'),
    router = express.Router();

router.post('/', (req, res) => {      

    Pelicula.find({}, (err, docs) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});

router.post('/crearPelicula', (req, res) => {
    var body = req.body;
    Pelicula.insertMany({
        nombre: body.nombre,
        director: body.director,
        idioma: body.idioma,
        duracion: body.duracion
    }, (err, rest) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/eliminarPelicula', (req, res) => {
    Pelicula.remove({
        nombre: req.body.nombre,
    }, (err, rest) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

router.post('/editarPelicula', (req, res) => {
    var body = req.body;
    Pelicula.updateMany({
        nombre: body.nombre
    }, {
        $set: {
            nombre: body.nombre,
            director: body.director,
            idioma: body.idioma,
            duracion: body.duracion
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