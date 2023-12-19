const { request } = require("express")

const express = req('express')
const app = express()

// http://localhost:8000/
app.get('/params/:nombre', (req, res)=> {
    console.log(req.params)
    res.send('Bienvenidos ${req.params.nombre}')

})

// http://localhost:80900/
app.get('/dosparams/:nombre/:apellido', (req, res)=> {
    console.log(req.params)
    res.send('Bienvenido ${req.params.nombre} ${req.params.apellido}')

})



app.listen(8080,()=>{
    console.log('ESCUCHANDO EN EL PUERTO 8000')
})