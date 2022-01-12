const express = require("express");

const app = express();
const index = require("./router/rutas");
const connection=require("./config/conexion");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', index)


app.get("/saludo", (req, res)=>{

    var datos = req.query;
    res.json({message : "saludo"+datos.nombre});
});

app.get("/suma", (req, res)=>{

    var datos = req.query;
    var suma = Number(datos.n1)+Number(datos.n2);
    res.json({message : "la respuesta es :"+suma});
});

app.get("/resta", (req, res)=>{

    var datos = req.query;
    var resta = Number(datos.n1)-Number(datos.n2);
    res.json({message : "la respuesta es :"+resta});
});

app.get("/multiplicacion", (req, res)=>{

    var datos = req.query;
    var multiplicacion = Number(datos.n1)*Number(datos.n2);
    res.json({message : "la respuesta es :"+multiplicacion});
});

app.get("/division", (req, res)=>{

    var datos = req.query;
    var division = Number(datos.n1)/Number(datos.n2);
    res.json({message : "la respuesta es: "+division});
});

app.listen(5000, ()=>{
    console.log("servidor levantad");
});