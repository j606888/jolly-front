import style from './CheckboxList.module.scss'
import Checkbox from '../Checkbox'

const CheckboxList = () => {
  return (
    <div className={style.container}>
      <div className={style.formcontrol}>
        <Checkbox name="animal" value="BMW" />
      </div>
      <div className={style.formcontrol}>
        <Checkbox name="animal" value="Mazda" />
      </div>
      <div className={style.formcontrol}>
        <Checkbox name="animal" value="Nissan" />
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

export default CheckboxList