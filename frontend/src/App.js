import { BrowserRouter, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Routes from './components/Routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Routes />
      </Switch>  
    </BrowserRouter>
  )
}

export default App;
