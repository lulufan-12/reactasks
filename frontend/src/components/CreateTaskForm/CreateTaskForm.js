import React from 'react'
import { Form, Button } from 'react-bootstrap'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

const CreateTaskForm = (props) => {
    return (
        <Form onSubmit={props.formSubmitted}>
                    
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control value={props.title}
                    type="text"
                    placeholder="Título da Tarefa"
                    onChange={props.titleChanged} />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Descrição</Form.Label>
                <Form.Control value={props.message}
                    as="textarea"
                    placeholder="Descrição da Tarefa"
                    onChange={props.messageChanged} />
            </Form.Group>

            <Button variant="primary" type="submit">
                <FontAwesomeIcon icon={faCalendarPlus} />
                {' '} Criar Tarefa
            </Button>{' '}
            
            <Button variant="secondary" type="button" onClick={props.cancelClicked}>
                <FontAwesomeIcon icon={faEraser} />
                {' '} Limpar
            </Button>
        </Form>
    )
}

CreateTaskForm.propTypes = {
    formSubmitted: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    titleChanged: propTypes.func.isRequired,
    message: propTypes.string.isRequired,
    messageChanged: propTypes.func.isRequired,
    cancelClicked: propTypes.func.isRequired
}

export default CreateTaskForm