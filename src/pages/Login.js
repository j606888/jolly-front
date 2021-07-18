import { useFormik } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Input from "../components/Input"
import style from "./Login.module.scss"
import AuthContext from "../store/auth-context"
import { useContext } from 'react'
import { login } from '../apis/auth'
import "../global.css"

const Login = () => {
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
      })
    },
  })

  return (
    <div className={style.outer}>
      <Navbar />
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
  )
}

export default Login
