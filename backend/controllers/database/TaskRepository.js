//CONEXAO AO BANCO DE DADOS SQLITE

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  },
  useNullAsDefault: true
})

//METODO PARA INSERIR TAREFA - METODO HTTP POST

const insertTask = async (req, res) => {
    try{
        const {title, message} = req.body
        const resultado = knex('tasks').insert({
            title,
            message
        })
        res.status(200)
        res.json({
            data: await resultado,
            message: 'Tarefa criada com sucesso.',
            error: null
        })
    }
    catch(erro){
        const error_message = "Erro ao tentar criar a nova tarefa. \n"
        res.status(400)
        res.json({
            data: null,
            message: error_message,
            error: err
        })
    }
}

//METODO PARA DELETAR TAREFA - METODO HTTP DELETE

const deleteTask = async (req, res) => {
    try{
        const {id} = req.body
        const resultado = await knex('tasks')
            .where('id', id)
            .del()

            if(resultado != 0){
                res.status(200)
                res.json({
                    data: resultado,
                    message: 'Tarefa excluída com sucesso.',
                    error: null
                })
            }
            else{
                const error_message = "Nenhuma tarefa encontrada com o ID informado."
                res.status(400)
                res.json({
                    data: null,
                    message: error_message,
                    error: null
                })
            }
    }
    catch(erro){
        const error_message = "Erro ao tentar remover a tarefa. \n"
        console.log(error_message, erro)
        res.status(400)
        res.json({
            data: null,
            message: error_message,
            error: erro
        })
    }
}

//METODO PARA ATUALIZAR TAREFA - METODO HTTP PUT

const updateTask = async (req, res) => {
    try{
        const {id, title, message} = req.body
        const resultado = await knex('tasks')
        .where('id', id)
        .update({
            title,
            message
        })
        if(resultado != 0){
            res.status(200)
            res.json({
                data: resultado,
                message: 'Tarefa atualizada com sucesso.',
                error: null
            })
        }
        else{
            const error_message = "Nenhuma tarefa encontrada com o ID informado."
            res.status(400)
            res.json({
                data: null,
                message: error_message,
                error: null
            })
        }
    }
    catch(erro){
        const error_message = "Erro ao tentar atualizar a tarefa: \n"
        console.log(error_message, erro)
        res.status(400)
        res.json({
            data: null,
            message: error_message,
            error: erro
        })
    }
}

//METODO PARA BUSCAR TODAS TAREFAS

const selectAllTasks = async (req, res) => {
    try{
        const {id} = req.query
        const resultado = knex.select().table('tasks')
        res.status(200)
        res.json({
            data: await resultado,
            message: '',
            error: null
        })
    }
    catch(erro){
        const error_message = "Erro ao tentar buscar as tarefas: \n"
        console.log(error_message, erro)
        res.status(400)
        res.json({
            data: null,
            message: error_message,
            error: erro
        })
    }
}

//METODO PARA BUSCAR UMA TAREFA

const selectOneTask = async (req, res) => {
    try{
        const {id} = req.query
        const resultado = knex('tasks').where({
            id: id
          }).select()

        res.status(200)
        res.json({
            data: await resultado,
            message: '',
            error: null
        })
    }
    catch(erro){
        const error_message = "Erro ao tentar buscar a tarefa: \n"
        console.log(error_message, erro)
        res.status(400)
        res.json({
            data: null,
            message: error_message,
            error: erro
        })
    }
}

//METODO PARA ESCOLHER QUAL SELECT USAR - METODO HTTP GET

const select = async (req, res) => {
    if(req.query.id){
        selectOneTask(req, res)
    }
    else{
        selectAllTasks(req, res)
    }
}

module.exports = {
    insertTask,
    deleteTask,
    updateTask,
    select
}