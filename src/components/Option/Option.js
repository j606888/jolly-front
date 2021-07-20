import style from './Option.module.scss'

const types = {
  radio: {
    icon: "fas fa-circle",
    span: "單選題"
  },
  checkbox: {
    icon: "fas fa-check-square",
    span: "複選題"
  },
  text: {
    icon: "fas fa-font",
    span: "簡答"
  },
  paragraph: {
    icon: "fas fa-align-left",
    span: "段落"
  },
}
const Option = ({type}) => {

  const { icon, span } = types[type]

  return (
    <div className={style.container}>
      <div className={style.icon}>
        <i className={icon}></i>
      </div>
      <div className={style.text}>
        <span>{span}</span>
      </div>
    </div>
  )
}

export default Option