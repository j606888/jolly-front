import { createContext, useState } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  refreshToken: "",
  login: (obj) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const initialRefreshToken = localStorage.getItem("refreshToken")
  
  const [token, setToken] = useState(initialToken)
  const [refreshToken, setRefreshToken] = useState(initialRefreshToken)
  
  const userIsLoggedIn = !!token

  const loginHandler = ({ name, email, token, refreshToken}) => {
    localStorage.setItem("token", token)
    localStorage.setItem("refreshToken", refreshToken)

    setToken(token)
    setRefreshToken(refreshToken)
  }

  const logoutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')

    setToken(null)
    setRefreshToken(null)
  }

  const contextValue = {
    token,
    refreshToken,
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