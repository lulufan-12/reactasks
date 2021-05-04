import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const modal = props => {
    return (
        <Modal show={props.showModal} onHide={props.modalOnClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Excluir Tarefa</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Deseja realmente excluir a tarefa: <strong>{props.tarefaTitle}</strong></p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.modalOnClose}>Cancelar</Button>
                <Button variant="danger" onClick={props.excluirTarefa}>Excluir</Button>
            </Modal.Footer>
        </Modal>
    )
}

modal.propTypes = {
    showModal: PropTypes.bool,
    modalOnClose: PropTypes.func,
    excluirTarefa: PropTypes.func
}

export default modal
