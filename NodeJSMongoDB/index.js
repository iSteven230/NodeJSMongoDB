import express from 'express'
import {agregarContacto} from './mongo_config/mongo_config.js'
const app = express()

app.set('views', './vistas')
app.set('view engine', 'ejs')

app.use(express.static('./estilos'))
app.use(express.urlencoded({extended:true}))


app.listen('27017', (req, res)=>{
    console.log('aplicacion en http://localhost:27017')
})  

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/agregar', (req, res) =>{
    agregarContacto(req, res)
})