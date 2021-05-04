import { Route } from 'react-router-dom'
import CreateTaskPage from '../CreateTaskPage/CreateTaskPage'
import { MainPage } from '../MainPage/MainPage'
import TaskManagerPage from '../TaskManagerPage/TaskManagerPage'

const routes = () => (
    <>
        <Route exact path="/">
            <MainPage />
        </Route>
        <Route path="/criar-tarefa">
            <CreateTaskPage />
        </Route>
        <Route path="/gerenciar-tarefa">
            <TaskManagerPage />
        </Route>
    </>
)

export default routes