import { useContext } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import AuthContext from "./store/auth-context"
import SecretPage from "./pages/SecretPage"

function App() {
  const AuthCtx = useContext(AuthContext)

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      {!AuthCtx.isLoggedIn && <Route path="/login" component={Login} />}
      {!AuthCtx.isLoggedIn && <Route path="/register" component={Register} />}
      {AuthCtx.isLoggedIn && <Route path="/secret" component={SecretPage} />}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}

export default App
