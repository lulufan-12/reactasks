//IMPORTS e REQUIRES
const express = require('express')
const task_route = require('./routes/task-route')
const cors = require('cors')

//CONSTANTES
const porta = 8080
const app = express()

//MIDDLEWARES GLOBAIS
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ROTAS
app.use('/task', task_route)

//SERVIDOR UP
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
