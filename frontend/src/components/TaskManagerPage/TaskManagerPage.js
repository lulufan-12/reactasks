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
            tasks: [],
            taskTitle: "",
            taskMessage: "",
            selectedTask: null,
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
            this.setState({
                tasks: response.data.data
            })
        }
        catch(err){
            console.log(err.response.data.message)
        }
    }

    handleModalClose(){
        const showModalDelete = false
        const showModalUpdate = false
        const selectedTask = null
        const taskTitle = ''
        const taskMessage = ''
        this.setState({
            showModalDelete,
            showModalUpdate,
            selectedTask,
            taskTitle,
            taskMessage
        })
    }

    async handleUpdateTask(e){
        e.preventDefault()
        const title = this.state.taskTitle
        const message = this.state.taskMessage
        const key = this.state.selectedTask
        const id = this.state.tasks[key].id
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
            const tasks = this.state.tasks
            tasks.splice(key, 1, data)
        }
        catch(err) {
            console.log(err.response.data.message)
        }
        finally{
            this.handleModalClose()
        }
    }

    async handleDeleteTask(){
        const key = this.state.selectedTask
        const task = this.state.tasks[key]
        
        try{
            await axios.delete(URL, {
                data: {
                    id: task.id
                }
            })
            const tasks = this.state.tasks
            tasks.splice(key, 1)
            this.setState({tasks})
        }
        catch(err){
            console.log(err.response.data.message)
        }finally{
            this.handleModalClose()
        }
    }

    handleShowModalDeleteTask(key){
        const showModalDelete = true
        const taskTitle = this.state.tasks[key].title
        const selectedTask = key
        this.setState({showModalDelete, taskTitle, selectedTask})
    }

    handleShowModalUpdateTask(key){
        const showModalUpdate = true
        const selectedTask = key
        const taskTitle = this.state.tasks[key].title
        const taskMessage = this.state.tasks[key].message
        this.setState({
            showModalUpdate,
            selectedTask,
            taskTitle,
            taskMessage
        })
    }

    handleChangeTitle(e){
        const taskTitle = e.target.value
        this.setState({taskTitle})
    }

    handleChangeMessage(e){
        const taskMessage = e.target.value
        this.setState({taskMessage})
    }

    render() {
        return (
            <Container fluid="sm">
                <ModalDelete showModal={this.state.showModalDelete}
                    modalOnClose={this.handleModalClose}
                    taskTitle={this.state.taskTitle}
                    deleteTask={this.handleDeleteTask} />

                <ModalUpdate showModal={this.state.showModalUpdate}
                    modalOnClose={this.handleModalClose}
                    formSubmitted={this.handleUpdateTask}
                    title={this.state.taskTitle}
                    message={this.state.taskMessage}
                    titleChanged={this.handleChangeTitle}
                    messageChanged={this.handleChangeMessage} />

                <Card>
                    <Card.Header>
                        <h1>Gerenciar tasks</h1>
                    </Card.Header>
                    <Card.Body>

                        <TaskTable tasks={this.state.tasks}
                            deleteTask={this.handleShowModalDeleteTask}
                            updateTask={this.handleShowModalUpdateTask} />

                    </Card.Body>
                    <Card.Footer>
                        <Footer />
                    </Card.Footer>
                </Card>
            </Container>
            
        )
    }
}
