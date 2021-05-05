import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons'

const navigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container fluid="sm">
                <Navbar.Brand>
                    ReacTasks
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <LinkContainer exact to="/">
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faHome} />
                                    {' '} Início
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/criar-tarefa">
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faPlus} />
                                    {' '} Criar Tarefa
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer  to="/gerenciar-tarefa">
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faTasks} />
                                    {' '} Gerenciar Tarefas
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default navigationBar