import Option from '../Option'
import Button from "../Button"
import Question from "../Question"
import style from './AddQuestions.module.scss'

const AddQuestions = () => {
  return (
    <div className={style.container}>
      <Question />
      <div className={style["options-box"]}>
        <i className={`fas fa-plus ${style.logo}`}></i>
        <div className={style.options}>
          <Option type="radio" />
          <Option type="checkbox" />
          <Option type="text" />
          <Option type="paragraph" />
        </div>
      </div>
      <div className={style.buttons}>
        <Button text="< 問卷設定" />
        <Button text="發布問卷 >" color="primary" />
      </div>
    </div>
  )
}

export default AddQuestions