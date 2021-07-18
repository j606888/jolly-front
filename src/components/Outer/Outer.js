import style from "./Outer.module.scss"

const Outer = (props) => {
  return <div className={style.outer}>{props.children}</div>
}

export default Outer
