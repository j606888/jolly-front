import { Link } from "react-router-dom"
import Outer from "../../components/Outer"
import style from "./forms.module.scss"
import Searchbar from "../../components/Searchbar"
import NewCard from "../../modules/forms/Card/NewCard"

const Forms = () => {
  return (
    <Outer margin="2">
      <div className={style.secondbar}>
        <div className={`${style.link} ${style.active}`}>
          <Link to="/">問卷資料庫</Link>
        </div>
        <div className={style.link}>
          <Link to="/">我填寫過的問卷</Link>
        </div>
      </div>
      <Searchbar />
      <div className={style["cards-container"]}>
        <NewCard />
      </div>
    </Outer>
  )
}

export default Forms
