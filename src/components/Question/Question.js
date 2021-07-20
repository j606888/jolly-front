import style from "./Question.module.scss"
import { useState } from "react"
import Switch from "react-switch"

const Question = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (nextChecked) => {
    setChecked(nextChecked)
  }

  return (
    <div className={style.container}>
      <div className={style.left}>
        <span>1.</span>
        <i className="fas fa-circle"></i>
      </div>
      <div className={style.right}>
        <div className={style.formcontrol}>
          <input type="text" value="題目標題" />
        </div>
        <div className={style.formcontrol}>
          <label>
            <input type="radio" name="animal" value="dog" />
            <span>Dog</span>
          </label>
        </div>
        <div className={style.formcontrol}>
          <label>
            <input type="radio" name="animal" value="cat" />
            <span>Cat</span>
          </label>
        </div>
        <div className={style.formcontrol}>
          <button className={style.add}>
            <i className="fas fa-plus"></i>
            <span>新增選項</span>
          </button>
        </div>
        <div className={style.formcontrol}>
          <div className={style.setting}>
            <Switch onChange={handleChange} checked={checked} labels />
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
