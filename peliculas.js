var mongoose = require('mongoose');
Schema=mongoose.Schema; 

var peliculaSchema = new mongoose.Schema({     
    nombre: {type: String},
    director: {type: String},
    anioEstreno: {type: Number},
    idioma: {type: String},
    duracion: {type: String}
});
var pelicula= mongoose.model('pelicula', peliculaSchema);   

module.exports=pelicula;