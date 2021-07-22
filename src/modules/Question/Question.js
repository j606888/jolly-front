import style from "./Question.module.scss"
import { useState } from "react"
import Switch from "react-switch"
import RadioList from "./RadioList"
import CheckboxList from "./CheckboxList"

const Question = ({ number, type }) => {
  const icons = {
    radio: "fas fa-circle",
    checkbox: "fas fa-check-square",
    text: "fas fa-font",
    paragraph: "fas fa-align-left",
  }

  const icon = icons[type]
  const [checked, setChecked] = useState(false)
  const handleChange = (nextChecked) => {
    setChecked(nextChecked)
  }

  return (
    <div className={style.container}>
      <div className={style.left}>
        <span>{number}.</span>
        <i className={icon}></i>
      </div>
      <div className={style.right}>
        <div className={style.formcontrol}>
          <input type="text" placeholder="題目標題" />
        </div>
        {type === "radio" && <RadioList />}
        {type === "checkbox" && <CheckboxList />}
        <div className={style.formcontrol}>
          <div className={style.setting}>
            <Switch onChange={handleChange} checked={checked} labels />
            <button className={style.delete}>
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
