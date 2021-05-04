import { BrowserRouter, Switch } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Routes from './components/Routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Routes />
      </Switch>  
    </BrowserRouter>
  )
}

export default App;
