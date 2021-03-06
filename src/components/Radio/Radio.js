import style from './Radio.module.scss'

const Radio = ({name, value}) => {
  return (
    <label for={value} className={style.container}>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className={style.input}
      />
      <div className={style.radio}></div>
      {value}
    </label>
  )
}

export default Radio