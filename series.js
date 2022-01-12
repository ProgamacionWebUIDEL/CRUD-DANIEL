var mongoose = require('mongoose');
Schema=mongoose.Schema; 

var serieSchema = new mongoose.Schema({
    nombre: {type: String},
    numTemporadas: {type: String},
    director: {type: String},
    idioma: {type: String},
    anioEstreno: {type: String},
    descripcion: {type: String}
});
var serie=mongoose.model('serie', serieSchema);

module.exports=serie;