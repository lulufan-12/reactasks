//IMPORTS AND REQUIRES

const Validator = require('validatorjs')

//CONSTANTES

const RULES = {
    title: 'required|string|min:2',
    message: 'required|string|min:2'
}
const ERRO = "Erro de validação de dados."

//VALIDAÇÃO PARA CADA MÉTODO HTTP

const insertTask = (req, res, next) => {
    const {title, message} = req.body
    const validator = new Validator({
        title,
        message
    },
    RULES)

    if(validator.passes()){
        next()
    }
    else{
        res.status(400)
        res.json({
            data: null,
            message: ERRO,
            error: validator.errors.all()
        })
    }
}

const deleteTask = (req, res, next) => {
    const {id} = req.body
    const validator = new Validator({id}, {id: 'required|integer'})

    if(validator.passes()){
        next()
    }
    else{
        res.status(400)
        res.json({
            data: null,
            message: ERRO,
            error: validator.errors.all()
        })
    }
}

const selectTask = (req, res, next) => {
    const {id} = req.query
    const validator = new Validator({id}, {id: 'integer'})

    if(validator.passes()){
        next()
    }
    else{
        res.status(400)
        res.json({
            data: null,
            message: ERRO,
            error: validator.errors.all()
        })
    }
}

const updateTask = (req, res, next) => {
    const {title, message, id} = req.body
    const validator = new Validator({
        title,
        message,
        id
    },
    {
        ...RULES,
        id: 'required|integer'
    })

    if(validator.passes()){
        next()
    }
    else{
        console.log("Erro de validação")
        res.status(400)
        res.json({
            data: null,
            message: ERRO,
            error: validator.errors.all()
        })
    }
}

module.exports = {
    insertTask,
    selectTask,
    deleteTask,
    updateTask
}