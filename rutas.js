const express = require('express'),
    router=express.Router(),
    pelicula=require('../controllers/controllerPelicula');
    serie=require('../controllers/controllerSerie')

router.use('/peliculas', pelicula);
router.use('/series', serie)

module.exports=router;