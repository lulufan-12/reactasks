import React, { Component } from 'react'
import { Container, Alert, Card } from 'react-bootstrap'
import { CreateTaskForm } from '../CreateTaskForm/CreateTaskForm'
import Footer from '../Footer/Footer'

const axios = require('axios')
const URL = "http://localhost:8080/task"

export default class CreateTaskPage extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            message: '',
            showAlert: false,
            alertVariant: '',
            response: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.cleanState = this.cleanState.bind(this)
    }

    handleTitleChange(e){
        const title = e.target.value
        this.setState({title})
    }

    handleMessageChange(e){
        const message = e.target.value
        this.setState({message})
    }

    cleanState(){
        const title = ''
        const message = ''
        this.setState({
            title,
            message
        })
    }

    async handleFormSubmit(e){
        e.preventDefault()
        this.setState({showAlert: false})
        const title = this.state.title
        const message = this.state.message
        
        if(title.trim() === '' || message.trim() === ''){
            const response = 'Preencha todos os campos.'
            this.setState({
                response,
                showAlert: true,
                alertVariant: 'danger'
            })
            return
        }

        let result = null
        
        try{
            result = await axios.post(URL, {
                title,
                message
            })
            const response = result.data.message
            this.setState({
                response,
                showAlert: true,
                alertVariant: 'success'
            })
            this.cleanState()
        }
        catch(err){
            const response = err.message
            this.setState({
                response,
                showAlert: true,
                alertVariant: 'danger'
            })
            this.cleanState()
        }
    }

    render() {
        return (
            <Container fluid="sm">
                <Card>
                    <Card.Header>
                        <h1>Criar Tarefa</h1>
                    </Card.Header>
                    <Card.Body>
                        <CreateTaskForm
                        submitted={this.handleFormSubmit}
                        clicked={this.cleanState}
                        title={this.state.title}
                        message={this.state.message}
                        changedT={this.handleTitleChange}
                        changedM={this.handleMessageChange} />
                        <br />
                        <Alert show={this.state.showAlert}
                            onClose={() => this.setState({showAlert: false})}
                            variant={this.state.alertVariant} dismissible>
                            {this.state.response}
                        </Alert>
                    </Card.Body>
                    <Card.Footer>
                        <Footer />
                    </Card.Footer>
                </Card>
            </Container>
        )
    }
}
