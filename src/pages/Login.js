import style from './Login.module.scss'
import '../global.css'

const Login = () => {
  return (
    <div className={style.outer}>
      <form action="#" className={style.form}>
        <h2>登入</h2>
        <p>
          以繼續使用 <span className="text-primary">揪哩</span>
        </p>
        <input className={style.input} type="email" name="email" placeholder="Email" />
        <input className={style.input} type="password" name="password" placeholder="Password" />
        <div className={style.checkbox}>
          <input type="checkbox" name="remember" />
          <label>記住我的帳號</label>
          <a href="/#">忘記密嗎？</a>
        </div>
        <button type="submit">登入</button>
        <span className={style.register}>
          沒有帳號嗎？<a href="/#">前往註冊</a>
        </span>
      </form>
    </div>
  )
}

export default Login
