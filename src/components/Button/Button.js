import style from "./Button.module.scss"

// const color = ['red', 'blue', 'green']
// const size = ['sm', 'md', lg']
const Button = ({ text, color="secondary", size="md" }) => {

  return (
    <button className={`${style.btn} ${style[color]} ${style[size]}`}>
      {text}
    </button>
  )
}

export default Button
