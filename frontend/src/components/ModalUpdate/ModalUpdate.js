import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

const modal = props => {
    return (
        <Modal show={props.showModal} onHide={props.modalOnClose} backdrop="static">
            <Form onSubmit={props.formSubmitted}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterar Tarefa</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Novo título</Form.Label>
                            <Form.Control value={props.title}
                                type="text"
                                placeholder="Título da Tarefa"
                                onChange={props.titleChanged} />
                        </Form.Group>
            
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Nova descrição</Form.Label>
                            <Form.Control value={props.message}
                                as="textarea"
                                placeholder="Descrição da Tarefa"
                                onChange={props.messageChanged} />
                        </Form.Group>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.modalOnClose}>Cancelar</Button>

                    <Button variant="primary" type="submit">Alterar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    titleChanged: PropTypes.func.isRequired,
    messageChanged: PropTypes.func.isRequired,
    modalOnClose: PropTypes.func.isRequired
}

export default modal