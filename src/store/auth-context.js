import { createContext, useState } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  refreshToken: "",
  name: "",
  email: "",
  login: (obj) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const initialRefreshToken = localStorage.getItem("refreshToken")
  const initialName = localStorage.getItem("name")
  const initialEmail = localStorage.getItem("email")
  const [token, setToken] = useState(initialToken)
  const [refreshToken, setRefreshToken] = useState(initialRefreshToken)
  const [name, setName] = useState(initialName)
  const [email, setEmail] = useState(initialEmail)

  const userIsLoggedIn = !!token

  const loginHandler = ({ name, email, token, refreshToken}) => {
    localStorage.setItem("token", token)
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("email", email)
    localStorage.setItem("name", name)
    setName(name)
    setEmail(email)
    setToken(token)
    setRefreshToken(refreshToken)
  }

  const logoutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    setToken(null)
    setRefreshToken(null)
  }

  const contextValue = {
    token,
    refreshToken,
    name,
    email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext