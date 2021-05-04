//IMPORT E REQUIRES

const express = require('express')
const Router = express.Router()
const TaskRepository = require('../controllers/database/TaskRepository')
const TaskValidator = require('../controllers/validate/TaskValidator')

//ROTAS

Router.get("/", TaskValidator.selectTask, TaskRepository.select)
Router.post("/", TaskValidator.insertTask, TaskRepository.insertTask)
Router.delete("/", TaskValidator.deleteTask, TaskRepository.deleteTask)
Router.put("/", TaskValidator.updateTask, TaskRepository.updateTask)

module.exports = Router