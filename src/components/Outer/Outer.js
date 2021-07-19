import style from "./Outer.module.scss"
import Navbar from "../Navbar/Navbar"

const Outer = (props) => {
  const marginClass = props.margin === "2" ? style["margin-2"] : null

  return (
    <div className={`${style.outer} ${marginClass}`}>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Outer
