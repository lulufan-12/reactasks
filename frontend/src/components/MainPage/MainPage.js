import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


export const MainPage = () => {
    return (
        <Container fluid='sm'>
            <Card>
                <Card.Header>
                    <h1>ReacTasks</h1>        
                </Card.Header>
                <Card.Body>
                    <h3>Gerenciador de tarefas feito com React</h3>
                    <p>Navegue para a página <Link to="/criar-tarefa">Criar Tarefa</Link> e comece agora mesmo!</p>
                    <h3>Aprendizado</h3>
                    <p>
                        ReacTasks é um projeto fullstack que fiz com o intuito de praticar e obter mais conhecimento
                        em desenvolvimento frontend com o ambiente React e backend com ExpressJS.
                    </p>
                    <p>
                        Embora seja um projeto bem pequeno, tive a oportunidade de estudar e trabalhar com diversas
                        ferramentas tanto no lado do frontend como no backend.

                        Abaixo está a lista de recursos utilizados e explorados:
                    </p>
                    <ul>
                        <li>React</li>
                        <li>React Router Dom</li>
                        <li>React Router Bootstrap</li>
                        <li>React-Bootstrap</li>
                        <li>Axios</li>
                        <li>Font Awesome</li>
                        <li>Cors</li>
                        <li>ExpressJS</li>
                        <li>Knex</li>
                        <li>Sqlite3</li>
                        <li>ValidatorJS</li>
                        <li>E muito mais!</li>
                    </ul>
                </Card.Body>
                <Card.Footer>
                    <Footer />
                </Card.Footer>
            </Card>
        </Container>
    )
}
