const express = require('express');

const cotizacionesRouter = require('./api/recursos/cotizaciones/cotizaciones.routes');

const app = express();

app.get('/',(req,res)=>{
    res.send('inicialización de la api challenge')
})

app.use('/cotizacion',cotizacionesRouter);

// descomentar en produccion (Respetar el orden, debe ir debajo de las rutas)

/*app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
*/
//fin descomentar en produccion

app.listen(3005,()=>{
    console.log(`escuchando en el puerto 3005`)
})