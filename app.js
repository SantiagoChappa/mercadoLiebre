const express= require('express')
const path= require('path')
const app= express()
const port= process.env.PORT || 3000
const publicPath= path.join(__dirname, './public')


app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/registrarse', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/ingresar', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('*', (req, res)=>{
    res.send('NOT FOUND', 404);
})

app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto '+ port);
})
