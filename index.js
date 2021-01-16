const express = require('express');

const cotizacionesRouter = require('./api/recursos/cotizaciones/cotizaciones.routes');

const app = express();

app.get('/',(req,res)=>{
    res.send('inicialización de la api challenge')
})

app.use('/cotizacion',cotizacionesRouter);

app.listen(3005,()=>{
    console.log(`escuchando en el puerto 3005`)
})