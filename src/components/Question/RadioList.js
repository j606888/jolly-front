import style from './RadioList.module.scss'
import Radio from '../Radio'

const RadioList = () => {
  return (
    <div className={style.container}>
      <div className={style.formcontrol}>
        <Radio name="animal" value="dog" />
      </div>
      <div className={style.formcontrol}>
        <Radio name="animal" value="cat" />
      </div>
      <div className={style.formcontrol}>
        <Radio name="animal" value="fish" />
      </div>
      <div className={style.formcontrol}>
        <button className={style.add}>
          <i className="fas fa-plus"></i>
          <span>新增選項</span>
        </button>
      </div>
    </div>
  )
}

export default RadioList