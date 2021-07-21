import style from "./Checkbox.module.scss"

const Checkbox = ({ name, value }) => {
  return (
    <label for={value} className={style.container}>
      <input
        type="checkbox"
        name={name}
        id={value}
        value={value}
        className={style.input}
      />
      <div className={style.checkbox}></div>
      {value}
    </label>
  )
}

export default Checkbox
