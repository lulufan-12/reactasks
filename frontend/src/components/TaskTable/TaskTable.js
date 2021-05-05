import React from 'react'
import PropTypes from 'prop-types'
import { Button, Accordion, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const TaskTable = props => {

    const tasks = props.tasks
    let prettyTasks = null
    if(tasks.length <= 0){
        prettyTasks = <h3 style={{textAlign: "center", padding: "5px"}}>Não há nenhuma tarefa.</h3>
    }
    else{
        prettyTasks = tasks.map((t, k) => {
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
                            <Button variant="warning" onClick={() => props.updateTask(k)}>
                                <FontAwesomeIcon icon={faEdit}/>
                            </Button>
                            {' '}
                            <Button variant="danger" onClick={() => props.deleteTask(k)}>
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
                {prettyTasks}
            </Card>
        </Accordion>
    )
}

TaskTable.propTypes = {
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}
export default TaskTable