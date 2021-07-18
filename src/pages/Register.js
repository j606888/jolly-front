import { useFormik } from "formik"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import { register } from '../apis/auth'
import Input from "../components/Input"
import style from "./Register.module.scss"
import Navbar from "../components/Navbar"
import AuthContext from "../store/auth-context"
import { useContext } from "react"
import "../global.css"

const Register = () => {
  const authCtx = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "At least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      register({...values}).then(resp => {
        authCtx.login(resp)
      })
    },
  })

  return (
    <div className={style.outer}>
      <Navbar />
      <form action="#" className={style.form} onSubmit={formik.handleSubmit}>
        <h2>註冊</h2>
        <p>
          以繼續使用 <span className="text-primary">揪哩</span>
        </p>
        <Input name="name" formik={formik} autoComplete="off" />
        <Input name="email" formik={formik} />
        <Input type="password" name="password" formik={formik} />
        <button type="submit">註冊</button>
        <span className={style.register}>
          已經有帳號嗎？<Link to="/login">前往登入</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
