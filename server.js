const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')
const routes_curso = require('./routes-curso')
const routes_usuario_curso = require('./routes-usuarios-cursos')


const app = express()
app.set('port',process.env.PORT || 9000)
const dbOptions ={
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: '_freelrn2'
}

//middlewares-----------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())


//routes---------------------------
app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})
app.use('/api',routes)
app.use('/api_curso',routes_curso)
app.use('/api_usuario_curso',routes_usuario_curso)

//Server running------------------------EL PUERTO DE MYSQL ES EL 3306 Y LA CLAVE ES 123456
app.listen(app.get('port'), ()=>{
    console.log('Server running on port',app.get('port'))
})
