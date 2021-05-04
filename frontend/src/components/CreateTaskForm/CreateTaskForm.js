import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

export const CreateTaskForm = (props) => {
    return (
        <Form onSubmit={props.submitted}>
                    
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control value={props.title}
                    type="text"
                    placeholder="Título da Tarefa"
                    onChange={props.changedT} />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Descrição</Form.Label>
                <Form.Control value={props.message}
                    as="textarea"
                    placeholder="Descrição da Tarefa"
                    onChange={props.changedM} />
            </Form.Group>

            <Button variant="primary" type="submit">
                <FontAwesomeIcon icon={faCalendarPlus} />
                {' '} Criar Tarefa
            </Button>{' '}
            
            <Button variant="secondary" type="button" onClick={props.clicked}>
                <FontAwesomeIcon icon={faEraser} />
                {' '} Limpar
            </Button>
        </Form>
    )
}
