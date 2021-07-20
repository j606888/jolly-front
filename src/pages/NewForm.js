import style from "./NewForm.module.scss"
import Outer from "../components/Outer"
import FormSettings from '../components/NewForm/FormSettings'
import AddQuestions from '../components/NewForm/AddQuestions'

const NewForm = () => {
  
  return (
    <Outer margin="2">
      <div className={style.secondbar}>
        <p>問卷設定 &gt; 建立題目 &gt; 發布問卷</p>
      </div>
      <AddQuestions />
      {/* <FormSettings /> */}
    </Outer>
  )
}

export default NewForm
