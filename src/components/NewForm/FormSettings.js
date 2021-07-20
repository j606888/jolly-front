import Button from "../Button"
import Switch from "react-switch"
import { useState } from "react"

import style from "./FormSettings.module.scss"

const FormSettings = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (nextChecked) => {
    setChecked(nextChecked)
  }

  return (
    <div className={style.container}>
      <div className={style.questions}>
        <div className={style.section}>
          <div className={style.title}>
            <h2>問卷資訊</h2>
            <hr />
          </div>
          <div className={style.formcontrol}>
            <span>問卷名稱</span>
            <input type="text" value="無標題活動問卷" />
          </div>
          <div className={style.formcontrol}>
            <span>活動描述</span>
            <textarea></textarea>
          </div>
          <div className={style.formcontrol}>
            <span>備註圖片</span>
            <input type="file" />
          </div>
        </div>

        <div className={style.section}>
          <div className={style.title}>
            <h2>回收設定</h2>
            <hr />
          </div>

          <div className={style.formcontrol}>
            <span>問卷截止時間</span>
            <Switch onChange={handleChange} checked={checked} labels />
          </div>
          <div className={style.formcontrol}>
            <span>收集填表者名單</span>
            <Switch onChange={handleChange} checked={checked} labels />
          </div>
        </div>

        <div className={style.section}>
          <div className={style.title}>
            <h2>填寫者權限</h2>
            <hr />
          </div>

          <div className={style.formcontrol}>
            <span>可檢視他人完整回覆</span>
            <Switch onChange={handleChange} checked={checked} labels />
          </div>
          <div className={style.formcontrol}>
            <span>僅能提交一份</span>
            <Switch onChange={handleChange} checked={checked} labels />
          </div>
          <div className={style.formcontrol}>
            <span>提交後可編輯</span>
            <Switch onChange={handleChange} checked={checked} labels />
          </div>
        </div>
        <div className={style.buttons}>
          <Button text="取消" />
          <Button text="建立題目 >" color="primary" />
        </div>
      </div>
    </div>
  )
}

export default FormSettings
