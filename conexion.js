var mongoose = require('mongoose'); 

var connection = mongoose.connect("mongodb+srv://ity");
//var connection = mongoose.connect("mongodb+srv://ymtorresb:iJwkkLVzpwjVliNg@cluster0.2a68v.mongodb.net/Sistema?retryWrites=true&w=majority");
mongoose.connection.on('open',(ref)=>{
    console.log("Conectado con Mongodb");

});

module.exports=connection;