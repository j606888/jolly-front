import { useContext } from "react"
import AuthContext from "../../store/auth-context"
import { Link } from "react-router-dom"
import style from "./Navbar.module.scss"
const Navbar = () => {
  const AuthCtx = useContext(AuthContext)

  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Link to="/">
          <h3>揪哩 JOLI</h3>
        </Link>

        <div className={style.links}>
          {!AuthCtx.isLoggedIn && (
            <>
              <Link to="/login" className={style.btn}>
                登入
              </Link>
              <Link to="/register" className={`${style.btn} ${style.primary}`}>
                註冊
              </Link>
            </>
          )}
          {AuthCtx.isLoggedIn && (
            <>
              <span>Hello, {AuthCtx.name}</span>
              <button className={style.btn} onClick={() => AuthCtx.logout()}>
                登出
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
