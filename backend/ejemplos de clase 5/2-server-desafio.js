const express =require('express')
const app= express()

// http://localhost:80900/
app.get('/', (req,res)=>{
    res.send('Bienvenidos a mi primer servervidor express')
    
})
//http://localhost:8000/saludo
app.get('/saludo',(req,res)=>{
    res.send('<h1>Bienvenidos saludo</h1>')

})
//http://localhost:8000/user
app.get('/users',(req,res)=> {
    res.send({
        nombre:'carlos',
        apellido:'perez' 
    })

})


app.listen(8000,()=>{
    console.log('ESCUCHANDO EN EL PUERTO 8000')
})