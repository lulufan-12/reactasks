import React, { Component } from 'react'
import { Card, Container} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import TaskTable from '../TaskTable/TaskTable'
import ModalDelete from '../ModalDelete/ModalDelete'
import ModalUpdate from '../ModalUpdate/ModalUpdate'

const axios = require('axios')
const URL = 'http://localhost:8080/task'

export default class TaskManagerPage extends Component {
    constructor(){
        super();
        this.state = {
            tarefas: [],
            tarefaTitle: "",
            tarefaMessage: "",
            tarefaSelecionada: null,
            showModalDelete: false,
            showModalUpdate: false
        }
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleDeleteTask = this.handleDeleteTask.bind(this)
        this.handleShowModalDeleteTask = this.handleShowModalDeleteTask.bind(this)
        this.handleUpdateTask = this.handleUpdateTask.bind(this)
        this.handleShowModalUpdateTask = this.handleShowModalUpdateTask.bind(this)
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeMessage = this.handleChangeMessage.bind(this)
    }

    async componentDidMount(){
        try{
            const response = await axios.get(URL)
            if(response.status === 200){
                this.setState({
                    tarefas: response.data.data
                })
            }
        }
        catch(err){
            console.log("Um erro ocorreu: ", err.message)
        }
    }

    handleModalClose(){
        const showModalDelete = false
        const showModalUpdate = false
        const tarefaSelecionada = null
        const tarefaTitle = ''
        const tarefaMessage = ''
        this.setState({
            showModalDelete,
            showModalUpdate,
            tarefaSelecionada,
            tarefaTitle,
            tarefaMessage
        })
    }

    async handleUpdateTask(e){
        e.preventDefault()
        const title = this.state.tarefaTitle
        const message = this.state.tarefaMessage
        const key = this.state.tarefaSelecionada
        const id = this.state.tarefas[key].id
        const data = {
            id,
            title,
            message
        }

        if(title.trim() === '' || message.trim() === ''){
            this.handleModalClose()
            return
        }

        try{
            await axios.put(URL, data)
            const tarefas = this.state.tarefas
            tarefas.splice(key, 1, data)
        }
        catch(err) {
            console.log(err.response)
        }
        finally{
            this.handleModalClose()
        }
    }

    async handleDeleteTask(){
        const key = this.state.tarefaSelecionada
        const tarefa = this.state.tarefas[key]
        
        try{
            const response = await axios.delete(URL, {
                data: {
                    id: tarefa.id
                }
            })
            console.log(response)
            const tarefas = this.state.tarefas
            tarefas.splice(key, 1)
            this.setState({tarefas})
        }
        catch(e){
            console.log("Um erro ocorreu ao excluir a tarefa")
        }finally{
            this.handleModalClose()
        }
    }

    handleShowModalDeleteTask(key){
        const showModalDelete = true
        const tarefaTitle = this.state.tarefas[key].title
        const tarefaSelecionada = key
        this.setState({showModalDelete, tarefaTitle, tarefaSelecionada})
    }

    handleShowModalUpdateTask(key){
        const showModalUpdate = true
        const tarefaSelecionada = key
        const tarefaTitle = this.state.tarefas[key].title
        const tarefaMessage = this.state.tarefas[key].message
        this.setState({
            showModalUpdate,
            tarefaSelecionada,
            tarefaTitle,
            tarefaMessage
        })
    }

    handleChangeTitle(e){
        const tarefaTitle = e.target.value
        this.setState({tarefaTitle})
    }

    handleChangeMessage(e){
        const tarefaMessage = e.target.value
        this.setState({tarefaMessage})
    }

    render() {
        return (
            <Container fluid="sm">
                <ModalDelete showModal={this.state.showModalDelete}
                    modalOnClose={this.handleModalClose}
                    tarefaTitle={this.state.tarefaTitle}
                    excluirTarefa={this.handleDeleteTask} />

                <ModalUpdate showModal={this.state.showModalUpdate}
                    modalOnClose={this.handleModalClose}
                    submitted={this.handleUpdateTask}
                    title={this.state.tarefaTitle}
                    message={this.state.tarefaMessage}
                    changedT={this.handleChangeTitle}
                    changedM={this.handleChangeMessage} />

                <Card>
                    <Card.Header>
                        <h1>Gerenciar Tarefas</h1>
                    </Card.Header>
                    <Card.Body>

                        <TaskTable tarefas={this.state.tarefas}
                            excluirTarefa={this.handleShowModalDeleteTask}
                            atualizarTarefa={this.handleShowModalUpdateTask} />

                    </Card.Body>
                    <Card.Footer>
                        <Footer />
                    </Card.Footer>
                </Card>
            </Container>
            
        )
    }
}
