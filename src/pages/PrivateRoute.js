import { useContext } from "react"
import AuthContext from "../store/auth-context"
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
  const AuthCtx = useContext(AuthContext)

  if (AuthCtx.isLoggedIn) {
    return (
      <Route {...rest} render={children}/>      
    )
  } else {
    return (
      <Redirect to="/login" />
    )
  }
}

export default PrivateRoute
