import style from './Input.module.scss'
import _ from 'lodash'

const Input = ({type, name, formik, autoComplete}) => {
  const error = formik.touched[name] && formik.errors[name]

  return (
    <div className={style.container}>
      <input
        className={`${style.input} ${error && style.error}` }
        type={type || 'text'}
        name={name}
        placeholder={_.capitalize(name)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        autoComplete={autoComplete || "on"}
      />
      {error && <span className={style.message}>{error}</span>}
    </div>
  )
}

export default Input