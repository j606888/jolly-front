import style from "./new-form.module.scss"
import Outer from "../../components/Outer"
import FormSettings from '../../modules/new-form/FormSettings'
import AddQuestions from '../../modules/new-form/AddQuestions'
import Release from '../../modules/new-form/Release'

const NewForm = () => {
  return (
    <Outer margin="2">
      <div className={style.secondbar}>
        <p>問卷設定 &gt; 建立題目 &gt; 發布問卷</p>
      </div>
      <FormSettings />
      <AddQuestions />
      <Release />
    </Outer>
  )
}

export default NewForm
