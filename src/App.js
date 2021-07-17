import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <h1>Register</h1>
          </Route>
        </Switch>
      </Router>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
