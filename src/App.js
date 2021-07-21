import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import NotFound from "./pages/NotFound"
import Forms from "./pages/forms"
import NewForm from "./pages/new-form"
import PrivateRoute from "./pages/PrivateRoute"

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/forms" />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/forms" component={Forms} />
      <PrivateRoute path="/new-form" component={NewForm} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default App
