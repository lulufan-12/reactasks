import React from 'react'
import PropTypes from 'prop-types'
import { Button, Accordion, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const TaskTable = props => {

    const tarefas = props.tarefas
    let tarefasFormatadas = null
    if(tarefas.length <= 0){
        tarefasFormatadas = <h3 style={{textAlign: "center"}}>Não há nenhuma tarefa.</h3>
    }
    else{
        tarefasFormatadas = tarefas.map((t, k) => {
            return (
                <div key={t.id}>
                    <Card.Header style={{display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'}}>
                        <Accordion.Toggle as={Button} variant="link" eventKey={t.id}>    
                            <h5>
                                {t.title}
                            </h5>
                        </Accordion.Toggle>
                        <div>
                            <Button variant="warning" onClick={() => props.atualizarTarefa(k)}>
                                <FontAwesomeIcon icon={faEdit}/>
                            </Button>
                            {' '}
                            <Button variant="danger" onClick={() => props.excluirTarefa(k)}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </Button>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey={t.id}>
                        <Card.Body>
                            {t.message}
                        </Card.Body>
                    </Accordion.Collapse>
                </div>
            )
        })
    }
    
    return (
        <Accordion>
            <Card>
                {tarefasFormatadas}
            </Card>
        </Accordion>
    )
}

TaskTable.propTypes = {
    tarefas: PropTypes.array
}
export default TaskTable