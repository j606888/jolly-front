import { useFormik } from "formik"
import * as Yup from "yup"
import { Link, useHistory } from "react-router-dom"
import Input from "../../components/Input"
import style from "./login.module.scss"
import AuthContext from "../../store/auth-context"
import { useContext } from 'react'
import { login } from '../../apis/auth'
import Outer from "../../components/Outer"
import "../../global.css"

const Login = () => {
  const history = useHistory()
  const authCtx = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "At least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      login({ ...values }).then(resp => {
        authCtx.login(resp)
        history.push("forms")
      })
    },
  })

  return (
    <Outer>
      <div className={style.outer}>
        <form action="#" className={style.form} onSubmit={formik.handleSubmit}>
          <h2>登入</h2>
          <p>
            以繼續使用 <span className="text-primary">揪哩</span>
          </p>
          <Input name="email" formik={formik} />
          <Input type="password" name="password" formik={formik} />
          <div className={style.checkbox}>
            <input type="checkbox" name="remember" />
            <label>記住我的帳號</label>
            <a href="/#">忘記密嗎？</a>
          </div>
          <button type="submit">登入</button>
          <span className={style.register}>
            沒有帳號嗎？<Link to="/register">前往註冊</Link>
          </span>
        </form>
      </div>
    </Outer>
  )
}

export default Login
