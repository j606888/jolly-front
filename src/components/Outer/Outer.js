import style from "./Outer.module.scss"
import Navbar from "../Navbar/Navbar"

const Outer = (props) => {
  return <div className={style.outer}>
    <Navbar />
    {props.children}
    </div>
}

export default Outer
